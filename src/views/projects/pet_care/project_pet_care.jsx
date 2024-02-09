import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomNavbar from "../../components/CustomNavbar";
import React from "react";
import { Container, Image, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import github from "/assets/icons/github.svg";

function ProjectPetCare() {
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
            "Pet Care+" Aplikasi Terbaik untuk Reservasi Penitipan dan Perawatan
            Hewan Peliharaan
          </h3>
          <Image
            src="/assets/images/projects/reservasi_penitipan_hewan/banner.png"
            width={"100%"}
            className="image-banner"
          ></Image>

          <h4 className="mt-5 f-i-semi-bold">Apa itu Pet Care+ ?</h4>
          <p className="text-content">
            Aplikasi Pet Care untuk reservasi penitipan dan perawatan hewan
            adalah solusi praktis bagi pemilik hewan peliharaan yang memerlukan
            layanan penitipan yang andal dan perawatan yang disesuaikan.
            Aplikasi ini memungkinkan pengguna untuk dengan mudah mencari dan
            memesan layanan penitipan hewan berdasarkan lokasi, jenis hewan, dan
            tanggal yang diinginkan. Selain itu, pengguna dapat menyesuaikan
            preferensi perawatan hewan mereka, seperti jenis pakan, rutinitas
            harian, dan kebutuhan khusus lainnya.
          </p>
          <h4 className="mt-5 f-i-semi-bold">Gallery Apps</h4>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <Image
                src="/assets/images/projects/reservasi_penitipan_hewan/slide-1.png"
                width={"100%"}
                className="image-banner"
              ></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/assets/images/projects/reservasi_penitipan_hewan/slide-2.png"
                width={"100%"}
                className="image-banner"
              ></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/assets/images/projects/reservasi_penitipan_hewan/slide-3.png"
                width={"100%"}
                className="image-banner"
              ></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/assets/images/projects/reservasi_penitipan_hewan/slide-4.png"
                width={"100%"}
                className="image-banner"
              ></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/assets/images/projects/reservasi_penitipan_hewan/slide-5.png"
                width={"100%"}
                className="image-banner"
              ></Image>
            </Carousel.Item>
          </Carousel>

          <h4 className="mt-5 f-i-semi-bold">
            Fitur Aplikasi Pet Care+ Mobile
          </h4>
          <p className="text-content">
            Berikut adalah beberapa fitur yang tersedia pada aplikasi Pet Care+
            Mobile:
          </p>
          <ol class="list-group-numbered ps-0">
            {/* List Item */}
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-content">
                <div class="f-i-medium text-black">Pemesanan Layanan</div>
                Memungkinkan pengguna untuk mencari dan memesan layanan
                penitipan hewan, perawatan grooming, pelatihan, dan layanan
                lainnya berdasarkan lokasi, tanggal, dan jenis hewan.
              </div>
            </li>
            <li class="mt-2 list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-content">
                <div class="f-i-medium text-black">Jadwal Perawatan</div>
                Memberikan fitur untuk membuat jadwal perawatan harian atau
                mingguan, termasuk pemberian makanan, obat, atau kegiatan fisik.
              </div>
            </li>
            <li class="mt-2 list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-content">
                <div class="f-i-medium text-black">
                  Pembaruan Status Kesehatan
                </div>
                Memberikan pembaruan status kesehatan hewan peliharaan, termasuk
                aktivitas, pola makan, dan perilaku yang dicatat oleh penitip
                hewan.
              </div>
            </li>
            <li class="mt-2 list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-content">
                <div class="f-i-medium text-black">Pembayaran Online</div>
                Menyediakan sistem pembayaran aman dan mudah untuk layanan yang
                dipesan, termasuk opsi untuk menyimpan informasi pembayaran dan
                mengelola tagihan.
              </div>
            </li>
          </ol>

          <h4 className="mt-5 f-i-semi-bold">Fitur Website Admin Pet Care+</h4>
          <p className="text-content">
            Berikut adalah beberapa fitur yang tersedia pada website Pet Care+:
          </p>
          <ol class="list-group-numbered ps-0">
            {/* List Item */}
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-content">
                <div class="f-i-medium text-black">Manajemen Layanan</div>
                Admin dapat menambahkan, mengedit, atau menghapus layanan yang
                ditawarkan, serta mengatur harga dan ketersediaan layanan.
              </div>
            </li>
            <li class="mt-2 list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-content">
                <div class="f-i-medium text-black">
                  Manajemen Penitipan Hewan
                </div>
                Admin dapat mengelola informasi tentang penitip hewan, termasuk
                profil, jadwal kerja, dan ulasan dari pelanggan sebelumnya.
              </div>
            </li>
            <li class="mt-2 list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-content">
                <div class="f-i-medium text-black">Sistem Reservasi</div>
                Fitur ini memungkinkan admin untuk melihat, mengelola, dan
                mengonfirmasi reservasi yang dibuat oleh pengguna melalui
                aplikasi mobile atau website.
              </div>
            </li>
            <li class="mt-2 list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-content">
                <div class="f-i-medium text-black">Sistem Pembayarab</div>
                Admin dapat mengelola pembayaran dari pelanggan, termasuk
                pembayaran untuk reservasi, biaya tambahan, dan pembayaran
                kepada penitip hewan.
              </div>
            </li>
            <li class="mt-2 list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-content">
                <div class="f-i-medium text-black">Laporan & Analisis</div>
                Admin dapat menghasilkan laporan tentang performa bisnis,
                termasuk jumlah reservasi, pendapatan, dan umpan balik
                pelanggan, serta menganalisis tren untuk meningkatkan layanan.
              </div>
            </li>
          </ol>

          <p className="text-content">
            Fitur-fitur ini membantu menciptakan pengalaman yang menyeluruh dan
            terintegrasi dalam merawat hewan peliharaan dengan nyaman dan aman.
          </p>

          <h5 className="f-i-semi-bold mt-5">Project Links</h5>
          <div>
            <img src={github} alt="" width={30} />
            <a
              target="_blank"
              href="https://github.com/FathurDewantoro/Pet-Care-Mobile"
              className="text-decoration-none text-gray"
            >
              &nbsp; Visit Mobile App on Github
            </a>
          </div>
          <div className="mt-2">
            <img src={github} alt="" width={30} />
            <a
              target="_blank"
              href=" https://github.com/FathurDewantoro/PetCare-Laravel"
              className="text-decoration-none text-gray"
            >
              &nbsp; Visit Website on Github
            </a>
          </div>

          <div className="pb-5"></div>
        </Container>
      </div>
    </div>
  );
}

export default ProjectPetCare;
