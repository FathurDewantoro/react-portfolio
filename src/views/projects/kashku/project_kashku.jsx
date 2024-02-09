import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomNavbar from "../../components/CustomNavbar";
import React from "react";
import { Container, Image, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";

function ProjectKashku() {
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
          <h3 className="mt-3 f-l-bold">
            Kashku - Mengelola Keuangan dengan Mudah, Memahami dengan Cerdas
          </h3>
          {/* <p className="tag-category-green-r">
            <FontAwesomeIcon
              icon={faAndroid}
              style={{ marginRight: 3 }}
            ></FontAwesomeIcon>{" "}
            Android Apps
          </p> */}
          <Image
            src="/assets/images/projects/kashku/Preview_kashsku.png"
            width={"100%"}
            className="image-banner"
          ></Image>

          <h4 className="mt-5 f-i-semi-bold">Apa itu Kashku ?</h4>
          <p className="text-content">
            Desain UI/UX aplikasi Kashku merangkum estetika modern dengan
            fungsionalitas intuitif untuk memberikan pengalaman pengguna yang
            luar biasa dalam mengelola keuangan. Antarmuka bersih dan responsif
            memastikan navigasi yang mulus, sementara elemen grafis yang
            atraktif memberikan sentuhan dinamis pada setiap layar. Fitur
            pelacak pengeluaran dan rencana anggaran dihadirkan dengan tata
            letak yang sederhana namun informatif, memastikan pengguna dapat
            dengan mudah memahami dan mengelola keuangan mereka. Warna yang
            cerah dan tematik menciptakan atmosfer positif, sementara integrasi
            gambar dan grafik memberikan pandangan visual yang jelas terhadap
            performa keuangan. Dengan fokus pada pengguna, Kashku memberikan
            desain UI/UX yang mengundang dan ramah pengguna untuk memberdayakan
            setiap langkah dalam perjalanan keuangan pribadi.
          </p>
          <h4 className="mt-5 f-i-semi-bold">Gallery Apps</h4>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <Image
                src="/assets/images/projects/kashku/Mockup_kashku-1.png"
                width={"100%"}
                className="image-banner"
              ></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/assets/images/projects/kashku/Mockup_kashku-2.png"
                width={"100%"}
                className="image-banner"
              ></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/assets/images/projects/kashku/Mockup_kashku-3.png"
                width={"100%"}
                className="image-banner"
              ></Image>
            </Carousel.Item>
          </Carousel>

          <h4 className="mt-5 f-i-semi-bold">Fitur Detail Kashku</h4>
          <p className="text-content">
            Berikut adalah beberapa fitur umum yang sering ditemukan dalam
            aplikasi kashku:
          </p>
          <ol class="list-group-numbered ps-0">
            {/* List Item */}
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-content">
                <div class="f-i-medium text-black">Pelacak Pengeluaran</div>
                Memungkinkan pengguna untuk mencatat dengan mudah pengeluaran
                mereka setiap hari.
              </div>
            </li>
            <li class="mt-2 list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-content">
                <div class="f-i-medium text-black">Rencana Anggaran</div>
                Fitur untuk membuat dan mengelola rencana anggaran bulanan atau
                tahunan dan notifikasi saat mendekati atau melampaui batas
                anggaran yang ditetapkan.
              </div>
            </li>
            <li class="mt-2 list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-content">
                <div class="f-i-medium text-black">Personalisasi</div>
                Pengaturan profil dan preferensi pribadi dan tema yang dapat
                dipilih untuk mengkustomisasi tampilan aplikasi.
              </div>
            </li>
          </ol>

          <p className="text-content">
            Dengan kombinasi fitur-fitur ini, aplikasi Kashku dirancang untuk
            membantu pengguna mengelola keuangan mereka dengan lebih efisien dan
            efektif, sambil meningkatkan pemahaman dan kontrol atas keuangan
            pribadi mereka.
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
              href="https://www.figma.com/file/HtQmV0JnSp9Ulk4RN8ZiWh/Finance-Mobile-App?type=design&node-id=69%3A459&mode=dev&t=IedkHyFS3JjeYaCq-1"
              className="text-decoration-none text-gray"
              target="_blank"
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

export default ProjectKashku;
