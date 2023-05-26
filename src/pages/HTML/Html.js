import { useState } from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
import { Link } from 'react-router-dom';

const Html = () => {
  const [value, setValue] = useState(
    "<h1>This is a Headings</h1>"
  );

  const [play, setPlay] = useState(
    "<!-- links -->\n<a href='https://www.itnb.ac.id'>ITNB Campus</a>\n<a href='https://twice.jype.com'>Twice</a>\n<a href='https://www.codepen.io'>CodePen</a><br />\n\n<!-- text empasis -->\n<strong>This text is strong.</strong>\n<em>This text is emphasized.</em>\n\n<!-- paragraphs -->\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, expedita enim odit possimus non optio numquam quia ut, amet voluptate consequuntur consectetur suscipit architecto corporis officiis rerum sint quas earum?</p>\n\n<!-- inputs -->\n<div>\n\t<input type='text' />\n\t<input type='color' />\n\t<input type='file' />\n\t<input type='number' />\n\t<input type='datetime-local' />\n\t<input type='radio' />\n\t<input type='checkbox' />\n</div>\n\n<!-- select -->\n<select>\n\t<option value='Ghana'>Ghana</option>\n\t<option value='portland'>Portland</option>\n\t<option value='Medan'>Medan</option>\n</select>\n\n<marquee>Just For Fun, No Sana No Life!!!</marquee>"
  );

  return (
    <main id="html" className="mt-5">
      <section className="container-fluid p-5 bg-white shadow">
        <h1 className="fs-1 fw-bolder">HTML (HyperText Markup Language)</h1>
        <p>
          Tanpa basa-basi lagi, kita akan langsung praktek dalam membuat website pertama kamu. Meskipun pada awalnya website yang kamu buat memiliki penampilan yang tidak bisa dibilang bagus, namun kamu sudah berhasil membuatnya! Disini kita akan memulai dengan HTML (HyperText Markup Language). Ini tidak seperti bahasa pemrograman lainnya yang bisa melakukan kalkulasi. HTML hanya berupa bahasa untuk mendefinisikan konten website kamu.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Tags</h2>
        <p>
          Dasar penulisan HTML selalu disertai dengan <b>tag</b>. Tag dapat diibaratkan sebagai dasar dari building block HTML. Setiap tag selalu disertai dengan opening tag dan closing tag dimana di dalamnya merupakan konten yang akan kita tampilkan pada website. Akan lebih baik jika saya dapat langsung mendemonstrasikan dalam beberapa contoh.
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
          Disini kamu dapat melihat bahwa opening tag &lt;h1&gt; serta closing tag &lt;/h1&gt; mengelilingi konten kalimat "This is a Headings". Inilah dasar operasi bagaimana HTML dapat berjalan. Kamu harus menyertakan opening tag yang dimana di dalam tag tersebut berisi code informasi tentang apa yang akan kita tampilkan pada website kita. Pada contoh diatas, kita menggunakan tag <b>h1</b> untuk menampilkan heading tag. Heading Tag merupakan elemen website yang menampilkan judul terbesar dan terpenting dalam sebuah website, seperti judul cerita, judul sebuah majalah. 
        </p>
        <p>
          <b>h1</b> selalu dirender oleh website dengan font yang terkesan bold dan besar sehingga ini juga mengindikasikan elemen ini merupakan elemen terpenting dalam sebuah website. Tetapi, apa yang terjadi di dalamnya lebih dari proses tersebut. Browser tidak hanya digunakan untuk melihat ataupun membaca websites.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Website Accessibility</h2>
        <p>
          Cantumkan kalimat ini pada pikiran kamu jika kamu ingin menjadi seorang Web Developer. <b><em>"Website is for Everyone"</em></b>. Berdasarkan data dari WHO (World Health Organization), terdapat lebih dari 200 juta manusia di dunia ini yang memiliki gangguan kesehatan seperti buta, tuli, bisu, alergi dan lain-lain sebagainya. Pernahkah kamu berpikir bagaimana orang yang memiliki gangguan seperti itu bisa menikmati website?
        </p>
        <p>
          Disinilah kegunaan browser kamu selain menampilkan website yang akan berguna. Untuk teman-teman yang buta atau memiliki gangguan penglihatan, mereka dapat menggunakan <b>screen readers</b> untuk membaca konten dari website yang mereka kunjungi dan mereka dapat mendengarnya. Tag tersebut juga dapat membantu mesin pencari seperti Google atau Bing dalam mengidentifikasi informasi penting yang terdapat dalam website kamu yang dapat membantu dalam <b>Search Engine Optimization (SEO)</b> yang secara singkat dapat membantu website kamu lebih mudah dicari oleh user.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Types of Tags</h2>
        <p>
          Selain tag heading yang telah kita gunakan sebelumnya, masih ada sangat banyak tag yang dapat kamu gunakan untuk mendeskripsikan konten website kamu. Disini kita akan membahas beberapa tag yang paling sering digunakan dan yang sering dibutuhkan untuk membuat sebuah website.
          <ol>
            <li>
              <b>Heading</b> - h1, h2, h3, h4, h5, dan h6. Jika kamu sering menggunakan Microsoft Word, pasti kamu sering menggunakan heading tersebut dalam membuat judul dokumen kalian. Jadi terdapat 6 level heading dan subheading. h1 merupakan heading yang paling atas dan penting dan diikuti oleh subheading h2, h3, h4, h5 dan sampai h6.
            </li>
            <li>
              <b>Paragraph</b> - p. Seperti namanya, tag ini dapat menampilkan teks paragraf di dalamnya. Contoh: <b><em>&lt;p&gt; Ini adalah teks paragraf &lt;/p&gt;</em></b>
            </li>
            <li>
              <b>Anchor</b> - a. Tag ini dapat menghubungkan kita ke link section atau website lain. Setiap anchor tag membutuhkan link destinasi yang hendak dituju. Link destinasi tersebut dapat dimasukkan atau disematkan melalui <b>Attributes</b> yang akan kita bahas nanti. Contoh: <b><em>&lt;a href="https://www.google.com"&gt; Menuju Google &lt;/a&gt;</em></b> akan menghasilkan <a href="https://www.google.com">Menuju Google</a>
            </li>
            <li>
              <b>Division</b> - div. Percayalah, kita pasti akan sering menggunakan tag ini jika sudah mengetahuinya. Sebuah div diibaratkan seperti sebuah kotak atau kontainer. Dari namanya, kita mungkin sudah bisa menebak bahwa tujuan div adalah untuk mengelompokkan beberapa elemen HTML. Pengelompokkan tersebut berguna agar code kamu lebih rapi dan dapat dengan mudah kamu style dengan CSS. Contoh pada Twitter, untuk setiap Tweet akan berisi foto profil, nama, konten paragraf, icon dan lain-lain sehingga kita akan mengelompokkannya dalam sebuah div.
            </li>
            <li>
              <b>Image</b> - img. Tujuan tag ini adalah untuk menampilkan gambar pada website kamu. Sebenarnya ada 2 cara yang dapat kamu gunakan untuk menampilkan gambar ke website kamu yaitu dengan HTML ataupun dengan CSS. Pada kali ini kita akan membahas dengan cara HTML saja. Sebuah tag img membutuhkan <b>Attributes</b> yaitu <em>src (source)</em> untuk menaruh informasi mengenai letak foto yang akan kamu tampilkan. Disamping itu, kamu juga membutuhkan <em>alt (alternative)</em> untuk menaruh informasi singkat dalam teks mengenai foto yang akan kamu tampilkan jika foto tersebut mengalami gangguan ketika hendak ditampilkan di website. Ini juga membantu untuk orang yang menggunakan screen reader karena mereka tidak melihat website tersebut secara fisik. Ingat juga, dikarenakan tag img tidak memiliki konten didalamnya, maka dia berhak untuk tidak menggunakan closing tag atau sering kita sebut sebagai <b>self-closing tag</b>. Contoh: <b><em>&lt;img src="doggos.jpg" alt="Doggy Picture" /&gt;</em></b>
            </li>
          </ol>
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Comments</h2>
        <p>
          Kadang kala kita sebagai programmer dapat melupakan hal yang telah kita buat. Dikarenakan kita terlalu sering menulis code yang sangat susah atau sangat panjang yang akan membuat kita lupa ketika akan digunakan nanti. Ingatlah kamu menulis code tersebut bukan hanya untuk komputer mengerti tentang apa yang akan dikerjakan, tetapi juga untuk kamu dapat mengerti dan teman kamu ketika kamu kembali membuat project tersebut.
        </p>
        <p>
          Kita membutuhkan kayak sebuah petunjuk sehingga kita bisa mengingat kembali apa yang telah kita lakukan. Disinilah <b>comments</b> datang menyelamatkan hari-harimu. Basically dengan comment, kamu dapat menuliskan teks sesuka kamu tanpa komputer tersebut dapat membacanya. Mereka hanya akan mengabaikan comment. Pada HTML, kamu dapat menuliskan comment dengan cara tag berikut, <b>&lt;!-- isi comment --&gt;</b>. Tulislah sesuka hati kamu apa yang ingin kamu ketahui mengenai progress di balik project kamu disana.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">HTML Playground</h2>
        <p>
          Pada section kali ini, saya sudah menambahkan fitur yang dapat kamu gunakan untuk bermain dan mengetes langsung dengan code HTML yang telah kamu pelajari diatas ataupun yang mungkin kamu tahu. Disini kamu dapat langsung melihat hasil dari code yang telah kamu tuliskan. <b>Selamat Bereksperimen!</b>
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
        <div className="d-flex justify-content-between">
          <Link type="button" className="btn btn-primary btn-lg" to="/your-weapons">
            <svg className="me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            Your Weapons
          </Link>
          <Link type="button" className="btn btn-primary btn-lg" to="/html-next-steps">
          HTML Next Steps
            <svg className="ms-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Html

