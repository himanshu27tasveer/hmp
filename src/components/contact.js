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
                    let error = new Error(response.status + ' Error: ' + response.statusText);
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
                <br />
                <div className="section">
                    <h1 className="text-center head">Contact Me</h1> <h6 className="text-light text-center des">Let's talk about Something</h6>
                </div>
                <br />
                <br />
                <br />
                <div className="container">
                    <div className="wrap">
                        <button className="Cbutton" onClick={this.toggleModal}>Talk to me</button>
                    </div>
                    <div className="orDiv">
                        <img className="or" src="./assets/or.png" alt="Or" /> <h2 style={{ display: "inline", color: "rgb(43,43,43" }}>Or</h2>
                    </div>
                    <Modal id="modalDiv" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Write to me</ModalHeader>
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
                                    <Label for="message">Message For Me</Label>
                                    <Input type="textarea" name="message" class="form-control" value={this.state.message} rows="5" onChange={this.handleInputChange} id="message" />
                                </FormGroup>
                                <br />
                                <Button type="submit" value="submit" outline color="danger" >Send</Button>
                            </Form>
                        </ModalBody>
                    </Modal>

                </div>
                <div className="socialbar">
                    <div className="row">
                        <div className="socialimg"><a href="https://www.facebook.com/himanshu27.stu"><img className="simg" alt="facebook" src="./assets/social/facebook.png" /></a></div>
                        <div className="socialimg"><a href="https://www.instagram.com/himanshu.tasveer"><img className="simg" alt="instagram" src="./assets/social/instagram.png" /></a></div>
                        <div className="socialimg"><a href="https://www.linkedin.com/in/im-himanshu27"><img className="simg" alt="linkedin" src="./assets/social/linkedin.png" /></a></div>
                        <div className="socialimg"><a href="https://www.twitter.com/imhimanshu27"><img className="simg" alt="twitter" src="./assets/social/twitter.png" /></a></div>
                        <div className="socialimg"><a href="https://github.com/himanshu27tasveer"><img className="simg" alt="github" src="./assets/social/github.png" /></a></div>

                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>
        );
    }

}


export default Contact;