import { Link } from 'react-router-dom';

const Weapon = () => {
  return (
    <main id="your-weapon" className="mt-5">
      <section className="container-fluid p-5 bg-white shadow">
        <h1 className="fs-1 fw-bolder">Your Weapons</h1>
        <p>
          Sebelum kita mulai, kita perlu menyiapkan alat-alat yang dibutuhkan sehingga kamu dapat memulai coding. Disini saya menggunakan Windows sebagai Operating System saya. Jika kalian menggunakan MacOS ataupun Linux, kamu tetap dapat mengikuti workshop ini dikarenakan penggunaannya hampir mirip dan saya akan berusaha agar kamu dapat mengikutinya dengan baik. Di dunia ini, ada banyak program yang dapat membantu kamu dalam mengembangkan website. Tetapi jangan selalu mengikuti apa yang sedang terkenal. Carilah program yang memang cocok untuk kamu ketika bekerja. Kepopuleran sebuah program tidak akan dapat meningkatkan skill kamu ketika kamu menggunakannya. Yang terpenting adalah produktivitas kamu dapat meningkat dengan program yang memang cocok dan nyaman untuk kamu gunakan.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Browser</h2>
        <p>
          Salah satu teman terbaik kamu ketika mengembangkan website adalah web browser. Kamu tidak akan menyadari betapa hebatnya sebuah browser yang dilengkapi dengan developer tools yang akan sangat membantu kamu untuk mengerti code kamu, mencari bugs, membuat perubahan secara langsung pada website. Semua website dapat kamu gunakan asalkan website tersebut memiliki developer tools yang mumpuni.
        </p>
        <p>
          Beberapa browser yang dapat kamu gunakan.
          <ol>
            <li>
              Google Chrome : Rekomendasi saya dikarenakan saya juga menggunakannya dan di develop oleh Google. Download <a href="https://www.google.com/chrome/browser/desktop/index.html">Google Chrome</a> di sini.
            </li>
            <li>
              Ada beberapa opsi lain seperti Mozilla Firefox, Microsoft Edge, Safari, Opera dan masih banyak lagi yang dapat kamu gunakan sesuai kenyamanan kamu.
            </li>
          </ol>
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Text Editor</h2>
        <p>
          Pada saat ini tersedia sangat banyak text editor yang dapat kamu gunakan, dengan keunggulannya masing-masing. Tidak ada habisnya jika kamu terus mengikuti rekomendasi tiap orang dikarenakan tidak ada yang selalu menjadi yang terbaik. Semuanya bergantung pada kamu tentang bagaimana kamu dapat menggunakan text editor tersebut untuk membantu kamu dalam meningkatkan produktivitas. Namun, saya akan tetap memberi kamu beberapa rekomendasi yang sering aku gunakan dan kenapa aku menggunakannya.
        </p>
        <p>
          Beberapa text editor yang dapat kamu gunakan.
          <ol>
            <li>
              Visual Studio Code : Rekomendasi saya dikarenakan saya sendiri telah menggunakannya sejak pertama kali saya belajar tentang coding. Visual Studio Code merupakan text editor yang sangat bagus dan memiliki banyak fitur yang dapat menghemat waktu dan membantu kamu dalam programming. Beberapa fitur seperti merapikan barisan code kamu secara otomatis, code snippet ketika saya lupa akan beberapa syntax, dan masih banyak lagi yang dapat kamu maksimalkan dari fitur tersebut.
              Download <a href="https://code.visualstudio.com/download">Visual Studio Code</a> di sini.
            </li>
            <li>
              Ada beberapa opsi lain seperti Sublime Text, Atom, Webstorm, dan masih banyak lagi yang dapat kamu gunakan sesuai kenyamanan kamu.
            </li>
          </ol>
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Terminal</h2>
        <p>
          Yang saya sebutkan disini bukanlah terminal bis atau kereta api, melainkan terminal yang terdapat di dalam desktop yang dapat memberikan kamu akses penuh terhadap komputer kamu. Pastinya setelah kamu membaca kalimat sebelumnya kamu akan merasa terkejut, tapi tenanglah. Saya akan berusaha untuk mengajari kamu dengan cara yang paling mudah dimengerti dan membuat kamu yang awalnya merasa horor dengan hal tersebut menjadi seseorang yang percaya diri dalam mengotak-atik terminal di desktop kamu sendiri.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Study Resources</h2>
        <p>
          Seluruh dokumentasi yang saya tuliskan semua berasal dari sumber yang sudah terpercaya atau sering digunakan sebagai guideline oleh developer di dunia. Disini saya akan membagikan beberapa sumber informasi yang dapat kamu akses sehingga kamu dapat belajar lebih jauh mengenai pengembangan website.
        </p>
        <p>
        Beberapa sumber yang sering saya gunakan sebagai referensi.
          <ol>
            <li>
              <a href="https://developer.mozilla.org/">Mozilla's MDN</a> merupakan tempat yang ideal untuk belajar lebih dalam tentang HTML, CSS ataupun JavaScript.
            </li>
            <li>
              <a href="https://css-tricks.com/">CSS Tricks</a> merupakan penyelamat hidupku dalam belajar mengenai CSS, dimana website tersebut sering membahas beragam konten mengenai CSS yang akan sangat berguna untuk kamu.
            </li>
            <li>
              Jika kamu sudah lebih matang dalam programming dan sering menggunakan library atau framework yang dibuat orang lain, ada kalanya kamu dapat langsung pergi ke Github mereka dimana kamu dapat melihat secara langsung apa yang terjadi dengan library dan framework mereka.
            </li>
          </ol>
        </p>
        <div className="d-flex justify-content-between">
          <Link type="button" className="btn btn-primary btn-lg" to="/overview">
            <svg className="me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            Overview
          </Link>
          <Link type="button" className="btn btn-primary btn-lg" to="/html">
            HTML
            <svg className="ms-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Weapon
