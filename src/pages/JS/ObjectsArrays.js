import {UnControlled as CodeMirror} from 'react-codemirror2';
import { Link } from 'react-router-dom';

const ObjectsArrays = () => {
  return (
    <main id="objects-arrays" className="mt-5">
      <section className="container-fluid p-5 bg-white shadow">
        <h1 className="fs-1 fw-bolder">Objects and Arrays</h1>
        <p>
          Kita tahu bahwa JavaScript bisa menyimpan data dalam sebuah variabel, tetapi pada case sebelumnya kita cuma bisa menyimpan 1 data saja dalam 1 variabel. Bagaimana jika kita memiliki sebuah koleksi data-data yang ingin kita simpan dalam variabel tersebut? Tenang saja, pada JavaScript, kita juga bisa menyimpan data dalam jumlah banyak, atau bisa dibilang kita mengelompokkan data tersebut dalam 1 variabel.
        </p>
        <CodeMirror
          value={`const dataMahasiswa = {\n\tname: "Wilson Nyoman",\n\tclassName: "Gojek",\n\tmajor: "Information System",\n\tintakeYear: 2018,\n\tgender: "Male"\n};\n\nconsole.log(dataMahasiswa);\nconsole.log(dataMahasiswa.name);\nconsole.log(dataMahasiswa['name'];`}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          Inilah yang disebut sebagai <strong>Object</strong>. Kalau bisa dibilang, objects merupakan hal yang sangat berguna ataupun vital di JavaScript. Dengan adanya object, kamu dapat mengelompokkan data-data yang berkaitan secara bersamaan sehingga bisa dipakai nantinya. Di dalam sebuah object terdiri dari <strong>keys</strong> dan <strong>values</strong>. Keys pada sebelah kiri dari tanda <strong>:</strong> mengindikasikan identitas ataupun sebuah label terhadap data dalam object tersebut.
        </p>
        <p>
          Jika kita kombinasikan object dengan function, maka akan menjadi sangat berguna dalam menjalankan program kita.
        </p>
        <CodeMirror
          value={`const dataMahasiswa1 = {\n\tname: "Wilson Nyoman",\n\tgender: "Male"\n};\n\nconst dataMahasiswa2 = {\n\tname: "Celline Putri",\n\tgender: "Female"\n};\n\nfunction checkGender(dataMahasiswa) {\n\tif (dataMahasiswa.gender === "Male") {\n\t\tconsole.log("Kenapa harus cowok terus sih!");\n\t} else {\n\t\tconsole.log("Wahh jarang-jarang nih ada cewe di jurusan komputer.");\n\t}\n}\n\ncheckGender(dataMahasiswa1);\ncheckGender(dataMahasiswa2);`
          }
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          Sekarang kita bisa memperoleh informasi hanya dalam 1 koleksi data sehingga akan sangat memudahkan kita dalam melacak data-data yang kita ingin tampilkan atau kita gunakan dalam website kita. Ini akan menjadi sangat berguna ketika kita mulai belajar mengenai <strong>API</strong> dan integrasinya dengan server.
        </p>
        <p>
          Object juga bisa menyimpan <strong>function</strong> di dalamnya.
        </p>
        <CodeMirror
          value={`const chihuahua = {\n\tjenis: "anjing",\n\tsuara() {\n\t\tconsole.log("Woof Woof Awuwoo");\n\t}\n};\n\nanjing.suara();`
          }
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          Kita bahkan bisa memiliki <strong>nested objects</strong> (menyimpan object di dalam object).
        </p>
        <CodeMirror
          value={`const sana = {\n\tname: {\n\t\tfirst: "Minatozaki",\n\t\tlast: "Sana"\n\t},\n\tlocation = {\n\t\tcity: "Tennoji-ku",\n\t\tstate: "Osaka",\n\t\tcountry: "Japan"\n\t}\n}\n\nconsole.log(sana);`}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <h2 className="fs-3 fw-bolder mt-5">Context</h2>
        <p>
          Dengan menggunakan object diatas, akan sangat berguna jika kita bisa menggunakan function di dalamnya untuk menampilkan melalui console data diri orang di atas.
        </p>
        <CodeMirror
          value={'const sudahLapar = true;\n\nif (sudahLapar) {\n\tconsole.log("Ayo segera makan KFC!");\n} else {\n\tconsole.log("Lekaslah berolahraga biar tidak menimbun lemak!");\n}'}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          Mungkin ini merupakan kali pertama kamu melihat <strong>this</strong> keyword. Bisa dibilang ini merupakan konsep yang sangat aneh, susah ataupun sukar untuk dimengerti dalam JavaScript yang disebut Context dalam JavaScript. Seringkali banyak orang yang selalu terjebak dalam ini. Jika kamu hendak mengambil karir sebagai seorang developer, ketika pada proses interview, hal ini akan sering ditanyakan oleh interviewer. Kamu diharapkan dapat menginvestasi lebih banyak waktu dalam mengerti context JavaScript ini.
        </p>
        <p>
          Mari kita lihat dari contoh paling dasar, dimanapun kamu berada di dalam JavaScript, kamu akan selalu dilingkupi oleh sebuah context. Kamu bisa saja menunjuk context tersebut dengan <strong>this</strong>. Jika aku menggunakan this pada layer paling luar di JavaScript, maka hal yang aku tunjuk adalah global object, yang dimana browser identifikasi sebagai <strong>window</strong>. Window sendiri juga memiliki hal-hal yang berguna seperti di bawah ini.
        </p>
        <CodeMirror
          value={`console.log(this === window);\nconsole.log(this.scrollY);\nconsole.log(window.scrollY);`}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          Dari contoh diatas, kita dapat mengetahui bahwa pada context yang kita tunjukkan, bahwa <strong>window</strong> merupakan <strong>this</strong> pada contoh diatas. Namun pada contoh diatas ketika kita sedang mengambil data yang berada di dalam object tersebut, yang dimana saya menggunakan this untuk menunjukkan beberapa data dalam function, bisa kita lihat bahwa function tersebut berada di dalam object tersebut, sehingga ketika kita menggunakan this, maka dia akan menunjuk ke bagian object makanya kita bisa mengakses data variabel tersebut. Ketika function tersebut sudah siap berjalan, maka sesuai yang kita pelajari sebelumnya, apapun data di dalam function tersebut akan dibuang sehingga sekarang contextnya akan menunjuk pada <strong>window</strong> sekarang.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Arrays</h2>
        <p>
          Object merupakan koleksi data yang tidak terurut secara teratur karena menggunakan keys untuk mengidentifikasi tiap data-data yang disimpan. Array yang merupakan kebalikan dari object, merupakan kumpulan data yang diurut secara teratur. Ketika kamu menaruh data ke dalam array, dia akan memiliki urutan. Contohnya, kita memiliki urutan dalam jumlah hari dalam 1 minggu.
        </p>
        <CodeMirror
          value={`const hariDalamMinggu = [\n\t"Senin",\n\t"Selasa",\n\t"Rabu",\n\t"Kamis",\n\t"Jumat",\n\t"Sabtu",\n\t"Minggu"\n];\n\nconsole.log(hariDalamMinggu);\nconsole.log(hariDalamMinggu[0]);\nconsole.log(hariDalamMinggu(4));`}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          Cara pendeklarasian array adalah dengan menggunakan tanda <strong>[  ]</strong> (square bracket). Di dalam array, kita bisa memasukkan data apapun untuk disimpan dalam 1 variabel. Kamu bisa memiliki array yang berisi koleksi angka, tulisan, object, array dan bahkan campuran antara semuanya.
        </p>
        <p>
          Kamu juga bisa mengakses data individual di dalam array. Kita juga menggunakan tanda <strong>[  ]</strong> (square bracket) yang kemudian di dalam square bracket tersebut kita isi dengan indeks angka data yang ingin kita akses. Ingatlah pada 2 section sebelumnya, bahwa setiap perhitungan di programming selalu dimulai dari angka 0. Sehingga elemen pertama akan memiliki indeks 0.
        </p>
        <p>
          Array juga memiliki banyak methods (kata lain dari function yang berada di dalam sebuah object) dan properties (kata lain dari key/value pairs) yang berada pada Array sendiri. Mari kita lihat contohnya.
        </p>
        <CodeMirror
          value={`const bilanganPrima = [1, 2, 3, 5, 7, 11, 13, 17];\nconsole.log(bilanganPrima.length);\nconsole.log(bilanganPrima.join(" | "));`}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          <strong>bilanganPrima.length</strong> akan memberikan kamu berapa jumlah data yang terdapat di dalam array tersebut. Pada kasus diatas, kita memiliki 8 elemen di dalam array tersebut, sehingga dia akan mengembalikan angka 8. Sedangkan <strong>bilanganPrima.join(" | ")</strong> bertujuan untuk mengambil seluruh elemen data dalam array tersebut dan akan diubah dan digabung menjadi string. Parameter <strong>" | "</strong> merupakan elemen yang akan saya tambahkan diantara setiap elemen ketika kita menggabungkan array tersebut.
        </p>
        <p>
          Bagaimana jika kita ingin menambahkan elemen dalam sebuah array yang telah kita ciptakan tadi. Kita bisa menggunakan <strong>push</strong>!
        </p>
        <div className="d-flex justify-content-between mt-5">
          <Link type="button" class="btn btn-primary btn-lg" to="/function-scope">
            <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            Function and Scope
          </Link>
          <Link type="button" class="btn btn-primary btn-lg" to="/js-dom">
            The DOM (Document Object Model)
            <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ObjectsArrays
