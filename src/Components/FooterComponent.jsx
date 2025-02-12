import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function FooterComponent() {
  return (
    <footer className="bg-light text-d py-4">
      <Container className="text-center">
        <h5>VSG Agro Private Limited</h5>
        <p>
          CIN- U29308WB2022PTC251024<br />
          Ground Floor, Opp. Talati Office, Tandulwadi, Baramati-413102, Dist-Pune, India<br />
          Email: <a href="mailto:vsgagro@gmail.com" className="text-d">vsgagro@gmail.com</a> |
          Phone: <a href="tel:7293964242" className="text-d">7293-96-4242</a>
        </p>

        <div className="social-icons">
          <a href="#" className="text-d mx-2"><FaFacebook size={24} /></a>
          <a href="#" className="text-d mx-2"><FaInstagram size={24} /></a>
          <a href="#" className="text-d mx-2"><FaTwitter size={24} /></a>
          <a href="#" className="text-d mx-2"><FaLinkedin size={24} /></a>
        </div>

        <p className="mt-3">&copy; 2025 VSG Agro. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default FooterComponent;
