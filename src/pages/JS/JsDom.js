import {UnControlled as CodeMirror} from 'react-codemirror2';
import { Link } from 'react-router-dom';

const JsDom = () => {
  return (
    <main id="js-dom" className="mt-5">
      <section className="container-fluid p-5 bg-white shadow">
        <h1 className="fs-1 fw-bolder">The DOM (Document Object Model)</h1>
        <p>
          Sejauh ini kita sudah belajar dasar fundamental dalam menuliskan code JavaScript di balik layar. Kita menggunakan <b>console.log</b> untuk menampilkan hasil output dari code kita. Jika ini terus berlanjut, jadi bagaimana kita membuat code kita bisa berinteraksi dengan website yang kita buat?
        </p>
        <p>
          Mari kita breakdown hal apa yang terjadi pada browser dan bagaimana bisa kamu menampilkan code yang kamu tuliskan untuk jalan di browser!
        </p>
        <p>
          <ol>
            <li>
              Kamu menuliskan code pada code editor kamu (Contohnya VSCode).
            </li>
            <li>
              Kamu menaruh code kamu pada server sehingga orang lain bisa mendapatkannya.
              <ol>
                <li>
                  (Banyak hal akan terjadi disini. Untuk sekarang kita tidak akan membahasnya.)
                </li>
                <li>
                  Browser orang tersebut akan membuat request ke server kita untuk mendapatkan file index.html.
                </li>
                <li>
                  Server kita mengirimkan copy dari file index.html kita.
                </li>
                <li>
                  Browser tersebut akan membaca file HTML kamu, dan melihat kamu memiliki script tag berisi <b>main.js</b> di dalam HTML kamu.
                </li>
                <li>
                  Browser kemudian membuat request baru lagi ke server untuk file <b>main.js</b> kamu.
                </li>
                <li>
                  Server kamu akan mengirimkan kopian dari file <b>main.js</b>.
                </li>
                <li>
                  Browser kemudian akan membaca code JavaScript kamu dan memulai mengeksekusi codenya.
                </li>
                <li>
                  Proses yang sama berlaku pada CSS juga.
                </li>
              </ol>
            </li>
          </ol>
        </p>
        <p>
          Jadi, begitulah cara kerja browser dalam menampilkan website kamu yang dimana code kamu akan ditaruh pada server di cloud seperti Amazon Web Services, Microsoft Azure, Google Cloud Platform atau tempat lain seperti hostinger atau rumahweb. Apakah kita juga bisa melakukan hal tersebut secara lokal melalui komputer kita? Yaa, bisa. Komputer kamu sebenarnya akan memalsukan proses tersebut. Komputer seakan akan bertindak layaknya sebuah server dan client sehingga akan memudahkan kita semua dalam membuat website. Ketika kita membuka file HTML tersebut pada browser kita, Harddisk tempat penyimpanan file tersebut akan bertindak seperti server. Ketika kamu sudah tahu konsep ini kamu pasti akan lebih memahami tentang cara jalannya website.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">DOM</h2>
        <p>
          Cara JavaScript berinteraksi dengan HTML/CSS adalah dengan DOM (Document Object Model). DOM merupakan kumpulan dari object dan method yang dapat kamu panggil dari JavaScript sehingga dapat memberikan efek ke HTML/CSS kita.
        </p>
        <p>
          Perlu kamu ingat disni bahwa kita akan menuliskan semua code JavaScript kita melalui tag <b>script</b> pada HTML/CSS kita sehingga kita bisa menuliskan semua bahasa tersebut dalam 1 file untuk testing. Note: jangan mengikuti cara ini jika kamu sudah develop website professional, karena biasanya kita akan memisahkan seluruh code kita sehingga memudahkan kita dalam menulis code.
        </p>
        <p>
          Mari lihat contoh dibawah ini.
        </p>
        <CodeMirror
          value={`const  redSquare = document.querySelector('.red-square');\nredSquare.style.backgroundColor = 'limegreen';`}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          Tuliskan code tersebut pada file HTML kamu serta ikutin instruksi aku ketika mengajar secara offline. Mari kita breakdown setiap part tersebut.
          <ol>
            <li>
              Kita memanggil method yang terdapat pada document. Document tersedia secara global sebagai variabel pada browser dan digunakan untuk berinteraksi dengan HTML serta CSS. Ada banyak method yang dapat kamu gunakan. Pada contoh diatas kita menggunakan <b>querySelector</b> yang dimana kamu dapat menaruh CSS Selector (yaitu class) dan dia akan mengembalikan elemen pertama yang memiliki selector tersebut.
            </li>
            <li>
              Dari sana, kita menggunakan JavaScript untuk menunjukkan tag <b>div.redSquare</b> yang terdapat dalam variabel redSquare sehingga kita bisa mulai untuk memanipulasinya.
            </li>
            <li>
              Kemudian kita akan menggunakan object <b>style</b> yang merepresentasikan seluruh style CSS yang dapat diaplikasikan melalui object tersebut.
            </li>
            <li>
              Kita akan mengubah backgroundColor dari elemen tersebut. Coba kamu perhatikan bahwa penulisan backgroundColor bukan background-color (camelCasing vs kebab-casing).Beginilah caranya kita berinteraksi dengan CSS melalui JavaScript. Ingatlah bahwa seluruh CSS property dalam JavaScript akan diubah menjadi camelCasing.
            </li>
            <li>
              Pada akhirnya, kita akan memasukkan value yang kita mau. Ini juga berlaku untuk CSS property lainnya.
            </li>
          </ol>
        </p>
        <p>
          Kamu dapat melakukan banyak hal dengan elemen pada HTML dengan memodifikasi stylenya. Kamu juga bisa menambah HTML yang baru, menghapusnya, mengubah text dan lain-lain.
        </p>
        <p>
          Lihatlah contoh dibawah ini.
        </p>
        <CodeMirror
          value={`const elementsToChange = document.querySelectorAll('.js-target);\nfor (let i = 0; i < elementsToChange.length; i++) {\n\tconst currentElement = elementsToChange[i];\n\tcurrentElement.innerText = "Modified";\n}`}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <h2 className="fs-3 fw-bolder mt-5">Event and Listeners</h2>
        <p>
          Kita bisa memodifikasi HTML dan CSS menggunakan JavaScript menggunakan document. Keren! Sekarang kita akan melanjutkan ke jenjang lebih lanjut yang sudah melibatkan user untuk berinteraksi. Website sekarang harus bisa berinteraksi dengan user (reactive), dimana ketika kita click ataupun melakukan sesuatu kita bisa menjalan event-event selanjutnya. Kita membutuhkan namanya <b>event listener</b> untuk JavaScript sehingga mereka bisa mengidentifikasi event-event apa yang sedang user jalankan.
        </p>
        <CodeMirror
          value={`const button = document.querySelector('.event-button');\nbutton.addEventListener('click', function() {\n\talert('Hey There');\n});`}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
        <ol className="list-decimal ml-5">
            <li>
              Kita menargetkan button tersebut melalui querySelector dan menyimpannya dalam variabel yang kita buat.
            </li>
            <li>
              Kita kemudian memanggil method addEventListener pada button tersebut. Disini kita membutuhkan 2 parameter (tidak usah dihapal punya kok, di browse saja :)) nama dari event yang kamu harapkan dari interaksi user, dan function untuk menjalankan code yang terdapat didalamnya ketika button tersebut diclick.
            </li>
            <li>
              Kita akan memanggil function yang bernama alert di dalam function event tersebut. Alert merupakan function yang super duper membagongkan dan 
              menyebalkan karena dia akan pop up dialog window setiap kali kamu memanggilnya.
            </li>
            <li>
              Orang-orang sering dibuat bigung dengan melihat <b>&#125;);</b> pada line terakhir. Kurung pertama <b>&#125;</b> untuk menutup function, dan kurung kedua <b>)</b> untuk menutup function call dari addEventListener dan <b>;</b> untuk menutup statement tersebut.
            </li>
          </ol>
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Event Delegation</h2>
        <p>
          Bagaiman jika kamu memiliki sekelompok elemen yang kamu ingin memberikan eventListener, kamu tentu dapat menaruh event listener pada setiap elemen tersebut tetapi itu sangatlah tidak efisien. Daripada kita menulis satu-satu, kita bisa menggunakan <b>event bubbling</b>. Ketika kita menjalankan event pada suatu elemen, setelah itu event tersebut akan di <b>"bubbles"</b> pada elemen di dalam div elemen tersebut dan akan berlanjut hingga root elemennya.
        </p>
        <CodeMirror
          value={`document.querySelector('.button-container').addEventListen('click', function(event) {\n\talert('You clicked on button' + event.target.innerText);\n});`}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          Disini kamu bisa melihat bahwa kita hanya mengikat event listener pada div diatasnya. Lalu, ketika kita mengklik button tersebut, kita menggunakan <b>event</b> parameter yang dioper ke dalam callback. Kamu mungkin berpikir dari mana itu berasal. Sebenarnya event tersebut selalu ada disana, dan kita hanya tidak menyadarinya. Parameter pertama dari event listener adalah event object. Terdapat banyak sekali informasi di dalam event object tetapi yang akan selalu kita gunakan adalah <b>event.target</b>. <b>target</b> merupakan tag dari event yang menyatakan darimana asal elemen tersebut. Pada kasus ini button lah yang membuat event tersebut. Sehingga kita tahu dengan tag tersebut kita akan menggunakan <b>innerText</b> property untuk mendapat text di dalam target tersebut. Maka dari itu kita bisa membuat alert berdasarkan nomor yang sesuai di dalam button tersebut. Superb bukan?
        </p>
        <div className="d-flex justify-content-between mt-5">
          <Link type="button" class="btn btn-primary btn-lg" to="/objects-arrays">
            <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            Objects and Arrays
          </Link>
          <Link type="button" class="btn btn-primary btn-lg" to="/assessment-project-javascript">
            Assessment Project: JavaScript
            <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default JsDom
