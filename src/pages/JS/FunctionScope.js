import {UnControlled as CodeMirror} from 'react-codemirror2';
import { Link } from 'react-router-dom';

const FunctionScope = () => {
  return (
    <main id="function-scope" className="mt-5">
      <section className="container-fluid p-5 bg-white shadow">
        <h1 className="fs-1 fw-bolder">Function and Scope</h1>
        <p>
          Saatnya kita memasuki ke bagian function. Kenapa kita membutuhkan function? Apa itu function? Mungkin itu merupakan pertanyaan yang muncul di kepalamu sekarang jika kamu bukan berasal dari background programming. Sebelumnya kita telah mempelajari bahwa di CSS kita dapat menggunakan classes untuk penggunaan styling yang berulang kali pada beberapa elemen. Function juga memiliki fungsi yang sama, kita menulis code dan menyimpannya dalam memory sehingga ketika kita membutuhkan code tersebut, kita dapat memanggilnya secara langsung tanpa harus membuat ulang code tersebut lagi. Mari kita mulai dengan contoh di bawah.
        </p>
        <CodeMirror
          value={`function tambahNilai(nilai) {\n\treturn nilai + 2;\n}\n\nconst nilaiJethro = tambahNilai(98);\nconsole.log(nilaiJethro);`}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          Ini merupakan contoh sederhana bagaimana kita dapat membuat sebuah function dan bagaimana sebuah function dapat bekerja. Awalnya kita membuat function dengan nama tambahNilai. Function ini menerima <b>1 parameter</b>, yaitu <em>nilai</em> dan function tersebut akan mengembalikan (return) nilai ditambah dengan 2. Sekarang kita bisa menggunakan function tersebut kapanpun kita mau. Mari kita membuat function yang lebih berguna daripada ini.
        </p>
        <CodeMirror
          value={"function menyapa(namaDepan, namaBelakang, caraSapa) {\n\treturn `${caraSapa} ${namaDepan} ${namaBelakang}! Saya sangat senang kamu dapat bergabung dengan kita, ${namaDepan}! Saya berharap kamu dapat menikmati waktu kamu selama disini, ${namaDepan}.`;\n}\n\nconsole.log(menyapa('Edrick', 'Tangkas', 'Hehehey'));\nconsole.log(menyapa('Chrisyella', 'Gracia', 'Selamat Siang'));"}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          Wow! Itu merupakan code yang termasuk panjang. Coba bayangkan jika kamu mau menyapa 10 orang. Tanpa adanya function, maka kita harus menulis ulang code tersebut dimana itu sangat melelahkan. Sekarang, kita hanya memanggil function tersebut dengan parameter nama yang berbeda, maka kita dapat menyapa orang banyak tanpa harus menulis banyak code. Tetapi perlu kamu ingat bahwa urutan parameter harus berurut sesuai yang kita buat pada function tersebut. Kamu juga boleh memiliki sebanyak parameter yang kamu mau!
        </p>
        <p>
          Jika kamu sudah mengikuti beberapa contoh diatas, kita dapat memanggil function dengan cara menulis nama function disertai dengan tanda kurung (), contohnya seperti <b>namaFunction();</b>. Sebenarnya function memiliki sifat hampir sama dengan variabel, dan cara membedakannya dengan variabel adalah dengan melihat jika ada tanda kurung setelah nama tersebut, maka ia merupakan function. Untuk setiap parameter yang akan diterima, maka nilai parameter tersebut yang akan digunakan di dalam function tersebut.
        </p>
        <CodeMirror
          value={'const tanggalLahir = "29 Februari 2000";\nconst kotaLahir = "Siantar";\nconst waktuLahir = "07.30";\n\nfunction dataDiri(tanggalLahir, kotaLahir, waktuLahir) {\n\tconsole.log("Saya lahir pada tanggal " + tanggalLahir + " di kota " + kotaLahir + ". Pada " + waktuLahir + ", saya muncul di dunia ini.");\n}\n\ndataDiri(tanggalLahir, kotaLahir, waktuLahir);'}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <h2 className="fs-3 fw-bolder mt-5">Scope</h2>
        <p>
          Disini mungkin merupakan section yang paling membingungkan atau ambigu tetapi kita tetap akan membahas dan memulainya. Setiap kita memanggil sebuah function, mereka memiliki <b>scope</b> tersendiri. Maksud scope disini adalah setiap hal yang kita deklarasikan di dalam function tersebut tidak dapat digunakan diluar function tersebut. Seperti sebuah meja kerja, untuk setiap alat yang berada dalam meja kerja tersebut dapat digunakannya, tetapi dia tidak menggunakan alat-alat yang berada pada meja kerja lainnya. Jika function tersebut telah siap berjalan, maka setiap variabel yang dideklarasikan dalam function tersebut akan dibuang.
        </p>
        <CodeMirror
          value={'function tambahNilai(nilai) {\n\tconst variabelDalam = "Kamu tidak bisa melihat aku diluar function ini";\n\treturn nilai + 2;\n}\n\ntambahNilai(2);\nconsole.log(variabelDalam);'}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          Menurut kalian apakah ini akan berjalan? Tentu saja tidak, karena <b>variabelDalam</b> dideklarasikan di dalam function tersebut, sehingga segera setelah function <b>tambahNilai</b> sudah selesai dijalankan, maka <b>variabelDalam</b> akan dibuang karena tidak digunakan lagi.
        </p>
        <CodeMirror
          value={'let temanJomblo = 0;\nfor (let i = 0; i <= 10; i++) {\n\ttemanJomblo ++;\n}\n\nconsole.log(i);'}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          Pada situasi for loop seperti contoh diatas, ini juga tidak akan bekerja. Hal ini disebabkan <b>i</b> hanya dideklarasikan untuk for loop tersebut dan setelah for loop tersebut selesai, maka dia akan dibuang. Seperti saya bilang di awal section ini, mungkin ini bisa jadi sangat membingungkan terutama untuk teman-teman yang bukan berasal dari background programming, karena kamu akan selalu menghadapi masalah tersebut kedepannya karena kita kadang bisa membuat kesalahan tersebut.
        </p>
        <p>
          Scope merupakan hal yang sangat aneh terutama di JavaScript(mungkin saja berbeda dengan di Python atau bahasa pemrograman lainnya). Jika kamu merasa ini susah, memang ini agak susah dimengerti pas awal. Maka dari itu, kita akan latihan lebih lanjut tentang scope. Ingatlah variabel akan tetap berada dalam scope tersebut selama scope tersebut ada. Jika kita memodifikasi nilai variabel yang berada di luar scope dan mengubahnya di dalam scope, maka variabel tersebut akan tetap ada selagi dia berada di luar scope tersebut.
        </p>
        <CodeMirror
          value={`const A = "A";\nlet F;\n\nfunction contoh(B) {\n\tconsole.log(B);\n\tconst C = "C";\n\tlet H = "H";\n\tif(1 + 1 === 2) {\n\t\tconst D = "D";\n\t\tH = "something else";\n\t}\n\tconsole.log(D);\n\tconsole.log(H);\n\tF = "F";\n}\n\nlet E = 0;\nwhile (E < 3) {\n\tE++;\n\tconsole.log(A);\n\tconst G= "G";\n}\nconsole.log(E);\nconsole.log(G);\n\ncontoh("B");\n\nconsole.log(B);\nconsole.log(C);\nconsole.log(F);`
          }
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          Sebelum kamu copy code tersebut dan menjalankannya, coba kamu visualkan pada otak kamu kira-kira apa saja hasil dari code tersebut. Jika kamu sudah memiliki jawaban, coba jalankan code kalian di browser.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Built-ins</h2>
        <p>
          Terdapat banyak function yang sudah dibuat oleh orang yang dapat kamu gunakan! Banyak orang pintar telah membuat function yang sering kita gunakan. Contohnya, jika kamu memiliki string dengan tulisan yang berantakan dan kamu ingin semuanya menjadi huruf kecil (lowercase), kamu dapat melakukannya seperti ini.
        </p>
        <CodeMirror
          value={`const kalimatAneh = "i aM SO bAD In PLayINg vAlORAnT.";\nconsole.log(kalimatAneh.toLowerCase());`
          }
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          Selalu ingat untuk menambahkan tanda kurung setelah kita memanggil function tersebut. Kamu dapat menggunakan function seperti ini dan bahkan lebih banyak lagi yang dapat kamu eksplor melalui <b>MDN (Mozilla Developer Network)</b>. Dalam <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/">MDN</a> menyediakan dokumentasi yang menurutku paling lengkap yang dapat kamu baca. Ingat ini bukanlah <b>menyontek</b>! Karena seperti yang selalu saya bilang bahwa tidak ada manusia yang bisa menghapal semua code yang ada di muka bumi ini.
        </p>
        <p>
          Kamu dapat juga memanggil <b>Math.round(4.5)</b> dan akan return angka yang telah dibulatkan (yaitu 5). Kamu juga bisa menggunakan <b>string.substr(indexToStart, howManyCharactersToInclude)</b> untuk return bagian dari string tersebut.
        </p>
        <CodeMirror
          value={'console.log(Math.round(5.1));\n\nconst namaKamu = "Brandon";\nconsole.log(namaKamu.substr(3, 2));'}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <div className="d-flex justify-content-between mt-5">
          <Link type="button" class="btn btn-primary btn-lg" to="/intro-to-js">
            <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            Intro to JS(JavaScript)
          </Link>
          <Link type="button" class="btn btn-primary btn-lg" to="/objects-arrays">
            Objects and Arrays
            <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default FunctionScope
