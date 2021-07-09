import { Link } from 'react-router-dom';

const ProjectJs = () => {
  return (
    <main id="assessment-project-css" className="mt-5">
      <section className="container-fluid p-5 bg-white shadow">
        <h1 className="fs-1 fw-bolder">Assessment Project: JavaScript</h1>
        <p>
          Pada assessment project kali ini, kita akan melakukan project yang lebih advance karena kalau kita ikut kata pepatah, kita tidak akan berkembang jika hanya melakukan hal yang mudah.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Assessment 03</h2>
        <p>
          Tujuan dari tugas ini adalah untuk melatih pemahaman kalian terhadap basic programming principle. Kamu bisa membuatnya melalui repl ataupun code editor dengan JS environment sesukamu.
        </p>
        <p>
          Instruksi dari Assessment 03
          <ol>
            <li>Definisikan sebuah function `addFavoriteBook(..)` yang dapat menerima sebuah parameter yang bernama `bookName`.</li>
            <li>Jika nilai yang kita berikan pada variabel `bookName` tidak mengandung kata "<strong>Great</strong>" di dalamnya, maka kita dapat menambahkannya ke dalam array `favoriteBooks`.</li>
            <li>Definisikan sebuah function `printFavoriteBooks()` yang tidak menerima parameter apapun.</li>
            <li>`printFavoriteBooks()` harus memiliki fungsi untuk print pesan dengan kalimat awalnya adalah "Favorite Books: ..", dan kamu dapat menaruh jumlah dari buku yang terdapat pada array `favoriteBooks`</li>
            <li>Dan pada akhirnya, `printFavoriteBooks()` harus melakukan perulangan pada array `favoriteBooks` serta mencetak value yang terdapat di dalam array tersebut.</li>
          </ol>
        </p>
        <p>
          Berikut akan saya berikan beberapa tips dan trik.
          <ol>
            <li>
              `someString.includes(anotherString)` akan mengembalikan `true` jika `anotherString` terdapat didalam `someString`, atau `false` jika sebaliknya.
            </li>
            <li>
              Gunakan tanda `!` untuk mendapatkan kebalikan dari boolen value (mengganti `true` ke `false` atau sebaliknya).
            </li>
            <li>
              `someArray.push(value)` akan menambah value baru pada akhir dari array tersebut.
            </li>
            <li>
              Gunakan operator ` back-tick untuk string yang akan dimasukkan kedalam value tersebut.
            </li>
            <li>
              Gunakan `console.log(..)` untuk mencetak pesan pada console kamu.
            </li>
            <li>
              Pastikan kamu memanggil function `printFavoriteBooks()` pada akhir dari program yang kamu tuliskan.
            </li>
            <li>
              Google everything. Tidak ada manusia di dunia ini yang bisa mengingat segala hal di kepala mereka. Kamu bukanlah Tuhan. Ini bukan termasuk menyontek. Justru dengan Google kamu bisa bertransformasi menjadi programmer yang baik.
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
          <Link type="button" class="btn btn-primary btn-lg" to="/js-dom">
            <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
              The DOM (Document Object Model)
          </Link>
          <Link type="button" class="btn btn-primary btn-lg" to="/final-assessment-project">
            Final Assessment Project: HTML, CSS and JS
            <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ProjectJs



