import React, { FC, forwardRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./Kontakt.css";
import blommor1 from "../../public/blommor1.jpg";
import { ScrollRefProps } from "../interfaces/Interface";

const Kontakt: FC<ScrollRefProps> = ({ forwardedRef }) => {
  return (
    <div ref={forwardedRef}>
      <Container>
        <Row>
          <div className="kontakt-info">
            <Col xs={12} md={12} lg={12}>
              <h3 className="kontakt-h3">Kontakt</h3>
              <p>Om du vill komma i kontakt med mig och har frågor:</p>
              <div className="span-container">
                <span>
                  Email:
                  <a href="mailto:someone@example.com">someone@example.com</a>
                </span>
              </div>
            </Col>
          </div>

          <div className="kontakt-requestform">
            <Col xs={12} md={12} lg={12}>
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
                    Email:
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
        <Row>
          <Col>
            <img src={blommor1} alt="todopicture/100px250" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Kontakt;
