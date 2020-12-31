import React from "react";
import Footer from "../Component/footer";
import { Icon } from "../Component/icons/styles/icons";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Link href="#">story</Footer.Link>
            <Footer.Link href="#">Clients</Footer.Link>
            <Footer.Link href="#">Testimonial</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Link href="#">story</Footer.Link>
            <Footer.Link href="#">Clients</Footer.Link>
            <Footer.Link href="#">Testimonial</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Projects</Footer.Title>
            <Footer.Link href="#">story</Footer.Link>
            <Footer.Link href="#">Clients</Footer.Link>
            <Footer.Link href="#">Testimonial</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social Media</Footer.Title>
            <Footer.Link href="#">
              <Icon className="fab fa-facebook-square" />
              Facebook
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-instagram" />
              Instagram
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-youtube" />
              Youtube
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
