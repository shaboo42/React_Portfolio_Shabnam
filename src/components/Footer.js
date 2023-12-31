import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={96}>
          </Col>
          <Col size={12} sm={96} className="text-center text-sm-end">
            <div className="social-icon d-flex justify-content-center">
              <a href="https://www.linkedin.com/in/shabnamislam/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/khushi.islam.9235"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/i._shab?igshid=YmMyMTA2M2Y="><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>SHABNAM ISLAM ©2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
