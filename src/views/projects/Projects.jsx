import { Container, Image, Row, Col } from "react-bootstrap";
import CustomNavbar from "../components/CustomNavbar";

function Projects() {
  return (
    <>
      <div class="elipse2"></div>
      <div class="elipse1"></div>
      <CustomNavbar></CustomNavbar>
      <Container className="mt-5 pt-2">
        <h3 className="f-l-bold text-white mb-0">My Latest Projects</h3>
        <p className="text-gray">
          This list is some of the projects i have completed.
        </p>

        <Row className="card-projects-left">
          <div className="col-md-6">
            <Image
              src="/src/assets/images/projects/kashku/Preview_kashsku.png"
              width={"100%"}
            ></Image>
          </div>
          <div className="col-md-6">
            <a
              href="detail_projects/deail_e-store.html"
              className="text-decoration-none"
            >
              <p className="f-22 f-l-bold text-white ">
                Flutter UI Design Mobile Application EStore with FakeStore API
              </p>
            </a>
            <p class="text-gray f-14">
              Created by{" "}
              <span className="f-i-medium text-white">fathurdewantoro</span>
            </p>
            <p class="text-gray f-14 mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
              voluptates ex eligendi aspernatur provident cumque reprehenderit
              possimus saepe atque impedit illo sapiente, nesciunt non dolorem
              neque, dolore obcaecati, delectus dolores asperiores perspiciatis
              nisi laborum. Maiores repellat laborum quam placeat debitis?
            </p>
          </div>
        </Row>

        <Row className="card-projects-right">
          <div className="col-md-6 order-1">
            <a
              href="detail_projects/deail_e-store.html"
              className="text-decoration-none"
            >
              <p className="f-22 f-l-bold text-white ">
                Flutter UI Design Mobile Application EStore with FakeStore API
              </p>
            </a>
            <p class="text-gray f-14">
              Created by{" "}
              <span className="f-i-medium text-white">fathurdewantoro</span>
            </p>
            <p class="text-gray f-14">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
              voluptates ex eligendi aspernatur provident cumque reprehenderit
              possimus saepe atque impedit illo sapiente, nesciunt non dolorem
              neque, dolore obcaecati, delectus dolores asperiores perspiciatis
              nisi laborum. Maiores repellat laborum quam placeat debitis?
            </p>
          </div>

          <div className="col-md-6 order-md-1">
            <Image
              src="/src/assets/images/projects/kashku/Preview_kashsku.png"
              width={"100%"}
            ></Image>
          </div>
        </Row>

        <Row className="card-projects-left">
          <div className="col-md-6">
            <Image
              src="/src/assets/images/projects/kashku/Preview_kashsku.png"
              width={"100%"}
            ></Image>
          </div>
          <div className="col-md-6">
            <a
              href="detail_projects/deail_e-store.html"
              className="text-decoration-none"
            >
              <p className="f-22 f-l-bold text-white ">
                Flutter UI Design Mobile Application EStore with FakeStore API
              </p>
            </a>
            <p class="text-gray f-14">
              Created by{" "}
              <span className="f-i-medium text-white">fathurdewantoro</span>
            </p>
            <p class="text-gray f-14 mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
              voluptates ex eligendi aspernatur provident cumque reprehenderit
              possimus saepe atque impedit illo sapiente, nesciunt non dolorem
              neque, dolore obcaecati, delectus dolores asperiores perspiciatis
              nisi laborum. Maiores repellat laborum quam placeat debitis?
            </p>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Projects;
