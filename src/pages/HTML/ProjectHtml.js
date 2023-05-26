import { Link } from 'react-router-dom';

const ProjectHtml = () => {
  return (
    <main id="assessment-project-html" className="mt-5">
      <section className="container-fluid p-5 bg-white shadow">
        <h1 className="fs-1 fw-bolder">Assessment Project: HTML</h1>
        <p>
          Pada assessment project kali ini, kita akan melakukan project berupa blog pribadi kamu mengingat kembali tag-tag yang telah kamu pelajari sebelumnya. Sehingga diharapkan setelah siap dari project ini, kamu sudah bisa membuat website pertama kamu dengan HTML.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Assessment 01</h2>
        <p>
          Buatlah sebuah website untuk blog pribadi kamu. Website yang kamu buat harus memiliki komponen berikut.
          <ol>
            <li>
              Blog kamu memiliki 2 halaman, index.html dan about.html
            </li>
            <li>
              Pada index.html, kamu harus memiliki komponen-komponen berikut.
              <ol>
                <li>Heading Tag (Nama Personal Blog Kalian)</li>
                <li>Paragraph Tag (Sedikit pesan mengenai blog kalian)</li>
                <li>
                  Terdapat 5 postingan blog dengan format berikut pada setiap blog
                  <ul>
                    <li>Judul blog</li>
                    <li>Nama Pengarang</li>
                    <li>Tanggal blog</li>
                    <li>Isi dari blog kalian (Bebas berkreasi)</li>
                    <li>Bonus Point berupa gambar pada setiap blog!</li>
                  </ul>
                </li>
                <li>Jika di dalam paragraf terdapat kalimat-kalimat penting. Kamu bisa menggunakan tag HTML seperti strong atau em.</li>
              </ol>
            </li>
            <li>
              Pada about.html, kamu harus memiliki komponen-komponen berikut.
              <ol>
                <li>Heading Tag (Nama Personal Blog Kalian)</li>
                <li>Image Tag (Foto Profil Kalian)</li>
                <li>Paragraph Tag (Isi cerita kalian)</li>
                <li>Jika di dalam paragraf terdapat kalimat-kalimat penting. Kamu bisa menggunakan tag HTML seperti strong atau em.</li>
                <li>List Tag (Hobi untuk ordered list dan Kelemahan untuk unordered list)</li>
                <li>Table Tag (Tabel berisi informasi nama teman kalian beserta jenis kelamin mereka)</li>
              </ol>
            </li>
          </ol>
        </p>
        <p>
          Kamu boleh berkreasi sesuka hati kamu asalkan memiliki komponen-komponen diatas. Ingatlah tidak ada cara yang dianggap paling benar dalam coding. Kamu boleh menggunakan cara kamu sendiri asalkan memiliki hasil akhir yang sesuai dengan deskripsi yang diminta.
        </p>
        <p>
          Berikut akan saya berikan beberapa tips dan trik.
          <ol>
            <li>
              Google everything. Tidak ada manusia di dunia ini yang bisa mengingat segala hal di kepala mereka. Kamu bukanlah Tuhan. Ini bukan termasuk menyontek. Justru dengan Google kamu bisa bertransformasi menjadi programmer yang baik.
            </li>
            <li>
              Seperti yang saya bilang sebelumnya, tidak ada cara yang paling benar. Bereksperimen lah sesuka hatimu.
            </li>
            <li>
              I wish you the best of luck!
            </li>
          </ol>
        </p>
        <div className="d-flex justify-content-between">
          <Link type="button" className="btn btn-primary btn-lg" to="/meta-html">
            <svg className="me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            HTML Meta Tag
          </Link>
          <Link type="button" className="btn btn-primary btn-lg" to="/css">
            CSS
            <svg className="ms-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ProjectHtml

