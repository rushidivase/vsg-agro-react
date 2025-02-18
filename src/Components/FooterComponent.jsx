import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function FooterComponent() {
  return (
    <footer className="bg-light text-dark py-4">
      <Container className="text-center">
        <h5>VSG Agro Private Limited</h5>
        <p>
          CIN- U29308WB2022PTC251024<br />
          Ground Floor, Opp. Talati Office, Tandulwadi, Baramati-413102, Dist-Pune, India<br />
          Email: <a href="mailto:vsgagro@gmail.com" className="text-dark">vsgagro@gmail.com</a> |
          Phone: <a href="tel:7293964242" className="text-dark">7293-96-4242</a>
        </p>

        <div className="social-icons d-flex justify-content-center gap-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark">
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark">
            <FaInstagram size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-dark">
            <FaLinkedin size={24} />
          </a>
        </div>

        <p className="mt-3">&copy; {new Date().getFullYear()} VSG Agro. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default FooterComponent;
