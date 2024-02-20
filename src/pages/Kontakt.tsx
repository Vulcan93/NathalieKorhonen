import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Kontakt.css";
import blommor1 from "../../public/blommor1.jpg";
import { useScrollRefs } from "../components/Layout";

const Kontakt = () => {
  const { kontaktRef } = useScrollRefs();

  return (
    <div ref={kontaktRef}>
      <Container>
        <div className="kontakt-container">
          <div className="kontakt-requestform">
            <img
              className="img-kontakt"
              src={blommor1}
              alt="todopicture/100px250"
              height={400}
              loading="lazy"
            />
          </div>
          <div className="kontakt-info">
            <h4 className="kontakt-h3">Kontakt</h4>
            <p>Om du vill komma i kontakt med mig och har frågor</p>
            <div className="span-container">
              <span>
                Email:
                <a href="mailto:someone@example.com">someone@example.com</a>
              </span>
            </div>
            <div>
              <Col xs={12} md={12} lg={12}>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formGroupNamn">
                    <Form.Label column sm={1} lg={1}>
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
                    <Form.Label column sm={1} lg={2}>
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
                    <Form.Control className="textarea-main" as="textarea" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Skicka
                  </Button>
                </Form>
              </Col>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Kontakt;
