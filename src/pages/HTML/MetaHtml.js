import { useState } from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
import { Link } from 'react-router-dom';

const MetaHtml = () => {
  const [value, setValue] = useState(
    `<!DOCTYPE html>\n<html lang="en">\n\t<head>\n\t\t<title>My First Website</title>\n\t</head>\n\t<body>\n\t\t<p>It Worked</p>\n\t\t<!-- Your amazing HTML here -->\n\t</body>\n</html>`
  );

  return (
    <main id="meta-html" className="mt-5">
      <section className="container-fluid p-5 bg-white shadow">
        <h1 className="fs-1 fw-bolder">HTML Meta Tag</h1>
        <p>
          Sejauh ini kita telah mempelajari cara penggunaan HTML dalam membuat sebuah website. Tetapi cara yang kita gunakan masih tergolong kurang. Mari kita mulai kembali bagaimana caranya sih untuk menulis HTML dengan baik. Beginilah tampak dari dasar fondasi HTML paling dasar.
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
          Inilah dasar fondasi yang kita gunakan dalam menulis code HTML. Mari kita selidiki dan identifikasi kegunaan tiap tag tersebut.
          <ol>
            <li>
              <b>&lt;!DOCTYPE html&gt;</b>
              <p>
                Tahukah kamu bahwa HTML telah ada sejak tahun 1993? Wah! Ternyata HTML sudah beredar sejak lama dan bahkan lebih tua diantara kita semua. HTML sudah berevolusi beberapa kali menjadi HTML yang kita pakai sekarang ini. Pastinya pencipta HTML tidak akan pernah menyadari bahwa HTML akan masih digunakan setelah 25 tahun lamanya! Evolusi pada HTML telah mengantarkan HTML untuk meminimalisir bug ataupun kesalahan yang terjadi dulunya, dan pastinya untuk tetap mengikuti standar industri pada saat ini sehingga code di dalam HTML tetap dapat digunakan berdasarkan standar industri sekarang. Salah satu cara agar browser tahu bahwa kita sedang menggunakan HTML paling baru adalah dengan tag ini. Tag ini menyatakan kita menggunakan versi paling baru yaitu HTML5.
              </p>
            </li>
            <li>
              <b>&lt;html lang="en"&gt;&lt;/html&gt;</b>
              <p>
                Untuk setiap code HTML akan kita masukan melalui tag html ini. Kamu juga harus memberikan languages attribute supaya browser tahu bahasa apa yang hendak kamu gunakan untuk website kamu. Ini akan sangat berguna sehingga jangan pernah kamu melupakannya.
              </p>
            </li>
            <li>
              <b>&lt;head&gt;&lt;/head&gt;</b>
              <p>
                Analogi paling sempurna untuk menjelaskan ini adalah HTML itu bisa diibaratkan sebagai tubuh manusia. Pada tag head ini, kita akan menaruh seluruh meta-data yang akan membantu browser dalam menafsirkan website kamu. Seperti nama websitenya, konten di dalam, kata kunci penting. Semua hal ini akan sangat membantu mesin pencarian seperti Google dan Bing dalam menampilkan website kamu pada mesin pencarian mereka.
              </p>
            </li>
            <li>
            <b>&lt;body&gt;&lt;/body&gt;</b>
            <p>
              Disinilah kita akan menaruh tag yang telah kita pelajari sebelumnya untuk menampilkan konten visual yang dapat ditampilkan di website kita.
            </p>
            </li>
          </ol>
        </p>
        <div className="d-flex justify-content-between">
          <Link type="button" class="btn btn-primary btn-lg" to="/html-next-steps">
            <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            HTML Next Steps
          </Link>
          <Link type="button" class="btn btn-primary btn-lg" to="/assessment-project-html">
            Assessment Project: HTML
            <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default MetaHtml

