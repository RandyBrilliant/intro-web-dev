import {UnControlled as CodeMirror} from 'react-codemirror2';
import { Link } from 'react-router-dom';

const CssIntegration = () => {
  return (
    <main id="css-integration-with-html" className="mt-5">
      <section className="container-fluid p-5 bg-white shadow">
        <h1 className="fs-1 fw-bolder">CSS Integration with HTML</h1>
        <p>
          Pada section sebelumnya, kita telah belajar tentang bagaimana cara penggunaan CSS yang dapat memberikan efek dekorasi pada HTML. Cara yang kita gunakan merupakan <b>Internal CSS</b> dimana kita menaruh seluruh style CSS kita di dalam head tag. Masih terdapat beberapa cara yang dapat kita gunakan untuk menaruh CSS kita.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Inline-Style</h2>
        <p>
          Cara pertama untuk menambahkan CSS pada HTML kita yaitu dengan inline-style. Kita akan menaruh style CSS langsung pada tag elemen HTML kita dengan atribut <b>style</b>. Cara ini merupakan cara yang paling cepat dan simpel dalam menerapkan CSS dalam HTML, tetapi akan sangat digunakan berhubung kita hanya bisa memberi style pada satu tag HTML saja. Style tersebut mesti ditulis ulang lagi pada tag berikutnya jika kita hendak memberikan style yang sama.
        </p>
        <CodeMirror
          value={`<h1 style="color: magenta">This is a Headings</h1>`}
          options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true,
            readOnly: true,
          }}
          className="mb-3"
        />
        <p>
          Mari kita identifikasi setiap isi elemen tersebut.
          <ol>
            <li>
              Sebelumnya kita telah belajar bahwa setiap tag HTML memiliki <b>attributes</b>. Attributes yang digunakan untuk menaruh style CSS adalah <b>style</b>.
            </li>
            <li>
              Di dalam tanda kutip tersebut, kita akan menaruh style CSS kita seperti biasa.
            </li>
          </ol>
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Internal CSS</h2>
        <p>
          Cara kedua adalah cara yang kita gunakan sebelumnya yaitu dengan menaruh seluruh style CSS kita pada tag <b><em>&lt;style&gt;&lt;/style&gt;</em></b> yang terdapat di dalam <b>head</b> tag kita.
        </p>
        <CodeMirror
          value={`<!DOCTYPE html>\n<html lang="en">\n\t<head>\n\t\t<title>My First Website</title>\n\t\t<style>\n\t\t\th1 {\n\t\t\t\tcolor: red;\n\t\t\t\tfont-size: 50px;\n\t\t\t\tfont-weight: normal;\n\t\t\t\ttext-decoration: underline;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t\tborder: 3px solid pink;\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<p>It Worked</p>\n\t</body>\n</html>`}
          options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true,
            readOnly: true,
          }}
          className="mb-3"
        />
        <h2 className="fs-3 fw-bolder mt-5">External CSS</h2>
        <p>
          Ketika kita sudah memulai proyek besar, code kita menjadi besar dan banyak. Akan sangat susah bagi kita untuk mengidentifikasi code kita. Maka dari itu, kita perlu memisahkan code HTML serta CSS kita agar terlihat lebih rapi. Cara ini merupakan cara yang paling direkomendasi dan dianggap sebagai cara yang paling sesuai dalam membuat website.
        </p>
        <p>
          Caranya tidak begitu susah, kita hanya perlu membuat file CSS terpisah dengan extensions <b>.css</b> yang kemudian akan kita hubungkan dengan HTML kita. Contohnya kita dapat membuat file bernama <b>style.css</b>. Di dalam file tersebut, kita dapat menuliskan style CSS kita seperti biasa.
        </p>
        <CodeMirror
          value={`h1 {\n\tcolor: red;\n\tfont-size: 50px;\n\tfont-weight: normal;\n\ttext-decoration: underline;\n\ttext-transform: uppercase;\n\tborder: 3px solid pink;\n}`}
          options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true,
            readOnly: true,
          }}
          className="mb-3"
        />
        <p>
          Kemudian kita dapat menghubungkan file CSS kita pada HTML dengan <b><em>&lt;link&gt;</em></b> tag yang terdapat di dalam <b>head</b> tag kita yaitu:
        </p>
        <CodeMirror
          value={`<!DOCTYPE html>\n<html lang="en">\n\t<head>\n\t\t<title>My First Website</title>\n\t\t<link rel="stylesheet" type="text/css" href="index.css" />\n\t</head>\n\t<body>\n\t\t<p>It Worked</p>\n\t</body>\n</html>`}
          options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true,
            readOnly: true,
          }}
          className="mb-3"
        />
        <p>
          Mari kita selidiki apa saja hal-hal yang dibutuhkan oleh <b><em>&lt;link&gt;</em></b> tag berikut.
          <ol>
            <li>
              <b>rel</b> - Relationship. Ini menunjukkan bagaimana relasi antara file yang akan dihubungkan dengan HTML kita. Jika kita ingin menghubungkan file CSS kita, maka kita akan memberikan value <b><em>stylesheet</em></b> dikarenakan file CSS merupakan stylesheet.
            </li>
            <li>
              <b>type</b>. Type berguna untuk browser dalam mengidentifikasi tipe file yang hendak kita hubungkan dengan HTML kita. Jika kita sedang menghubungkan file icon website kita ke HTML, maka kita dapat memberikan type <b><em>image/png</em></b> dan masih banyak types yang bisa kita gunakan.
            </li>
            <li>
              <b>href</b>. Attributes href berguna untuk memberi tahu browser letak file CSS kita pada Desktop atau Web Server kita.
            </li>
          </ol>
        </p>
        <div className="d-flex justify-content-between">
          <Link type="button" className="btn btn-primary btn-lg" to="/css">
            <svg className="me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            CSS
          </Link>
          <Link type="button" className="btn btn-primary btn-lg" to="/css-selector-and-pseudo-selector">
            CSS Selector and Pseudo Selector
            <svg className="ms-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default CssIntegration

