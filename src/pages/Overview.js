import { Link } from 'react-router-dom';

const Overview = () => {
  return (
    <main id="overview" className="mt-5">
      <section className="container-fluid p-5 bg-white shadow">
        <h1 className="fs-1 fw-bolder">Overview</h1>
        <p>
          Salah satu kendala ketika orang berbicara mengenai pengembangan website adalah kata-kata atau frasa-frasa yang sulit dicerna oleh otak, banyak pengajar diluar sana yang sangat senang ketika mereka bilang kata-kata tersebut seakan mereka terlihat sangat pintar, tetapi faktanya bahkan banyak diantara mereka tidak mengerti tentang apa yang sedang mereka bicarakan. Banyak orang diluar sana mengeluarkan ego mereka dengan mendeskripsikan sesuatu dengan sangat rumit padahal dapat dideskripsikan dengan sangat simpel. Ada beberapa kata yang akan kamu temui nantinya (seperti HTML tags, functions, scope) dan ada juga beberapa kata-kata yang dapat kamu hiraukan seperti (functors dan monads). Tetapi jika kamu sering mendengarkan kata-kata tersebut ketika kamu sudah memulai karir profesional menjadi seorang Web Developer, janganlah sungkan untuk mencari tahu dan belajar tentangnya.
        </p>
        <p>
          Saya akan mengajari anda apa saja yang dibutuhkan untuk membuat website pertama kalian, dari tampilan hingga hal yang terjadi didalamnya. Jadi, saya akan mengajari anda beberapa bahasa pemrograman yang mungkin terlihat sangat aneh di awal tetapi percayalah, semuanya akan menjadi mudah ketika kamu telah selesai membaca buku ini. Ada 3 bahasa yang akan kita pelajari yaitu HTML, CSS dan JavaScript. Kamu juga akan mendapatkan ilmu tentang bagaimana menggunakan command line dan version control dengan git.
        </p>
        <p>
          Syarat untuk mengikuti pelajaran ini sangat simpel, kamu hanya harus tahu cara memakai internet untuk browsing, menggunakan komputer anda, dan pastinya bisa mengetik dengan keyboard dan menggunakan mouse.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">HTML - Hypertext Markup Language</h2>
        <p>
          Pertanyaan yang muncul di benak anda saat ini pasti adalah, “kenapa aku harus belajar sampai 3 bahasa pemrograman?”. Mari kita ambil analogi dalam membangun rumah. Untuk membangun rumah, kamu pasti membutuhkan alat-alat konstruksi (dalam arti browser, command line dan text editor). Selain itu, kamu juga membutuhkan bahan-bahan untuk membangun rumah seperti batu bata, semen, jendela dan lain-lain. Semua itu kamu padukan menjadi sebuah rumah. Itulah fungsi HTML, atau dengan singkatan Hypertext Markup Language. 
        </p>
        <h2 className="fs-3 fw-bolder mt-5">CSS - Cascading Style Sheet</h2>
        <p>
          Rumah tersebut telah berhasil dibangun, tetapi kekurangan hal yang sangat fatal, yaitu dekorasi dan warna. Sebuah rumah tanpa hal tersebut pastilah sangat jelek dan membosankan. Hal ini diibaratkan ketika di website, konten yang kamu buat dengan HTML hanya akan ditampilkan dalam bentuk dokumen berwarna hitam putih tanpa adanya dekorasi yang mempercantik website. Maka dari itu, CSS atau Cascading Style Sheet datang sebagai pahlawan untuk membasmi hitam putih dari sebuah website. CSS berperan dalam memberikan gaya atau style atau dekorasi pada website tersebut. Ibaratnya pada perumahan, biasanya kita membutuhkan interior sehingga rumah tersebut dapat terlihat cantik dan adem untuk ditempati. Mungkin kita bisa cat rumahnya dengan warna merah, memakai sofa berwarna coklat, dan sebagainya. Sama halnya dengan website, kita dapat memberikan sepenggal peraturan kepada website tersebut seperti tulisan menjadi warna biru, ukuran tulisan menjadi lebih besar dan sebagainya.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">JavaScript</h2>
        <p>
          Sekarang rumah kita sudah terlihat cantik dan bagus. Rumah tanpa adanya alat-alat yang dapat berguna sama halnya dengan tinggal di pedesaan. Apalagi dengan perkembangan zaman, kita pasti selalu memimpikan rumah pintar, dimana kita dapat membuka lampu ketika pulang lewat gadget, membuka AC, mandi dengan air panas, menonton TV dan lain sebagainya. Sama seperti website, website tanpa bisa berinteraksi dengan penggunanya kadang akan menjadi tidak berguna, disinilah letak programming akan dimulai. Kita akan memberikan instruksi kepada website tersebut sehingga dapat menjalan fungsi tertentu. JavaScript akan berperan sangat besar dalam hal ini. Apakah kalian menginginkan pop-up message ketika user sedang klik button tertentu? Apakah kalian ingin memiliki timer countdown untuk promo flash sale kamu pada website? Hal ini dapat dilakukan semua dengan JavaScript.
        </p>
        <p>
          Untuk mengurai kembali apa yang telah kamu baca diatas.
          <ol>
            <li>
              HTML merupakan struktur dari sebuah website. Dia yang akan membangun tulisan, gambar, mengelompokkan beberapa komponen secara bersamaan. HTML itu tidak lebih dari sebuah dokumen yang tidak bisa melakukan sesuatu yang keren secara programmatically.
            </li>
            <li>
              CSS berperan sebagai pendekor. Disini kita akan menentukan beberapa peraturan tentang bagaimana sebuah komponen akan ditampilkan, apa warna yang cocok, ukuran yang cocok, jenis font apa yang cocok dan lain-lain. Seperti HTML, CSS juga hanyalah digunakan untuk mendeskripsikan penampilan sebuah website. CSS juga tidak bisa melakukan sesuatu yang keren secara programmatically.
            </li>
            <li>
              JavaScript-lah mastermind dari website sehingga dapat membuat website kamu dapat berinteraksi dengan user dan melakukan hal yang kamu mau. JavaScript yang memberikan hidup kepada HTML dan CSS.
            </li>
          </ol>
        </p>
        <div className="d-flex justify-content-between">
          <Link type="button" className="btn btn-primary btn-lg" to="/introduction">
            <svg className="me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            Introduction
          </Link>
          <Link type="button" className="btn btn-primary btn-lg" to="/your-weapons">
            Your Weapons
            <svg className="ms-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Overview
