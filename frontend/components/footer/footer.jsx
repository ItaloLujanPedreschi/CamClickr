import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaPortrait } from 'react-icons/fa';

export default ({ currentUser }) => {
    if (currentUser) {
        return null;
    } else {
        return (
            <footer>
                <div className="footer-container">
                    <ul className="footer-links">
                        <li className="footer-link">
                            <a href="https://github.com/ItaloLujanPedreschi/CamClickr" target="_blank">
                                <AiFillGithub className="footer-icon" />
                            </a>
                        </li>
                        <li className="footer-link">
                            <a href="https://www.linkedin.com/in/italo-lujan-98169373/" target="_blank">
                                <AiFillLinkedin className="footer-icon" />
                            </a>
                        </li>
                        <li className="footer-link">
                            <a href="https://italolujan.com/" target="_blank">
                                <FaPortrait className="footer-icon" />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}