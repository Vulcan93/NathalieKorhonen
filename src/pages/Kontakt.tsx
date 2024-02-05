import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./Kontakt.css";
import sky from "../../public/mountains.jpg";

export default function Kontakt() {
  return (
    <div>
      <Container>
        <Row className="row-main">
          <div className="kontakt-content">
            <Col xs={4} md={6} lg={12}>
              <h3 className="kontakt-h3">Kontakt</h3>
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
          </div>
          <div className="hero-image">
            <img src={sky} alt="ocean/100px250" />
          </div>
          <div className="kontakt-content">
            <Col xs={12} md={6} lg={12}>
              <Form>
                <Form.Group as={Row} className="mb-3" controlId="formGroupNamn">
                  <Form.Label column sm={1}>
                    Namn:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="namn" placeholder="namn" />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formGroupEmail">
                  <Form.Label column sm={1}>
                    Email address:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="email" placeholder="email" />
                  </Col>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="beskrivningForm.ControlTextarea">
                  <Form.Label>
                    Kort beskrivning om vad ärendet gäller:
                  </Form.Label>
                  <Form.Control
                    className="textarea-main"
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Skicka
                </Button>
              </Form>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
}
