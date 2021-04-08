import React from 'react';




class Footer extends React.Component {

    render() {
        let d = new Date();
        let n = d.getFullYear();
        return (
            <div id="footer">
                <div className="footerText">
                    This site is designed by Himanshu Mahawar.
                </div>
                <div className="footerCopy">
                    <p>Copyright © 2020 {(n > 2020) ? "-" + n : ""} <a href="https://himanshu27tasveer.github.io">tasveer</a>. All rights reserved.</p>
                </div>
            </div>
        );
    }

}

export default Footer;