import React from 'react';
import { Container } from 'react-bootstrap';

function FooterComponent() {
    return (
        <footer className="bg-light text-center mt-4 py-3 shadow-sm">
            <Container>
                <p>
                    <strong>VSG Agro Private Limited</strong><br />
                    CIN: U29308WB2022PTC251024<br />
                    Ground Floor, Opp. Talati Office, Tandulwadi, Baramati-413102, Dist-Pune, India<br />
                    Email: <a href="mailto:vsgagro@gmail.com">vsgagro@gmail.com</a> | Phone: <a href="tel:7293964242">7293-96-4242</a>
                </p>
                <p className="text-center mb-0">&copy; 2025 VSG Agro Equipments</p>
            </Container>
        </footer>
    );
}

export default FooterComponent;
