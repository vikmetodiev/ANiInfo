import React from "react";
import {  Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
  return (
    <div>
      <footer className="dark-blue-bg">
        <Container>
          <Row>
            <Col className="py-4">
              <div className="socials text-center d-flex align-items-center">
                <div className="d-flex align-items-center mobile-alignment">
                  <small className="text-white">
                    View us on: 
                  </small>
                  <div className="">
                    <a
                      href={`https://www.facebook.com/`}
                      aria-label="Facebook Link"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faFacebookSquare}
                        className="icon mx-2 mt-1"
                      />
                    </a>
                    <a
                      href={`https://www.instagram.com/`}
                      aria-label="Instagram Link"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagramSquare}
                        className="icon mx-2"
                      />
                    </a>
                    <a
                      href={`https://twitter.com/?lang=en`}
                      aria-label="Twitter Link"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faTwitterSquare}
                        className="icon mx-2"
                      />
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center mobile-alignment">
                  <small className="text-white ml-3">
                    Contacts:    
                  </small>
                  <a
                  rel="noreferrer"
                    href={`mailto:vik.mtdiev@gmail.com`}
                    target="_blank"
                    className="d-flex align-items-center"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="icon mx-2" />
                    <small className="ml-2"> vik.mtdiev@gmail.com</small>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
