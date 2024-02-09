import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomNavbar from "../../components/CustomNavbar";
import React from "react";
import { Container, Image, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import CustomFooter from "../../components/CustomFooter";

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
          <h3 className="mt-3 f-l-bold">
            Presensi - Aplikasi untuk Manajemen Efisien dan Karyawan yang Lebih
            Produktif
          </h3>
          {/* <p className="tag-category-green-r">
            <FontAwesomeIcon
              icon={faAndroid}
              style={{ marginRight: 3 }}
            ></FontAwesomeIcon>{" "}
            Android Apps
          </p> */}
          <Image
            src="/assets/images/projects/presensi/banner-presensi.png"
            width={"100%"}
            className="image-banner"
          ></Image>

          <h4 className="mt-5 f-i-semi-bold">Apa itu Presensi ?</h4>
          <p className="text-content">
            Aplikasi presensi adalah perangkat lunak atau platform digital yang
            dirancang untuk memudahkan dan memantau kehadiran individu dalam
            suatu organisasi atau lingkungan kerja. Aplikasi ini umumnya
            digunakan untuk merekam, melacak, dan mengelola data kehadiran
            karyawan atau peserta secara efisien. Fitur-fitur umumnya mencakup
            metode absensi, seperti QR Code atau fingerprint, pengelolaan jadwal
            kerja, sistem pengajuan cuti, pemantauan statistik kehadiran, serta
            notifikasi untuk menginformasikan perubahan penting terkait
            kehadiran. Aplikasi presensi membantu meningkatkan produktivitas,
            efisiensi administrasi, dan memberikan visibilitas yang lebih baik
            terhadap pola kehadiran dalam suatu organisasi.
          </p>
          <h4 className="mt-5 f-i-semi-bold">Gallery Apps</h4>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <Image
                src="/assets/images/projects/presensi/slide-presensi-1.png"
                width={"100%"}
                className="image-banner"
              ></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/assets/images/projects/presensi/slide-presensi-2.png"
                width={"100%"}
                className="image-banner"
              ></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/assets/images/projects/presensi/slide-presensi-3.png"
                width={"100%"}
                className="image-banner"
              ></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/assets/images/projects/presensi/slide-presensi-4.png"
                width={"100%"}
                className="image-banner"
              ></Image>
            </Carousel.Item>
          </Carousel>

          <h4 className="mt-5 f-i-semi-bold">Fitur Detail Presensi</h4>
          <p className="text-content">
            Berikut adalah beberapa fitur umum yang sering ditemukan dalam
            aplikasi presensi:
          </p>
          <ol class="list-group-numbered ps-0">
            {/* List Item */}
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-content">
                <div class="f-i-medium text-black">Presensi</div>
                Memungkinkan karyawan untuk melakukan pencatatan kehadiran
                mereka menggunakan berbagai metode, seperti scan QR Code, dengan
                informasi GPS.
              </div>
            </li>
            <li class="mt-2 list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-content">
                <div class="f-i-medium text-black">Jadwal Kerja</div>
                Menampilkan jadwal kerja karyawan, baik harian maupun mingguan,
                dan memungkinkan pengelola untuk mengatur dan mengelola jadwal
                tersebut.
              </div>
            </li>
            <li class="mt-2 list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-content">
                <div class="f-i-medium text-black">Pengajuan Cuti</div>
                Memungkinkan karyawan untuk mengajukan cuti, serta memungkinkan
                manajer atau HR untuk menyetujui atau menolak permintaan cuti
                tersebut.
              </div>
            </li>
            <li class="mt-2 list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-content">
                <div class="f-i-medium text-black">Statistik Kehadiran</div>
                Menyajikan data statistik terkait kehadiran karyawan, seperti
                jumlah hari hadir, keterlambatan, atau izin cuti dalam periode
                waktu tertentu.
              </div>
            </li>
            <li class="mt-2 list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-content">
                <div class="f-i-medium text-black">Notifikasi</div>
                Memberikan pemberitahuan kepada karyawan terkait jadwal kerja,
                pengajuan cuti, atau perubahan penting lainnya terkait
                kehadiran.
              </div>
            </li>
          </ol>

          <p className="text-content">
            Fitur-fitur ini membantu mempermudah proses manajemen kehadiran,
            meningkatkan efisiensi operasional, dan meningkatkan transparansi
            dalam pengelolaan sumber daya manusia dalam suatu organisasi.
          </p>

          <h5 className="f-i-semi-bold mt-5">Project Links</h5>
          <p className="text-content">
            <FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon> On Going
          </p>

          <div className="pb-5"></div>
        </Container>
      </div>
    </div>
  );
}

export default ProjectPresensi;
