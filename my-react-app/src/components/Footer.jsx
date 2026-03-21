
// import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer () {
  return (

    <footer className="footer">
      <div>
        <h3>Duncan</h3>
      </div>
      <div>
        <p>
            &copy; {new Date().getFullYear()} © KiptumDun. All rights reserved.
        </p>
      </div>
      <div><p>real@raizy.co.ke | +254 769 977 636</p></div> 
    </footer>
  );
};

export default Footer;