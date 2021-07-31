import { Link } from 'react-router-dom';

const FinalAssessment = () => {
  return (
    <main id="final-assessment-project" className="mt-5">
      <section className="container-fluid p-5 bg-white shadow">
        <h1 className="fs-1 fw-bolder">Final Assessment Project</h1>
        <p>
          Pada assessment project kali ini, kita akan membangun sebuah calculator dengan tema seperti di IOS!
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Assessment 05</h2>
        <p>
          Tujuan dari tugas ini adalah kamu dapat menggunakan HTML, CSS serta JavaScript untuk membangun sebuah website yang interaktif serta dapat melalukan suatu hal.
        </p>
        <p>
          Instruksi dari Assessment 05
          <ol>
            <li>Kalkulator tersebut harus memiliki gambar yang sama dengan contoh yang saya berikan diatas.</li>
            <li>Kalkulator tersebut dapat berfungsi layaknya kalkulator biasa.</li>
            <li>Pada project kali ini, kita hanya akan menggunakan operator <strong>+, -, /, *</strong>. Untuk operator seperti % serta desimal tidak wajib diimplementasikan. Kamu dapat berasumsi seluruhnya dalam bentuk integer (angka)</li>
            <li><strong>C</strong> memiliki fungsi Clear. Ketika kita mengklik tombol tersebut, dia harus dapat menghapus segala angka pada screen tersebut dan mereset seluruh state yang ada pada page tersebut.</li>
            <li>Fungsi dari <strong>&gt;--</strong> adalah untuk menghapus karakter terakhir yang kita ketik. Jika terdapat hanya 1 angka pada kalkulator tersebut, maka dia akan mereset angka tersebut menjadi 0.</li>
            <li>Seketika kita sudah siap melakukan operasi perhitungan dan kita mulai mengetik angka yang baru, dia akan menghapus hasil tersebut dan mengulang kembali.Kamu dapat bereksperimen sesukamu sehingga kamu dapat membuat kalkulatormu menjadi semakin keren!</li>
          </ol>
        </p>
        <p>
          Berikut akan saya berikan beberapa tips dan trik.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Tips and Trick HTML dan CSS</h2>
        <ol>
          <li>
            Ini termasuk project yang rumit. Tetapi ingatlah bahwa dalam programming kamu bisa membagi masalah yang besar yang menjadi masalah-masalah kecil dan menyelesaikan satu-satu.
          </li>
          <li>
            Biasanya sih saya tulis HTML serta CSS dulu, baru lanjut ke bagian JavaScript untuk membuat logic.
          </li>
          <li>
            Terdapat banyak cara untuk menyelesaikan masalah tersebut. Solusi yang nanti akan saya berikan juga bukan merupakan solusi yang paling bagus. Eksperimen terus, gagal terus, lalu berhasil!
          </li>
          <li>
            Kamu bisa menggunakan flexbox untuk menyusun button-button yang ada di kalkulator tersebut.
          </li>
        </ol>
        <h2 className="fs-3 fw-bolder mt-5">Tips and Trick JavaScript</h2>
        <ol>
          <li>
            Satu point ekstra jika kamu dapat membuat code tersebut seminim mungkin tetapi seperti awal saya bilang, ada banyak cara untuk menyelesaikannya.
          </li>
          <li>
            Untuk melakukan debugging, saya sering menggunakan console.log untuk melihat jika proses yang kutulis di code tersebut sudah berjalan dengan lancar.
          </li>
          <li>
            Maksimalkan penggunaan function pada JavaScript. Kamu dapat membagi beberapa tugas menjadi beberapa function kecil yang dapat kamu panggil terus-menerus.
          </li>
          <li>
            Disini kamu dapat mengecek apakah value yang kamu dapat dari button tersebut merupakan string atau number melalui code ini. <strong>typeof yourVariable</strong>. Kamu dapat melihat hasilnya dengan console.log.
          </li>
          <li>
            Untuk mengecek value di dalam variabel merupakan string atau number pada if/else statement, kamu dapat menggunakan <strong>isNaN(myVariable)</strong> yang merupakan singkatan dari Not a Number. Jika bukan merupakan number, maka kamu akan mendapat hasil true dan sebaliknya.
          </li>
          <li>
            Kamu dapat menggunakan code <strong>parseInt(myVariable)</strong> yang akan mengubah string menjadi number.
          </li>
        </ol>
        <div className="d-flex justify-content-between mt-5">
          <Link type="button" class="btn btn-primary btn-lg" to="/assessment-project-javascript">
            <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            Assessment Project: JavaScript
          </Link>
          <Link type="button" class="btn btn-primary btn-lg" to="/git">
            Git
            <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default FinalAssessment



