import { useState } from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
import { Link } from 'react-router-dom';

const CssLayout = () => {
  const [value, setValue] = useState(
    `<style>\n\t.box-model {\n\t\tborder: 1px solid red;\n\t\tpadding: 5px;\n\t\tmargin: 25px;\n\t\tbackground-color: white;\n\t}\n</style>\n\n<div class="box-model">This is a Box</div>`
  );

  const [play, setPlay] = useState(
    `*, *::before, *::after {\n\tbox-sizing: border-box;\n}`
  );

  const [parent, setParent] = useState(
    `<style>\n\t.flex-container {\n\t\tdisplay: flex;\n\t\t/* Only change the code below */\n\t}\n\t.box-flex {\n\t\tmargin: 25px;\n\t}\n\t.box-1 {\n\t\twidth: 150px;\n\t\theight: 400px;\n\t\tbackground-color: green;\n\t}\n\t.box-2 {\n\t\twidth: 500px;\n\t\theight: 250px;\n\t\tbackground-color: cyan;\n\t}\n\t.box-3 {\n\t\twidth: 300px;\n\t\theight: 300px;\n\t\tbackground-color: magenta;\n\t}\n</style>\n\n<div class="flex-container">\n\t<div class="box-flex box-1">1</div>\n\t<div class="box-flex box-2">2</div>\n\t<div class="box-flex box-3">3</div>\n</div>`
  );

  return (
    <main id="css-layout" className="mt-5">
      <section className="container-fluid p-5 bg-white shadow">
        <h1 className="fs-1 fw-bolder">CSS Layout</h1>
        <p>
          Salah satu penggunaan CSS adalah untuk mengatur letak elemen dalam website kita agar dapat terlihat lebih rapi dan terstruktur. Kita mungkin ingin memiliki beberapa elemen untuk berada di tengah halaman, atau ada 4 elemen yang dibariskan secara berjajar pada 1 baris sehingga terlihat lebih rapi. Tanpa adanya CSS, kita tidak akan bisa melakukan hal tersebut. Pada section kali ini, kita akan pelajari lebih dalam tentang layout CSS.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">The Box Model</h2>
        <p>
          Kita akan memulai dengan mengeksplorasi tentang box model di CSS. Ini mungkin merupakan hal yang paling membingungkan untuk para pemula yang baru memulai belajar CSS, sehingga akan menjadi sangat menyenangkan jika kita sudah mengerti penerapan box model tersebut.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Display</h2>
        <p>
          Setiap tag pada CSS memiliki property <b>display</b>. Pada kenyataannya, CSS memiliki banyak nilai yang default yang tidak kita ketahui, seperti tiap warna teks selalu berwarna hitam, h1 memiliki font-size yang lebih besar dan masih banyak lagi. Dengan CSS memungkinkan kita untuk memodifkasi nilai property display pada tag HTML sehingga dapat bekerja sesuai dengan keinginan kita. Berikut saya jabarkan beberapa opsi display yang dapat kamu pakai.
          <ol>
            <li>
              <b>inline</b>
              <p>
                Tujuan dari inline adalah membuat tag kita berperilaku layaknya seperti teks/tulisan. Jika kamu ingin memposisikan elemen sejajar dengan teks kamu (inline-text). Tetapi kamu harus ingat bahwa dengan inline, browser yang akan menentukan seluruh height, width, padding dan margin. Sehingga kamu tidak memodifikasi elemennya seperti sedia kala.
              </p>
            </li>
            <li>
              <b>block</b>
              <p>
                Pada dasarnya <b>div</b> dan <b>p</b> memiliki display block secara default. Ini memberikan kamu akses penuh terhadap height, width, margin serta padding dari elemen tersebut. Block juga mengambil seluruh kelebaran dalam 1 line di website tersebut.
              </p>
            </li>
            <li>
              <b>inline-block</b>
              <p>
                Dari namanya kita sudah bisa menebak bahwa inline-block merupakan gabungan dari inline dan block. Ini akan membuat browser untuk memberikan display inline, dan juga memberikan kamu kendali penuh terhadap pengaturan height, width, padding dan margin.
              </p>
            </li>
            <li>
              <b>flex and inline-flex</b>
              <p>
                Memiliki kesamaan dengan display block, dan tidak hanya itu dikarenakan kamu akan diberi beberapa konfigurasi tambahan atau superpower baru untuk mengatur tata letak sebuah elemen. Kita akan membahas lebih lanjut pada section tersendirinya nanti.
              </p>
            </li>
            <li>
              <b>grid and inline-grid</b>
              <p>
                Grid merupakan cara yang lebih advance yang memberikan kamu lebih banyak kemudahan dalam mengatur letak elemen kamu, tetapi kita tidak akan membahasnya pada workshop kali ini berhubung dengan flex kita sudah bisa mendapatkan hasil yang kita inginkan. Mungkin kedepannya saya akan menambahkan grid di dalam workshop ini.
              </p>
            </li>
            <li>
              <b>table</b>
              <p>
                Membuat tag kamu memiliki sifat seperti tabel (table). Pada umumnya, lebih baik lansung menggunakan tag <em><b>&lt;table&gt;&lt;/table&gt;</b></em> untuk membuat elemen seperti tabel.
              </p>
            </li>
          </ol>
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Height, Width, Margin, Padding and Border</h2>
        <p>
          Mari kita lihat contoh code yang telah saya sajikan dibawah.
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
          Kita sudah membuat body website kita menjadi warna biru dan diatas kita mendapat ilustrasi tentang apa yang sedang terjadi di dalamnya.
          <ol>
            <li>
              <b>margin</b> - Jarak dari elemen tersebut terhadap elemen lain diluar merupakan margin. Meskipun kamu memberikan background-color berwarna biru, jarak yang terdapat diantara elemen tersebut tidak akan diwarnai biru dan dianggap kosong begitu saja.
            </li>
            <li>
              <b>padding</b> - Jarak dari elemen tersebut terhadap konten elemen di dalamnya disebut padding.Jika kamu memberikan background-color berwarna biru, maka jarak yang terdapat diantara elemen dengan konten didalamnya juga akan diwarnai biru.
            </li>
            <li>
              <b>border</b> - Border merupakan garis yang merupakan sudut dari elemen tersebut. Seperti kotak diatas memiliki garis berwarna merah disekitarnya.
            </li>
          </ol>
        </p>
        <p>
          Jika kamu melihat dari contoh diatas, kita belum memodifikasi height ataupun width, tetapi karena div pada dasarnya memiliki display block, maka dia akan mengambil seluruh width dalam 1 baris tersebut, kamu juga bisa mengonfigurasi height ataupun widthnya sesuka hati kamu untuk melihat perbedaannya. Sekarang coba kamu buat box baru dengan width 200px, sekarang pertanyaanku adalah, apakah box tersebut benar-benar 200px? Kalau sekarang sih memang boxnya masih memiliki lebar 200px, tetapi coba kamu tambahkan padding serta border disekitarnya, apakah widthnya tetap 200px? Jawabannya adalah tidak lagi, karena dari 200px tersebut kita akan menambahkan jarak tambahan untuk padding serta border sehingga widthnya bukan 200px lagi. Inilah yang berpengaruh pada sifat sebuah elemen di HTML yaitu property <b>box-sizing</b>. Bagaimana jika aku ingin agar kotak yang saya buat itu lebarnya tidak dipengaruhi oleh properti lainnya? Mari kita coba selesaikan perkara diatas.
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
        <p>
          Voila! Cobalah buka pada browser kamu, dengan <b>border-box</b> kita telah membuat agar border serta padding elemen tersebut tidak mempengaruhi width dari div tersebut. Biasanya pada setiap project, saya akan menaruhnya sebagai boilerplate untuk memulai coding dan juga sekarang hampir setiap orang akan berbuat begitu.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Flex</h2>
        <p>
          Dengan <b>display: flex</b>, kita telah diberikan konfigurasi penuh terhadap elemen kita dan memungkinkan kita melakukan hal yang sebelumnya tidak dapat dilakukan. Flex bisa membuat banyak hal yang sangat menarik yang kita akan kupas satu-satu selanjutnya. Flex memungkinkan kita untuk mengatakan pada CSS untuk meletakkan elemen dalam tag tersebut sesuai yang kita inginkan. Kita bisa membuatnya left-aligned, bottom-aligned, center-aligned atau apapun yang kamu mau. Kamu bahkan bisa membuat column dari sana. Tanpa berbasa basi lagi, kita akan segera melihatnya beraksi.
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
          Sekarang kita sudah ada basic foundation dari flex tersebut. Saatnya kita mengubah beberapa property khususnya 3 property ini: <b>flex-direction</b>, <b>justify-content</b>, serta <b>align-items</b>. Lihatnya sihir yang akan terjadi pada kotak tersebut. Kalian dapat menggunakan code editor diatas untuk melihat hasilnya setelah mengubah codenya. Ubah code dibawah <b>display: flex</b> tersebut.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">flex-direction</h2>
        <p>
          <ol>
            <li>
              <b>flex-direction: row</b> - Secara default, flex-direction memiliki value row. Row mengartikan browser akan menyusun konten elemen kita menjadi sebaris.
            </li>
            <li>
              <b>flex-direction: column</b> - Selain dapat dibariskan dalam 1 baris horizontal, kita juga dalam membuatnya menjadi column (berbaris secara vertical).
            </li>
            <li>
            <b>flex-direction: row-reverse</b> / <b>flex-direction: column-reverse</b> - Dengan adanya reverse, kita dapat mengubah urutan elemennya untuk disusun mulai dari elemen terakhir ke elemen yang pertama. Biasa lebih dikenal dengan kebalikan dari row maupun column.
            </li>
          </ol>
        </p>
        <h2 className="fs-3 fw-bolder mt-5">justify-content (Memposisikan konten elemen secara horizontal)</h2>
        <p>
          <ol>
            <li>
              <b>justify-content: flex-start</b> - Secara default, justify-content memiliki value flex-start. flex-start membuat konten elemen kita disusun left-aligned (disejajarkan ke bagian kiri).
            </li>
            <li>
              <b>justify-content: flex-end</b> - Kebalikan dari flex-start, flex-end membuat konten elemen kita disusun right-aligned (disejajarkan ke bagian kanan).
            </li>
            <li>
              <b>justify-content: center</b> - center memposisikan konten elemen kita disusun pada bagian tengah (center-aligned) di dalam tag div tersebut.
            </li>
            <li>
              <b>justify-content: space-between</b> - space-between membuat konten elemen pertama kita ke bagian paling kiri serta konten elemen terakhir kita ke bagian paling kanan. Sisa elemen yang ada akan diposisikan secara sejajar. Ini sangat berguna ketika kita sedang menggunakan column pada website kita.
            </li>
            <li>
              <b>justify-content: space-around</b> - space-around memposisikan konten elemen kita supaya memiliki jarak yang sama antara tiap konten elemen yang ada di dalamnya.
            </li>
            <li>
              <b>justify-content: space-evenly</b> - space-evenly memiliki fungsi yang hampir sama dengan space-around, yang membedakan diantara keduanya adalah jarak antara konten elemen pertama dengan sudut div juga akan diposisikan supaya memiliki jarak yang sama, sedangkan space-around hanya memposisikan jarak antara tiap konten elemen dan menghiraukan jarak antara konten elemen pertama dan terakhir dengan sudut div tersebut.
            </li>
          </ol>
        </p>
        <h2 className="fs-3 fw-bolder mt-5">align-items (Memposisikan konten elemen secara vertikal)</h2>
        <p>
          <ol className="list-decimal ml-5">
            <li>
              <b>align-items: flex-start</b> - Secara default, align-items memiliki value flex-start. flex-start membuat konten elemen kita disusun left-aligned (disejajarkan ke bagian kiri).
            </li>
            <li>
              <b>align-items: flex-end</b> - Kebalikan dari flex-start, flex-end membuat konten elemen kita disusun right-aligned (disejajarkan ke bagian kanan).
            </li>
            <li>
              <b>align-items: center</b> - center memposisikan konten elemen kita disusun pada bagian tengah (center-aligned) di dalam tag div tersebut.
            </li>
            <li>
              <b>align-items: stretch</b> - stretch membuat setiap ketinggian konten elemen kita untuk memenuhi seluruh kontainer yang menaunginya di dalam. (kecuali sudah kamu set height secara eksplisit, maka stretch akan bekerja)
            </li>
          </ol>
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Advance Flex</h2>
        <p>
          Masih ada lagi beberapa keunggulan flex yang dapat kamu gunakan. Kamu bisa membuat beberapa row dengan menggunakan <b>flex-wrap</b>. Terdapat juga beberapa property yang dapat menargetkan hanya beberapa konten elemen tertentu untuk diposisikan secara individual di tengah, kiri, ataupun kanan. Kamu dapat mempelajari lebih lanjut melalui artikel <a target="_blank" rel="noopener noreferrer" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">CSS Tricks tentang Flexbox</a>
        </p>
        <div className="d-flex justify-content-between mt-5">
          <Link type="button" class="btn btn-primary btn-lg" to="/css-selector-and-pseudo-selector">
            <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            CSS Selector and Pseudo Selector
          </Link>
          <Link type="button" class="btn btn-primary btn-lg" to="/assessment-project-css">
            Assessment Project: CSS
            <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default CssLayout


