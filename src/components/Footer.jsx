import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { FaArtstation } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <a href="mailto:vivianedubuc@outlook.com"><IoMdMail /></a>
            <a href="https://ca.linkedin.com/in/vivianedubuc" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/Viviane-Dubuc" target="_blank"><AiOutlineGithub /></a>
            <a href="https://www.artstation.com/vivianedubuc1" target="_blank"><FaArtstation /></a>
        </footer>
    );
};

export default Footer;