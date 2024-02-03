import { Row, Image, Col, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import React from "react";
import CustomNavbar from "../components/CustomNavbar";

function Dashboard() {
  const list = ["work-1.png", "work-3.png", "work-2.png"];


  return (
    <>
      <div class="elipse2"></div>
      <div class="elipse1"></div>
      <CustomNavbar></CustomNavbar>
      <div className="section-introduce">
        <Container className="text-center mt-5 pt-5">
          <Image
            width={150}
            src="/src/assets/images/big_avatar.png"
            roundedCircle
          />
          <h5 className="text-white pt-3 m-0 f-l-medium f-22">
            Hi, I'm Fathur{" "}
          </h5>
          <p className="text-gray f-14">a mobile Developer</p>
          <div className="mobile-cursor"></div>
          <div className="web-cursor"></div>
          <h1 className="text-white f-l-bold mt-5 pt-5">
            Passionate<br></br>to craft amazing<br></br>Mobile Apps.
          </h1>
          <div className="d-flex justify-content-center mt-3">
            <p className="text-gray f-14 intro-subtitle">
              a design enthusiast that already have freelancing experient as
              Mobile Developer. In a addition to web design. I’m currenlt
              learning no-code development tools as webflow.
            </p>
          </div>
          <Button className="btn btn-light px-5 py-3 f-16 f-l-medium">
            Connect with me
          </Button>
        </Container>
      </div>

      <Container className=" section-projects">
        <h4 className="text-white f-l-bold f-28 mb-0">My Latest Works</h4>
        <p className="text-gray">Perfect solution for digital experience.</p>
      </Container>

      <Container>
        <div className="mx-auto flex flex-col justify-center max-w-sm">
          <div>
            <ul className="custom-list d-flex flex-row overflow-x-auto ps-0">
              {list.map((item, index) => (
                <Image
                  src={"/src/assets/images/" + item}
                  className={index === list.length - 1 ? "" : "me-4"}
                />
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <div className="section-interested">
        <div className=""></div>
        <Container
          style={{
            paddingTop: 200,
          }}
          className="text-center"
        >
          <h4 className="text-white f-l-bold f-36">
            Interested working with me ?
          </h4>
          <p className="text-gray">
            Let’s work together to machine<br></br>something great.
          </p>
          <Row className="mt-5">
            <Col className="d-flex justify-content-end">
              <Button className="btn btn-border f-l-medium">
                See More Projects
              </Button>
            </Col>
            <Col className="d-flex justify-content-start">
              <Button className="btn btn-light px-5 py-3 f-16 f-l-medium">
                Email Me
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Container style={{ marginTop: 100 }} className="text-center">
        <h4 className="text-white f-l-bold f-36">Why Hire Me ?</h4>
        <Row className="mt-5">
          <Col className="mt-3">
            <Image src="/src/assets/images/communicative.png"></Image>
            <h5 className="text-white mt-3 f-l-medium">Communicative</h5>
            <p className="text-gray f-14">
              My strong communication skills ensure smooth information flow
              within the team.
            </p>
          </Col>
          <Col className="mt-3">
            <Image src="/src/assets/images/collaborative.png"></Image>
            <h5 className="text-white mt-3 f-l-medium">Collaborative</h5>
            <p className="text-gray f-14">
              I have experience working collaboratively, understanding the
              importance of teamwork to achieve optimal results.
            </p>
          </Col>
          <Col className="mt-3">
            <Image src="/src/assets/images/user-centered.png"></Image>
            <h5 className="text-white mt-3 f-l-medium">
              User-Centric Approach
            </h5>
            <p className="text-gray f-14">
              I am dedicated to creating applications that go beyond mere
              functionality by prioritizing user experience.
            </p>
          </Col>
          <Col className="mt-3">
            <Image src="/src/assets/images/client-favourite.png"></Image>
            <h5 className="text-white mt-3 f-l-medium">Client's Favourite</h5>
            <p className="text-gray f-14">
              I am committed to exceeding client expectations, prioritizing
              client satisfaction as a primary goal.
            </p>
          </Col>
        </Row>
      </Container>

      <div className="footer-pattern footer-custom pt-5 pb-4">
        <Container className="">
          <h4 className=" f-l-bold">Get in touch</h4>
          <p className=" text-gray p-0 m-0">
            For business inquiry please send email to
          </p>
          <p className=" text-gray f-l-bold">fathurtiasdewantoro@gmail.com</p>
          <div className="d-flex ">
            <Image
              height={30}
              style={{ marginRight: 20 }}
              className=""
              src="/src/assets/icons/linkein.png"
            ></Image>
            <Image
              height={30}
              style={{ marginRight: 20 }}
              className=""
              src="/src/assets/icons/github.png"
            ></Image>
            <Image
              height={30}
              style={{ marginRight: 20 }}
              className=""
              src="/src/assets/icons/dribble.png"
            ></Image>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Dashboard;
