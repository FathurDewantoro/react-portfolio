import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomNavbar from "../../components/CustomNavbar";
import React from "react";
import { Container, Image, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";

function ProjectEStore() {
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
            Flutter UI Design Mobile Application EStore with FakeStore API
          </h3>

          <Image
            src="/assets/images/projects/e-store/preview_e-store.png"
            width={"100%"}
            className="image-banner"
          ></Image>

          <h4 className="mt-5 f-i-semi-bold">Apa itu E-Store ?</h4>
          <p className="text-content">
            E-Store adalah sebuah inovatif aplikasi e-commerce yang memudahkan
            pengguna untuk menjelajahi, memilih, dan membeli berbagai produk
            secara online. Aplikasi ini dirancang sebagai platform mobile yang
            tangguh dan responsif, dikembangkan dengan menggunakan framework
            Flutter untuk memberikan pengalaman pengguna yang mulus dan seragam
            di berbagai perangkat. Fitur utama E-Store mencakup integrasi dengan
            Fake Store API, sebuah sumber data palsu yang menyediakan informasi
            produk yang lengkap dan realistis. Melalui integrasi ini, pengguna
            dapat menelusuri katalog produk yang beragam, termasuk kategori
            seperti pakaian, elektronik, peralatan rumah tangga, dan banyak
            lagi. Setiap produk dilengkapi dengan deskripsi rinci, harga, dan
            gambar yang memudahkan pengguna untuk membuat keputusan pembelian
            yang informasional.
          </p>
          <h4 className="mt-5 f-i-semi-bold">Gallery Apps</h4>
          <Carousel data-bs-theme="dark">
            <Carousel.Item className="text-center">
              <Image
                src="/assets/images/projects/e-store/Mockup_e-store.png"
                width={200}
                className="image-banner"
              ></Image>
            </Carousel.Item>
            <Carousel.Item className="text-center">
              <Image
                src="/assets/images/projects/e-store/Mockup_e-store2.png"
                width={200}
                className="image-banner"
              ></Image>
            </Carousel.Item>
            <Carousel.Item className="text-center">
              <Image
                src="/assets/images/projects/e-store/Mockup_e-store3.png"
                width={200}
                className="image-banner"
              ></Image>
            </Carousel.Item>
          </Carousel>

          <h4 className="mt-5 f-i-semi-bold">Keunggulan E-Store</h4>
          <p className="text-content">
            Berikut adalah keunggalan pada aplikasi E-Store:
          </p>
          <ol class="list-group-numbered ps-0">
            {/* List Item */}
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-content">
                <div class="f-i-medium text-black">Navigasi Intuitif</div>
                Antarmuka pengguna yang mudah dinavigasi memungkinkan pengguna
                untuk dengan cepat menjelajahi berbagai kategori produk dan
                menemukan barang yang mereka cari.
              </div>
            </li>
            <li class="mt-2 list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-content">
                <div class="f-i-medium text-black">
                  Keranjangan Belanja Yang Terkelola
                </div>
                Pengguna dapat dengan mudah menambahkan produk ke keranjang
                belanja mereka, mengelola kuantitas, dan melihat ringkasan
                belanja sebelum melakukan pembayaran.
              </div>
            </li>
          </ol>

          <p className="text-content">
            Dengan memanfaatkan Fake Store API dan mengusung keunggulan
            teknologi Flutter, E-Store membawa pengalaman belanja online ke
            tingkat baru. Aplikasi ini menciptakan lingkungan yang nyaman, aman,
            dan memanjakan pengguna untuk mengeksplorasi dan berbelanja produk
            dengan kepercayaan diri.
          </p>

          <h5 className="f-i-semi-bold mt-5">Project Links</h5>
          <span>
            <img src="/assets/icons/github.svg" alt="" width={28} />
            <a
              href="https://github.com/FathurDewantoro/Estore-Flutter"
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

export default ProjectEStore;
