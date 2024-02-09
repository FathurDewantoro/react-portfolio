import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomNavbar from "../../components/CustomNavbar";
import React from "react";
import { Container, Image, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";

function ProjectManagementBook() {
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
          <h3 className="mt-3 f-l-bold">Mobile Book Management Apps</h3>
          <Image
            src="/assets/images/projects/book_management/banner.png"
            width={"100%"}
            className="image-banner"
          ></Image>

          <h4 className="mt-5 f-i-semi-bold">
            Apa itu Mobile Book Management Apps ?
          </h4>
          <p className="text-content">
            Aplikasi Manajemen Buku Mobile mempermudah pengguna untuk mengelola
            dan menikmati koleksi buku pribadi dengan antarmuka yang intuitif
            dan fitur-fitur lengkap. Dengan fitur registrasi dan login yang
            aman, pengguna dapat dengan nyaman menambahkan, memperbarui, serta
            menjelajahi detail buku, menciptakan pengalaman personalisasi dalam
            mengeksplorasi dunia literasi mereka.
          </p>
          <h4 className="mt-5 f-i-semi-bold">Gallery Apps</h4>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <Image
                src="/assets/images/projects/book_management/slide-1.png"
                width={"100%"}
                className="image-banner"
              ></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/assets/images/projects/book_management/slide-2.png"
                width={"100%"}
                className="image-banner"
              ></Image>
            </Carousel.Item>
          </Carousel>

          <h4 className="mt-5 f-i-semi-bold">
            Fitur Detail Aplikasi Mobile - Book Management Apps
          </h4>
          <p className="text-content">
            Dalam aplikasi Manajemen Buku Mobile, pengguna memiliki kendali
            penuh atas pengelolaan koleksi buku mereka. Mereka dapat menambahkan
            buku baru dengan mudah, mengisi informasi detail seperti judul,
            penulis, dan genre, serta menyertakan sinopsis dan sampul buku.
            Setiap buku yang ditambahkan akan tersusun rapi dalam daftar yang
            terorganisir, dengan kemampuan untuk melihat detail buku secara
            mendalam. Selain menambah buku baru, pengguna juga dapat memperbarui
            informasi buku yang sudah ada, menghapus buku yang tidak relevan,
            serta mengatur buku-buku dalam kategori atau menambahkan label untuk
            memudahkan pencarian dan pengelompokan. Fitur pencarian dan filter
            memungkinkan pengguna untuk dengan cepat menemukan buku yang mereka
            cari berdasarkan kriteria tertentu. Dengan fitur penilaian dan
            ulasan, pengguna dapat berbagi pengalaman membaca mereka dan melihat
            ulasan dari pengguna lain, menambah dimensi sosial pada pengalaman
            membaca mereka. Dengan fitur-fitur ini, aplikasi memberikan alat
            yang kuat dan efisien bagi pengguna untuk mengelola, menyusun, dan
            menikmati koleksi buku mereka.
          </p>

          <h5 className="f-i-semi-bold mt-5">Project Links</h5>
          <span>
           <img src="/assets/icons/github.svg" alt=""  width={28}/>
            <a
              href="https://github.com/FathurDewantoro/book_management_mobile"
              className="text-decoration-none text-gray"
              target="_blank"
            >
              &nbsp; Visit on Github
            </a>
          </span>

          <div className="pb-5"></div>
        </Container>
      </div>
    </div>
  );
}

export default ProjectManagementBook;
