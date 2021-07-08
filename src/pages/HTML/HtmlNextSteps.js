import { useState } from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
import { Link } from 'react-router-dom';

const HtmlNextSteps = () => {
  const [value, setValue] = useState(
    "<!-- inputs -->\n<div>\n\t<input type='text' />\n\t<input type='color' />\n\t<input type='file' />\n\t<input type='number' />\n\t<input type='datetime-local' />\n\t<input type='radio' />\n\t<input type='checkbox' />\n</div>"
  );
  const [play, setPlay] = useState(
    '<div class="header">\n\t<h1 class="fs-3 fw-bold mb-4">My Great Blog</h1>\n</div>\n<section class="blog px-3 py-3 border border-danger border-2 container">\n\t<div class="post">\n\t\t<h1 class="post-title fs-4">This is a blog</h1>\n\t\t<p class="post-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tenetur sequi minima similique cum? Aperiam ut voluptas deleniti pariatur dolores. Mollitia est voluptatem, rem ducimus quasi quidem aliquid esse nihil.</p>\n\t</div>\n</section>'
  );
  const [hid, setHid] = useState(
    '<div id="header">\n\t<h1 class="fs-3 fw-bold mb-4">My Great Blog</h1>\n</div>\n<section id="blog-post "class="blog px-3 py-3 border border-danger border-2 container">\n\t<div class="post">\n\t\t<h2 class="post-title fs-4">This is a blog</h2>\n\t\t<p class="post-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tenetur sequi minima similique cum? Aperiam ut voluptas deleniti pariatur dolores. Mollitia est voluptatem, rem ducimus quasi quidem aliquid esse nihil.</p>\n\t</div>\n</section>'
  );

  return (
    <main id="html-next-steps" className="mt-5">
      <section className="container-fluid p-5 bg-white shadow">
        <h1 className="fs-1 fw-bolder">HTML Next Steps</h1>
        <p>
          Sebelumnya, kita telah mempelajari dasar-dasar dari operasi di HTML. Sebelum kita masuk ke bagian CSS, kita akan mengeksplor lebih jauh tentang HTML.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Attributes</h2>
        <p>
          Mari kita memulainya dari tag input. Ada beberapa tipe input yang telah kita ketahui sebelumnya seperti text, color, checkboxes,file dan masih banyak lagi. Jika kita hanya menuliskan tag input tanpa adanya keterangan tambahan mengenai input apa yang akan kita pakai, browser tidak akan mengerti maksud kita. Maka dari itu, kita dapat memberikan informasi tersebut melalui <b>Attributes</b>. HTML Attributes yang akan kita pakai dalam input adalah <b><em>type</em></b> terus kita akan menaruh informasi tipe input tersebut.
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
        <h2 className="fs-3 fw-bolder mt-5">Classes</h2>
        <p>
          Class merupakan atribut spesial yang dimiliki oleh seluruh tag html. Lalu apa fungsi class sebenarnya? Class tidak akan melakukan apapun, tetapi jika kita hendak melakukan styling dengan CSS atau memberikan logic dengan JavaScript, maka class tersebut akan berguna, dikarenakan dengan adanya class memungkinkan CSS ataupun JavaScript untuk mengidentifikasi elemen HTML yang hendak diberi code lebih lanjut. Kembali lagi ke analogi pembangunan rumah, untuk ruangan spesifik kita akan memberi wallpaper berwarna merah, untuk ruang tamu diberi wallpaper hijau. Kamu pastinya tidak ingin ruangan tersebut memiliki wallpaper yang sama, ataupun wallpapernya jadi tercampur. Inilah kegunaan class, mereka memungkinkan kamu untuk mencari tag HTML sehingga kamu bisa memberikan mereka instruksi.
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
          Lihatlah contoh diatas, hampir setiap tag menggunakan class, dan ingatlah di dalam 1 tag boleh memiliki beberapa class. Itu sudah merupakan hal biasa jika kita sudah mulai mengerjakan proyek besar. Ketika kita ingin styling dengan CSS, kita bisa hanya dengan menargetkan class tersebut sehingga memiliki style yang sesuai dan berbeda-beda.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">IDs</h2>
        <p>
          Kita sering mendengar kata ID di kehidupan kita. Mulai dari ID Mahasiswa, ID Card (KTP) dan masih banyak lagi. Semua ID memiliki 1 kesamaan yaitu sifatnya unik, yaitu ID yang dimiliki tiap orang berbeda satu dengan yang lainnya. ID tersebut digunakan untuk mengidentifikasi kita dari orang lain. Pada kehidupan nyata ID akan sangat berguna, tetapi ketika kita hendak menggunakan ID di HTML, akan terasa sangat jarang dipakai. Pada contoh diatas, kita lebih sering menggunakan class daripada ID dikarenakan class bisa digunakan dimana saja dan bahkan bisa dipakai oleh 2 atau lebih tag. Bahkan kadang banyak orang akan menyarankan kamu untuk tidak menggunakan ID. Tetapi janganlah kamu mendengar nasihat itu dikarenakan apapun yang diciptakan di dunia programming pasti ada kegunaannya masing-masing. Mari kita lihat cara penggunaan ID.
        </p>
        <CodeMirror
          value={hid}
          options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true
          }}
          onBeforeChange={(editor, data, value) => {
            setHid(value)
          }}
          onChange={(editor, data, value) => {
            setHid(value)
          }}
        />
        <span className="fs-4 fw-bold">
          Results
        </span>
        <div className="border border-primary border-2 py-2 my-2">
          <div dangerouslySetInnerHTML={{__html:hid}}></div>
        </div>
        <p>
          Seperti begitulah penggunaan ID. Bisa kita lihat saya memberi ID yang sangat spesifik pada code diatas, sehingga ini memudahkan kita dalam mengidentifikasi code kita, dan juga salah kegunaan paling berguna mengenai ID adalah kita bisa membuat link menggunakan anchor tag sehingga kita bisa menuju ke bagian ID yang dituliskan.
        </p>
        <p>
          Dengan ID, kita dapat mensematkannya kedalam anchor tag seperti berikut. Ingatlah untuk memberikan tanda <b><em>#</em></b> jika kita ingin menargetkan ID pada HTML ataupun CSS. Contoh: <b><em>&lt;a href="#top-page"&gt; Go to Top Page &lt;/a&gt;</em></b>
        </p>     
        <div className="d-flex justify-content-between">
          <Link type="button" class="btn btn-primary btn-lg" to="/html">
            <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            HTML
          </Link>
          <Link type="button" class="btn btn-primary btn-lg" to="/meta-html">
            HTML Meta Tag
            <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default HtmlNextSteps

