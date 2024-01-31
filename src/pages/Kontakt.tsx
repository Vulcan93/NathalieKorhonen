import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Kontakt.css";

export default function Kontakt() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={4} className="kontakt-leftside">
          <h3>Kontakt</h3>
          <div className="span-container">
            <span>Nathalie Kornhonen</span>
            <span>
              Telefon:
              <a href="tel:+467XXXXXXXX">+467XXXXXXXX</a>
            </span>
            <span>
              Email:
              <a href="mailto:someone@example.com">someone@example.com</a>
            </span>
            <address>
              <p>Winter wonderland 56B</p> <p>415 98</p> <p> Göteborg</p>
            </address>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4} className="kontakt-rightside">
          <form>
            <label>
              Namn:
              <input name="namn" />
            </label>
            <label>
              Email:
              <input name="email" />
            </label>
            <div>
              <label>
                Kort beskrivning om vad ärendet gäller:
                <textarea />
              </label>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </Col>
      </Row>
    </Container>
  );
}
