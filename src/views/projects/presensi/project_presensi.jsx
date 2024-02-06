import CustomNavbar from "../../components/CustomNavbar";
import React from "react";
import { Container, Image, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ProjectPresensi() {
  return (
    <div>
      <CustomNavbar></CustomNavbar>
      <div className="bg-white">
        <Container className="container-project">
          <div className="pt-5">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="10"
                viewBox="0 0 5 8"
                fill="none"
              >
                <path d="M4 1L1 4L4 7" stroke="#707070"></path>
              </svg>
              <a
                href="/projects"
                className="ms-1 text-decoration-none text-gray f-14"
              >
                See All Projects
              </a>
            </span>
          </div>
          {/* Content */}
          <h3 className="mt-3 f-l-bold">E-Store Mobile Application</h3>
          <p className="tag-category">Figma Design</p>
          <Image
            src="/assets/images/projects/kashku/Preview_kashsku.png"
            width={"100%"}
          ></Image>

          <h4 className="mt-5 f-i-semi-bold">About The Kashku</h4>
          <p className="text-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            officia saepe quasi in quas cum aut, totam tempore voluptas dicta
            necessitatibus quo ad repudiandae, vitae odio, dolore suscipit. Sit
            voluptas reprehenderit ipsam unde accusantium delectus neque qui
            voluptates earum deserunt placeat esse est, magnam repellendus
            perferendis sint sequi possimus minus nulla consequatur aut.
          </p>

          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <Image
                src="/assets/images/projects/kashku/Mockup_kashku-1.png"
                width={"100%"}
              ></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/assets/images/projects/kashku/Mockup_kashku-2.png"
                width={"100%"}
              ></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/assets/images/projects/kashku/Mockup_kashku-3.png"
                width={"100%"}
              ></Image>
            </Carousel.Item>
          </Carousel>

          <h4 className="mt-5 f-i-semi-bold">About The Kashku</h4>
          <p className="text-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            officia saepe quasi in quas cum aut, totam tempore voluptas dicta
            necessitatibus quo ad repudiandae, vitae odio, dolore suscipit. Sit
            voluptas reprehenderit ipsam unde accusantium delectus neque qui
            voluptates earum deserunt placeat esse est, magnam repellendus
            perferendis sint sequi possimus minus nulla consequatur aut.
          </p>

          <h5 className="f-i-semi-bold mt-5">Project Links</h5>
          <span>
            <svg
              id="Capa_1"
              enable-background="new 0 0 512 512"
              height="24"
              viewBox="0 0 512 512"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="m256.599 256c0-47.128 38.205-85.333 85.333-85.333 47.128 0 85.333 38.206 85.333 85.333 0 47.129-38.206 85.333-85.333 85.333-47.129 0-85.333-38.205-85.333-85.333z"
                  fill="#00bcff"
                />
                <path
                  d="m85.932 426.667c0-47.128 38.205-85.333 85.333-85.333l45.475-24.009 39.858 24.009v85.333c0 47.129-38.205 85.333-85.333 85.333-47.128 0-85.333-38.205-85.333-85.333z"
                  fill="#00cf7f"
                />
                <path
                  d="m256.599 0-46.434 80.67 46.434 89.996h84.136c47.129 0 85.333-38.205 85.333-85.333 0-47.128-38.205-85.333-85.333-85.333z"
                  fill="#ff7361"
                />
                <path
                  d="m84.734 85.333c0 47.128 38.205 85.333 85.333 85.333l45.267 17.484 41.263-17.484v-170.666h-86.531c-47.127 0-85.332 38.205-85.332 85.333z"
                  fill="#ff4d12"
                />
                <path
                  d="m85.932 256c0 47.129 38.205 85.333 85.333 85.333h85.333v-170.667h-85.333c-47.128 0-85.333 38.206-85.333 85.334z"
                  fill="#b659ff"
                />
              </g>
            </svg>
            <a
              href=" https://www.figma.com/file/LCuHMHjOFBNMAnDOeORUuu/Web-Portofolio?type=design&node-id=5%3A1245&mode=design&t=KTXbBSN3baanwI0C-1"
              className="text-decoration-none text-gray"
            >
              &nbsp; Visit on Figma
            </a>
          </span>

          <div className="pb-5"></div>
        </Container>
      </div>
    </div>
  );
}

export default ProjectPresensi;
