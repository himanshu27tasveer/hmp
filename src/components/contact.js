import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, Form, FormGroup, Input, Label } from 'reactstrap';
import fetch from 'cross-fetch';




class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            isModalOpen: false,
            name: '',
            email: '',
            message: ''
        };
    }


    handleSubmit(event) {

        const mess = {
            'name': this.state.name,
            'email': this.state.email,
            'message': this.state.message
        }

        fetch('https://hmp-mail-api.herokuapp.com/send', {
            method: 'POST',
            body: JSON.stringify(mess),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'https://hmp-mail-api.herokuapp.com/send',
                'Access-Control-Allow-Methods': ["POST", "GET", "OPTIONS", "DELETE", "PUT"]
            }
        }, { mode: 'cors' })
            .then(response => {
                if (response.ok) {
                    return response;
                }
                else {
                    let error = new Error("Cannot send message right now! Sorry for incovinience.");
                    error.response = error;
                    throw error
                }
            },
                error => {
                    let errmess = new Error(error.message);
                    throw errmess;
                })
            .then(response => response.json())
            .then(alert(`Thanks for Contacting me!\n Please wait for my response`))
            .catch(error => { alert('I haven\'t received you message. Please try other options\nError: ' + error.message); });

        this.toggleModal();
        event.preventDefault();
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
            name: '',
            email: '',
            message: ''
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    render() {
        return (
            <div id="contact">
                <div id="lgbtq"></div>
                <br />
                <div className="section">
                    <h3 className="text-center head">Contact Me</h3> <p className="text-light text-center des gradient-text">Let's talk about Something</p>
                </div>
                <br />
                <br />
                <div className="container">
                    <div className="wrap">
                        <button className="Cbutton gradient-text" style={{"borderBottom": "1px solid red"}} onClick={this.toggleModal}>Message</button>
                    </div>
                    
                    <Modal id="modalDiv" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Message</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label htmlFor="name">Your Name</Label>
                                    <Input type="text" value={this.state.name} id="name" name="name" onChange={this.handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="email">Your Email</Label>
                                    <Input type="email" id="email" value={this.state.email} name="email" onChange={this.handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="message">Your Message</Label>
                                    <Input type="textarea" name="message" class="form-control" value={this.state.message} rows="5" onChange={this.handleInputChange} id="message" />
                                </FormGroup>
                                <br />
                                <Button type="submit" style={{"marginLeft": "43%"}} value="submit" outline color="danger" >Send</Button>
                            </Form>
                        </ModalBody>
                    </Modal>

                </div>
                <br />
                <br />
                <br />

            </div>
        );
    }

}


export default Contact;