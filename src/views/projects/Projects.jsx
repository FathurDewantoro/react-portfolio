import { Container, Image, Row, Col } from "react-bootstrap";
import CustomNavbar from "../components/CustomNavbar";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./detail_project.css";
import {
  faAndroid,
  faChrome,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

function useIsBack() {
  const location = useLocation();
  const [isBack, setIsBack] = useState(false);

  useEffect(() => {
    setIsBack(sessionStorage[location.pathname + "_key"] === location.key);
    sessionStorage[location.pathname + "_key"] = location.key;
  }, [location]);

  return isBack;
}

function Projects() {
  const isBack = useIsBack();
  if (!isBack) {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div class="elipse2"></div>
      <div class="elipse1"></div>
      <CustomNavbar></CustomNavbar>
      <Container className="mt-3">
        <h3 className="f-l-bold text-white mb-0">My Latest Projects</h3>
        <p className="text-gray">
          This list is some of the projects i have completed.
        </p>

        <Row className="card-projects-left">
          <div className="col-md-6 ">
            <Image
              src="/assets/images/projects/presensi/banner-presensi.png"
              width={"100%"}
              className="image-banner"
            ></Image>
          </div>
          <div className="col-md-6">
            <Link to="/project/presensi" className="text-decoration-none">
              <p className="f-22 f-l-bold text-white">
                Presensi - Aplikasi untuk Manajemen Efisien dan Karyawan yang
                Lebih Produktif.
              </p>
            </Link>
            <p className="tag-category-green-r">
              <FontAwesomeIcon icon={faAndroid} style={{ marginRight: 3 }} />{" "}
              Android Apps
            </p>
            <p class="text-gray f-14">
              Created by{" "}
              <span className="f-i-medium text-white">fathurdewantoro</span>
            </p>
            <p class="text-gray f-14 mb-0">
              {" "}
              Aplikasi presensi adalah solusi digital yang dirancang untuk
              menyederhanakan dan memperbaiki manajemen kehadiran karyawan dalam
              sebuah organisasi. Memanfaatkan teknologi canggih, aplikasi ini
              menyediakan fitur-fitur seperti absensi melalui QR Code, pengajuan
              cuti, monitoring statistik kehadiran, notifikasi, dan kemudahan
              lainnya untuk mendukung pengelolaan sumber daya manusia secara
              efisien.
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
                "Pet Care+" Aplikasi Terbaik untuk Reservasi Penitipan dan
                Perawatan Hewan Peliharaan
              </p>
            </a>
            <div className="container">
              <div className="row">
                <p className="tag-category-green-l">
                  <FontAwesomeIcon
                    icon={faAndroid}
                    style={{ marginRight: 3 }}
                  />{" "}
                  Android App
                </p>
                <p className="tag-category-green-r ms-2">
                  <FontAwesomeIcon icon={faChrome} style={{ marginRight: 3 }} />{" "}
                  Web App
                </p>
              </div>
            </div>

            <p class="text-gray f-14">
              Created by{" "}
              <span className="f-i-medium text-white">fathurdewantoro</span>
            </p>
            <p class="text-gray f-14">
              Aplikasi Pet Care untuk reservasi penitipan dan perawatan hewan
              adalah solusi praktis bagi pemilik hewan peliharaan yang
              memerlukan layanan penitipan yang andal dan perawatan yang
              disesuaikan. Aplikasi ini memungkinkan pengguna untuk dengan mudah
              mencari dan memesan layanan penitipan hewan berdasarkan lokasi,
              jenis hewan, dan tanggal yang diinginkan.
            </p>
          </div>

          <div className="col-md-6 order-md-1">
            <Image
              src="/assets/images/projects/reservasi_penitipan_hewan/banner.png"
              width={"100%"}
              className="image-banner"
            ></Image>
          </div>
        </Row>

        <Row className="card-projects-left">
          <div className="col-md-6">
            <Image
              src="/assets/images/projects/kashku/Preview_kashsku.png"
              width={"100%"}
            ></Image>
          </div>
          <div className="col-md-6">
            <a
              href="detail_projects/deail_e-store.html"
              className="text-decoration-none"
            >
              <p className="f-22 f-l-bold text-white ">
                Kashku - Mengelola Keuangan dengan Mudah, Memahami dengan Cerdas
              </p>
            </a>
            <p className="tag-category-green-r">
              <FontAwesomeIcon icon={faFigma} style={{ marginRight: 3 }} />{" "}
              Figma Design
            </p>
            <p class="text-gray f-14">
              Created by{" "}
              <span className="f-i-medium text-white">fathurdewantoro</span>
            </p>
            <p class="text-gray f-14 mb-0">
              Desain UI/UX aplikasi Kashku merangkum estetika modern dengan
              fungsionalitas intuitif untuk memberikan pengalaman pengguna yang
              luar biasa dalam mengelola keuangan. Antarmuka bersih dan
              responsif memastikan navigasi yang mulus, sementara elemen grafis
              yang atraktif memberikan sentuhan dinamis pada setiap layar. Fitur
              pelacak pengeluaran dan rencana anggaran dihadirkan dengan tata
              letak yang sederhana namun informatif, memastikan pengguna dapat
              dengan mudah memahami dan mengelola keuangan mereka.
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
                Mobile Book Management Apps
              </p>
            </a>

            <p className="tag-category-green-l">
              <FontAwesomeIcon icon={faAndroid} style={{ marginRight: 3 }} />{" "}
              Android App
            </p>

            <p class="text-gray f-14">
              Created by{" "}
              <span className="f-i-medium text-white">fathurdewantoro</span>
            </p>
            <p class="text-gray f-14">
              Aplikasi Manajemen Buku Mobile mempermudah pengguna untuk
              mengelola dan menikmati koleksi buku pribadi dengan antarmuka yang
              intuitif dan fitur-fitur lengkap. Dengan fitur registrasi dan
              login yang aman, pengguna dapat dengan nyaman menambahkan,
              memperbarui, serta menjelajahi detail buku, menciptakan pengalaman
              personalisasi dalam mengeksplorasi dunia literasi mereka.
            </p>
          </div>

          <div className="col-md-6 order-md-1">
            <Image
              src="/assets/images/projects/book_management/banner.png"
              width={"100%"}
              className="image-banner"
            ></Image>
          </div>
        </Row>

        <Row className="card-projects-left">
          <div className="col-md-6">
            <Image
              src="/assets/images/projects/e-store/preview_e-store.png"
              width={"100%"}
              className="image-banner"
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
            <p className="tag-category-green-r">
              <FontAwesomeIcon icon={faAndroid} style={{ marginRight: 3 }} />{" "}
              Android App
            </p>
            <p class="text-gray f-14">
              Created by{" "}
              <span className="f-i-medium text-white">fathurdewantoro</span>
            </p>
            <p class="text-gray f-14 mb-0">
              E-Store adalah sebuah inovatif aplikasi e-commerce yang memudahkan
              pengguna untuk menjelajahi, memilih, dan membeli berbagai produk
              secara online. Aplikasi ini dirancang sebagai platform mobile yang
              tangguh dan responsif, dikembangkan dengan menggunakan framework
              Flutter untuk memberikan pengalaman pengguna yang mulus dan
              seragam di berbagai perangkat.
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
                Design Landing Page Website Smart Home with Internet of Things
              </p>
            </a>

            <p className="tag-category-green-l">
              <FontAwesomeIcon icon={faFigma} style={{ marginRight: 3 }} />{" "}
              Figma Design
            </p>

            <p class="text-gray f-14">
              Created by{" "}
              <span className="f-i-medium text-white">fathurdewantoro</span>
            </p>
            <p class="text-gray f-14">
              Landing page yang menawan untuk website Smart Home ini didesain
              dengan keahlian menggunakan Figma, alat desain UI/UX terkemuka.
              Antarmuka pengguna (UI) yang bersih dan pengalaman pengguna (UX)
              yang intuitif menggambarkan komitmen terhadap kualitas dan inovasi
              dalam penyajian informasi tentang Smart Home Assistant.
            </p>
          </div>

          <div className="col-md-6 order-md-1">
            <Image
              src="/assets/images/projects/smart_home/preview_smart_home.png"
              width={"100%"}
              className="image-banner"
            ></Image>
          </div>
        </Row>

        <div className="mb-5"></div>
      </Container>
    </>
  );
}

export default Projects;
