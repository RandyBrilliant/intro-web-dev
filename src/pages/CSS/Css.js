import { useState } from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
import { Link } from 'react-router-dom';
import Codepen from 'react-codepen-embed';

const Css = () => {
  const [value, setValue] = useState(
    "<style>\n\th4 {\n\t\tcolor: red;\n\t}\n</style>\n\n<h4>This is a Headings</h4>"
  );

  const [play, setPlay] = useState(
    "<style>\n\th5 {\n\t\tcolor: red;\n\t\tfont-size: 50px;\n\t\tfont-weight: normal;\n\t\ttext-decoration: underline;\n\t\ttext-transform: uppercase;\n\t\tborder: 3px solid pink;\n\t}\n</style>\n\n<h5>This is a Headings</h5>"
  );

  const [parent, setParent] = useState(
    "<style>\n\tarticle {\n\t\tcolor: blue;\n\t}\n</style>\n\n<article>\n\t<h1>This is a Headings</h1>\n</article>"
  );

  return (
    <main id="css" className="mt-5">
      <section className="container-fluid p-5 bg-white shadow">
        <h1 className="fs-1 fw-bolder">CSS (Cascading Style Sheet)</h1>
        <p>
          Kita sudah bisa menggunakan HTML. Tetapi sekarang ada hal yang kurang. Rumah yang telah dibangun fondasinya sekarang kekurangan dekorasi, sehingga terlihat monoton dan tidak menarik. Sekarang saatnya kita mulai mendekor rumah kita sehingga terlihat menjadi lebih menarik. Dengan CSS, kita dapat style website kita menjadi menarik. CSS merupakan bahasa pemrograman yang sangat kuat dikarenakan dia sendiri bisa melakukan beberapa hal yaitu mengubah warna, ukuran, urutan, letak, animasi dan masih banyak lagi.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Style</h2>
        <p>
          Pertama-tama, mari kita melihat cara penggunaan CSS terhadap HTML kita.
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
          We did it!!! Akhirnya kita berhasil menuliskan code CSS pertama kita. Mari kita identifikasi setiap komponen penulisan CSS.
          <ol>
            <li>
              <b>h1</b> -  Selector. Apapun yang kita tuliskan sebagai selector ini, dia akan menaruh style CSS pada selector tersebut. Selector dapat berupa HTML tag, class, id ataupun pseudoclasses yang akan kita pelajari berikut.
            </li>
            <li>
              <b>&#123; &#125;</b> - Segala styling CSS akan kita taruh di dalam tanda kurung kurawal tersebut.
            </li>
            <li>
              <b>color:</b> - Property. Terdapat lebih dari 350 properties yang dapat kamu gunakan, meskipun kamu tidak akan pernah menggunakan semuanya. Color property menandakan kita akan mengubah warna dari font atau tulisan menjadi warna yang kita inginkan.
            </li>
            <li>
              <b>red</b> - Value. Disini kita akan memberi tahu warna apa yang kita inginkan (value). Pada contoh diatas, kita memberi tahu kepada website kita untuk memberikan warna merah pada font tag h1. Untuk color property, kita bisa menggunakan <q>named color</q> seperti yang kita gunakan sekarang dimana terdapat 150 nama warna yang dapat kamu pakai. CSS juga menerima Hex Color (#ff0000), RGB (255, 4, 23), dan juga HSL(0, 100%, 5%). Jika kamu ingin mengetahui lebih lanjut tentang warna, disini saya telah cantumkan artikel yang membahas tentang warna dari <a target="_blank" rel="noopener noreferrer" href="https://css-tricks.com/nerds-guide-color-web/">CSS Tricks</a>
            </li>
            <li>
              <b>;</b> - Setiap property-value pair harus diakhiri dengan semicolon (;). Jika kamu telah belajar bahasa pemrograman seperti JavaScript, PHP, C++ ataupun lainnya, kamu pasti sudah terbiasa dengan ini. Ini menandakan bahwa code kita telah selesai sampai disana.
            </li>
          </ol>
        </p>
        <p>
          Mari kita menambahkan beberapa styling pada tag h1 kita.
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
          Sekarang coba lihat hasilnya di website kamu. Kita juga dapat menggunakan beberapa property di dalam CSS. Ayo identifikasi setiap property yang kita gunakan.
          <ol>
            <li>
              <b>color: limegreen;</b> -  Kita mengganti warna fontnya menjadi warna limegreen!
            </li>
            <li>
              <b>font-size: 60px;</b> - kegunaan font-size adalah untuk mengatur ukuran teks kita menjadi lebih besar atau lebih kecil. Pada contoh diatas, kita ingin membesarkan ukuran teksnya, maka kita memberikan 60 pixels pada font tersebut sehingga terlihat besar. Ingatlah pixel merupakan salah unit pengukuran yang dimengerti CSS. Berhubung kita berinteraksi dengan layar monitor untuk menampilkan website kita, maka kita dasar pengukuran selalu menggunakan pixel. Terdapat banyak unit pengukuran yang bisa kamu gunakan seperti centimeter, inci, feet dan rem serta em. Untuk pelajari lebih lanjut tentang unit pengukuran di CSS, kamu dapat melihat artikel berikut dari <a target="_blank" rel="noopener noreferrer" href="https://css-tricks.com/the-lengths-of-css/">CSS Tricks</a>.
            </li>
            <li>
              <b>font-weight: normal;</b> - h1 berhubung merupakan heading tag pada dasarnya memiliki font yang bold. Disini kita memberitahu browser untuk merender header tag tersebut dengan font yang normal tanpa bold.
            </li>
            <li>
              <b>text-decoration: underline;</b> - Beginilah caranya kita memberikan teks dengan garis bawah.
            </li>
            <li>
              <b>text-transform: uppercase;</b> - kegunaan text-transform ini adalah untuk setiap elemen teks di dalam tag tersebut, kita membuatnya semua menjadi huruf besar (uppercase). Terdapat juga lowercase untuk membuat semua huruf menjadi huruf kecil, ataupun capitalize yang tujuannya mengkapitalkan kalimat dengan huruf pertamanya menjadi huruf besar.
            </li>
            <li>
              <b>border: 3px solid pink;</b> - Property ini bertujuan untuk membuat border atau garis disekitar elemen tag html tersebut. Border menerima 3 value yang bisa kamu taruh di dalam. 3px menandakan berapa ketebalan garis tersebut. solid menandakan kita menggunakan style garis yang solid atau tidak putus-putus. pink menandakan kita memberikan warna pink pada border tersebut. Urutan valuenya dapat berubah sehingga tidak harus selalu sama, contohnya solid pink 3px juga akan bekerja dengan baik.
            </li>
          </ol>
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Parents and Children</h2>
        <p>
          Sebelumnya di HTML kita belajar tentang pengelompokkan beberapa elemen HTML dengan div.
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
          Menurut kamu apakah warnanya akan tetap hitam atau menjadi biru? Ya, warnanya akan berubah menjadi biru yang mengartikan style CSS yang kita taruh di div tersebut juga dimiliki oleh tag h1. Ini dapat terjadi dikarenakan jika kita apply style kepada parent elementnya (dalam hal ini merupakan div yang mencakupi tag h1), maka secara otomatis, untuk setiap children element (dalam hal ini merupakan tag h1) juga akan mendapatkan keuntungan dari style tersebut.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Experiment</h2>
        <p>
          Pada section kali ini, berhubung code editor yang saya gunakan biasa tidak dapat berjalan semestinya untuk CSS, disini saya sudah menaruh codepen untuk kamu bereksperimen dengan CSS. Silahkan klik button di tepi kanan atas untuk mengeditnya. Disini juga kamu dapat langsung melihat hasil dari code yang telah kamu tuliskan. <b>Selamat Bereksperimen!</b>
        </p>
        <Codepen hash="NWppZBd" user="randybrilliant"/>
        <div className="d-flex justify-content-between mt-5">
          <Link type="button" class="btn btn-primary btn-lg" to="/assessment-project-html">
            <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            Assessment Project: HTML
          </Link>
          <Link type="button" class="btn btn-primary btn-lg" to="/css-integration-with-html">
            CSS Integration with HTML
            <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Css

