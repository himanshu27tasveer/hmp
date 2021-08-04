import React from 'react';




class Footer extends React.Component {

    render() {
        let d = new Date();
        let n = d.getFullYear();
        return (
            <div id="footer">
                <div id="lgbtq"></div>
                <br/>
                <div className="socialbar">
                        <div className="row">
                            <div className="socialimg"><a href="https://www.facebook.com/himanshu27.stu"><img className="simg" alt="facebook" src="./assets/social/fb.svg" /></a></div>
                            <div className="socialimg"><a href="https://www.instagram.com/himanshu.tasveer"><img className="simg" alt="instagram" src="./assets/social/instagram.svg" /></a></div>
                            <div className="socialimg"><a href="https://github.com/himanshu27tasveer"><img className="simg" alt="github" src="./assets/social/github.png" /></a></div>
                            <div className="socialimg"><a href="https://www.linkedin.com/in/im-himanshu27"><img className="simg" alt="linkedin" src="./assets/social/linkedin.svg" /></a></div>
                            <div className="socialimg"><a href="https://www.twitter.com/imhimanshu27"><img className="simg" alt="twitter" src="./assets/social/twitter.png" /></a></div>

                        </div>
                    </div>
                <div className="footerText">
                    This site is designed by Himanshu Mahawar.
                </div>
                <div className="footerCopy">
                    <p>No Copyright © 2020 {(n > 2020) ? "-" + n : ""} <a href="https://tasveer-hmp.web.app">tasveer</a>. No rights are reserved.</p>
                </div>
            </div>
        );
    }

}

export default Footer;