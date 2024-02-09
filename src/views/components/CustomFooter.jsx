import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function CustomFooter() {
  return (
    <>
      <div className=" footer-custom-black mt-0 pt-5 pb-4">
        <Container className="">
          <h4 className=" f-l-bold text-white">Get in touch</h4>
          <p className=" text-gray p-0 m-0 text-white">
            For business inquiry please send email to
          </p>
          <p className=" text-gray f-l-bold text-white">
            fathurtiasdewantoro@gmail.com
          </p>
          <div className="d-flex ">
            <FontAwesomeIcon
              icon={faLinkedin}
              color="white"
              fontSize={30}
              className="me-3"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faGithub}
              color="white"
              fontSize={30}
              className="me-3"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faDribbble}
              color="white"
              fontSize={30}
              className="me-3"
            ></FontAwesomeIcon>
          </div>
        </Container>
      </div>
    </>
  );
}

export default CustomFooter;
