import { useState } from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
import { Link } from 'react-router-dom';
import SelectTable from '../../assets/img/specifishity.png';

const CssSelector = () => {
  const [value, setValue] = useState(
    `<style>\n\t.red-text {\n\t\tcolor: red;\n\t}\n\t.green-text {\n\t\tcolor: green;\n\t}\n</style>\n\n<h1 class="red-text">This is a Red Headings</h1>\n<h1 class="green-text">This is a Green Headings</h1>`
  );

  const [play, setPlay] = useState(
    `<style>\n\t.text-red {\n\t\tcolor: red;\n\t}\n\t.text-red {\n\t\tcolor: pink;\n\t}\n</style>\n\n<h1 class="text-red">This is a Red Headings</h1>\n<h1 class="green-text">This is a Green Headings</h1>`
  );

  const [parent, setParent] = useState(
    `<style>\n\t#site-main {\n\t\tcolor: red;\n\t}\n\th1.main-content.text-title.text-green {\n\t\tcolor: green;\n\t}\n</style>\n\n<h1 id="site-main" class="main-content text-title text-green">This is a Red Headings</h1>`
  );

  const [cascade, setCascade] = useState(
    `<style>\n\t#site-main {\n\t\tcolor: red;\n\t\tborder: 1px solid red;\n\t}\n\t.text-green {\n\t\tcolor: green !important; \n\t\tborder: 1px solid green;\n\t}\n</style>\n\n<h1 id="site-main" class="text-green">This is a Green Headings</h1>`
  )

  const [pseudo, setPseudo] = useState(
    `<style>\n\t.box {\n\t\twidth: 100px;\n\t\theight: 100px;\n\t\tbackground-color: magenta;\n\t\tcolor: white;\n\t}\n\t.box:hover {\n\t\tbackground-color: green;\n\t\twidth: 150px;\n\t\theight: 150px;\n\t}\n</style>\n\n<h5 class="box">Hover over me using your mouse</h5>`
  )

  return (
    <main id="css-selector-and-pseudo-selector" className="mt-5">
      <section className="container-fluid p-5 bg-white shadow">
        <h1 className="fs-1 fw-bolder">CSS Selector and Pseudo Selector</h1>
        <p>
          Pada 2 section sebelumnya, kita telah belajar membuat CSS yang dapat membuat setiap p tag pada website kita berwarna merah. Tetapi ketika kita sudah memulai membangun website yang kompleks, kita pasti akan dihadapkan pada situasi dimana kita ingin beberapa p tag berwarna hijau dan berwarna merah. Sebelumnya kita hanya tahu menargetkan pada tag HTML saja. Sekarang kita akan belajar lebih lanjut tentang CSS.
        </p>
        <p>
          Jadi bagaimana kita dapat melakukan hal tersebut? Apakah kamu masih ingat apa yang kita pelajari sebelumnya tentang <b>class</b> di HTML? Disinilah fungsinya akan sangat berguna. Class memungkinkan kita untuk style beberapa tag yang sama secara berbeda dikarenakan kita hanya akan meletakkan style pada class yang telah kita buat. Jika kita memiliki beberapa tag h1 yang ingin kita style dengan warna berbeda, kita dapat lakukan dengan cara begini.
        </p>
        <CodeMirror
          value={value}
          options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true
          }}
          onBeforeChange={(editor, data, value) => {
            setValue(value)
          }}
          onChange={(editor, data, value) => {
            setValue(value)
          }}
        />
        <span className="fs-4 fw-bold">
          Results
        </span>
        <div className="border border-primary border-2 py-2 my-2">
          <div dangerouslySetInnerHTML={{__html:value}}></div>
        </div>
        <p>
          Coba kamu copy code ini ke editor kamu lalu jalankan, apa yang akan terjadi? h1 pertama menjadi warna merah dan h1 kedua menjadi warna hijau! Kalian juga akan menyadari bahwa ketika kita menargetkan class, kita selalu menyertakan tanda <b>.(period)</b> sebelum nama class kita. Inilah caranya CSS membedakan antara tag dengan class.
        </p>
        <p>
          Jadi apasih jawaban atas pertanyaan yang saya tanyakan di awal section ini? <b>Classes</b>. Ya, dan jawaban tersebut hampir mutlak. Class merupakan cara yang paling bagus untuk style website kita. Akan ada saat dimana kita akan style menggunakan HTML tag tapi itu merupakan peristiwa yang sangat jarang, tetapi kamu tetap boleh menggunakannya.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">The Cascade</h2>
        <p>
          Sebenarnya part ini tidak begitu penting, karena saya ingin kalian untuk tidak pernah melakukan seperti ini. Cascade adalah menuliskan code yang sama dengan konfigurasi yang berbeda pada 1 file CSS. Kenapa saya suruh kalian untuk menghindarinya? Percayalah, itu akan menyelamatkan kamu ketika kamu sudah stress debugging code kamu yang tidak berjalan semestinya. Ketika dalam 1 file CSS, apa yang akan terjadi jika kamu memiliki 1 CSS class yang sama tetapi diberi konfigurasi properti yang berbeda, siapakah yang akan <q>menang</q>? Mari kita lihat contoh di bawah.
        </p>
        <CodeMirror
          value={play}
          options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true
          }}
          onBeforeChange={(editor, data, value) => {
            setPlay(value)
          }}
          onChange={(editor, data, value) => {
            setPlay(value)
          }}
        />
        <span className="fs-4 fw-bold">
          Results
        </span>
        <div className="border border-primary border-2 py-2 my-2">
          <div dangerouslySetInnerHTML={{__html:play}}></div>
        </div>
        <p>
          Pada kasus seperti diatas, kita memiliki 2 konfigurasi property yang memiliki class yang sama. Jadi apa hasil yang muncul di website kalian? Dikarenakan mereka itu sama, maka yang datang "terakhir" menang. Pada kasus seperti ini, h1 kita akan menjadi warna pink. Kenapa demikian? Ingatlah bahwa CSS itu menjalan code dari atas ke bawah, sehingga ketika dia telah baca sampai ke bawah, maka adanya konfigurasi tersebut akan override (menggantikan) property diatasnya.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">ID and !important</h2>
        <p>
          Selanjutnya saya akan memperkenalkan 2 komponen yang jangan pernah kamu gunakan, kecuali kamu sudah paham dan mengerti apa yang akan kamu lakukan. Kenapa demikian, mari kita praktikkan saja langsung.
        </p>
        <CodeMirror
          value={parent}
          options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true
          }}
          onBeforeChange={(editor, data, value) => {
            setParent(value)
          }}
          onChange={(editor, data, value) => {
            setParent(value)
          }}
        />
        <span className="fs-4 fw-bold">
          Results
        </span>
        <div className="border border-primary border-2 py-2 my-2">
          <div dangerouslySetInnerHTML={{__html:parent}}></div>
        </div>
        <p>
          Kamu pasti berpikir bahwa dengan ada banyaknya nama class, dia akan menang. Tetapi tidak begitu ferguso. ID Selector (#main-site) yang akan menang dari class selector. ID memiliki peringkat lebih tinggi dari class. Mari kita mencoba sesuatu yang lebih mindblowing lagi.
        </p>
        <CodeMirror
          value={cascade}
          options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true
          }}
          onBeforeChange={(editor, data, value) => {
            setCascade(value)
          }}
          onChange={(editor, data, value) => {
            setCascade(value)
          }}
        />
        <span className="fs-4 fw-bold">
          Results
        </span>
        <div className="border border-primary border-2 py-2 my-2">
          <div dangerouslySetInnerHTML={{__html:cascade}}></div>
        </div>
        <p>
          LOL, kamu pasti akan kebingungan. Warna h1 menjadi hijau tetapi bordernya tetap berwarna merah. Sudah melihat kejanggalannya? Jangan pernah menggunakan <b>!important</b>. Kamu pasti akan sering menemui bug tersebut apalagi dengan codebase kamu yang sudah besar.
        </p>
        <p>
          Berikut ini saya akan lampirkan gambar ilustrasi tentang selector dan cascade dri CSS.
        </p>
        <img src={SelectTable} class="rounded mx-auto d-block img-fluid py-3" alt="CSS Specifishity" />
        <h2 className="fs-3 fw-bolder mt-5">Pseudoclasses</h2>
        <p>
          Terkadang kita ingin konfigurasi penampilan elemen kita ketika sedang terjadi sebuah event (click, hover, double-click) pada <b>DOM (Document Object Model)</b> kita. Salah satu yang paling sering kita gunakan adalah ketika kita hover elemen HTML kita.
        </p>
        <CodeMirror
          value={pseudo}
          options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true
          }}
          onBeforeChange={(editor, data, value) => {
            setPseudo(value)
          }}
          onChange={(editor, data, value) => {
            setPseudo(value)
          }}
        />
        <span className="fs-4 fw-bold">
          Results
        </span>
        <div className="border border-primary border-2 py-2 my-2">
          <div dangerouslySetInnerHTML={{__html:pseudo}}></div>
        </div>
        <p>
          <b>:hover</b> hanya akan menjalankan styling CSS jika kondisinya telah terpenuhi yaitu elemennya sedang di hover. Masih terdapat banyak <a href="https://css-tricks.com/pseudo-class-selectors/" target="_blank" rel="noopener noreferrer">CSS Pseudoclasses</a> yang tidak akan saya jelaskan satu-satu disini. Kamu dapat mencarinya dari link yang telah saya berikan untuk bereksplorasi.
        </p>
        <div className="d-flex justify-content-between mt-5">
          <Link type="button" class="btn btn-primary btn-lg" to="/css-integration-with-html">
            <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            CSS Integration with HTML
          </Link>
          <Link type="button" class="btn btn-primary btn-lg" to="/css-layout">
            CSS Layout
            <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default CssSelector

