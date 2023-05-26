import { Link } from 'react-router-dom';
import GoogleLayout from '../../assets/img/google.png';

const ProjectCss = () => {
  return (
    <main id="assessment-project-css" className="mt-5">
      <section className="container-fluid p-5 bg-white shadow">
        <h1 className="fs-1 fw-bolder">Assessment Project: CSS</h1>
        <p>
          Pada assessment project kali ini, kita akan melakukan project yang lebih advance karena kalau kita ikut kata pepatah, kita tidak akan berkembang jika hanya melakukan hal yang mudah.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Assessment 02</h2>
        <p>
          Kita akan langsung menggunakan HTML serta CSS dalam membangun project berikut. Project kali ini adalah membuat website Google Search, sesuatu yang menurut saya termasuk keren jika kita sudah berhasil membuatnya. Projectnya akan terlihat seperti ini.
        </p>
        <img class="rounded mx-auto d-block img-fluid py-3" src={GoogleLayout} alt="Google Search Template" />
        <p>
          Kamu boleh berkreasi sesuka hati kamu asalkan memiliki komponen-komponen diatas. Ingatlah tidak ada cara yang dianggap paling benar dalam coding. Kamu boleh menggunakan cara kamu sendiri asalkan memiliki hasil akhir yang sesuai dengan deskripsi yang diminta. untuk melihat hasil akhir untuk tugas yang telah saya buat, kamu dapat mengeceknya <a target="_blank" rel="noopener noreferrer" href="https://randybrilliant.github.io/google-clone-html/">disini</a>.
        </p>
        <p>
          Berikut akan saya berikan beberapa tips dan trik.
          <ol>
            <li>
              Google everything. Tidak ada manusia di dunia ini yang bisa mengingat segala hal di kepala mereka. Kamu bukanlah Tuhan. Ini bukan termasuk menyontek. Justru dengan Google kamu bisa bertransformasi menjadi programmer yang baik.
            </li>
            <li>
              Untuk aset logo Google bisa kamu dapatkan melalui website <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">Google</a> dan klik kanan pada logonya dan save imagenya.
            </li>
            <li>
              Jika kamu melihat dari website tersebut, Google membaginya menjadi 3 section, ada <b>header</b>, <b>main</b>, dan <b>footer</b>. Setiap section kamu dapat menggunakan flexbox untuk memposisikan elemennya.
            </li>
            <li>
              Disini merupakan saat yang tepat untuk menggunakan class yang sama jika memiliki property value yang sama.
            </li>
            <li>
              Tidak ada manusia di dunia ini yang bisa mengingat segala hal di kepala mereka. Kamu bukanlah Tuhan. Ini bukan termasuk menyontek. Justru dengan Google kamu bisa bertransformasi menjadi programmer yang baik.
            </li>
            <li>
              Seperti yang saya bilang sebelumnya, tidak ada cara yang paling benar. Bereksperimen lah sesuka hatimu.
            </li>
            <li>
              I wish you the best of luck!
            </li>
          </ol>
        </p>
        <div className="d-flex justify-content-between mt-5">
          <Link type="button" className="btn btn-primary btn-lg" to="/css-layout">
            <svg className="me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            CSS Layout
          </Link>
          <Link type="button" className="btn btn-primary btn-lg" to="/intro-to-js">
          Intro to JS (JavaScript)
            <svg className="ms-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ProjectCss



