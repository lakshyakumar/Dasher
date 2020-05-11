import React from 'react';
import '../../styles/footer.css';

function Footer(props){
  return(
    <div className="footer_container">
      <div className="logo">DashER</div>
      <div className="footer-links">
          <div> Important Links </div>
          <div>
            <a href={props.chatLink}>Hyperledger rocket chat</a>
          </div>
          <div>
            <a href={props.githubLink}>github</a>
          </div>
      </div>
    </div>
  );
}

export default Footer;
