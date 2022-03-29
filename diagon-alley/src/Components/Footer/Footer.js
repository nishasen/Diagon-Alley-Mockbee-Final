import React from 'react';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
        <h4>Created with 💖 by Nisha Sen</h4>
        <div className="footer-links">
            <a href="https://github.com/nishasen" rel="noreferrer" target="_blank" className="footer-icon"><FaGithubSquare /></a>
            <a href="https://www.linkedin.com/in/nisha-sen-13644b191/" rel="noreferrer"target="_blank" className="footer-icon"><FaLinkedin /></a>
            <a href="https://twitter.com/NishaSe58693459" rel="noreferrer" target="_blank" className="footer-icon"><FaTwitterSquare /></a>
        </div>
    </div>
  )
}

export  { Footer };