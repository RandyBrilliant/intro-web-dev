import {UnControlled as CodeMirror} from 'react-codemirror2';
import { Link } from 'react-router-dom';

const IntroJs = () => {
  return (
    <main id="intro-to-js" className="mt-5">
      <section className="container-fluid p-5 bg-white shadow">
        <h1 className="fs-1 fw-bolder">Intro to JS (JavaScript)</h1>
        <p>
          Akhirnya sampailah kita pada section yang bisa dibilang merupakan section paling rumit, dikarenakan kamu harus memiliki konsentrasi dan pengertian yang penuh disini. Mungkin beberapa dari kalian pernah belajar bahasa pemrograman lain ataupun yang benar-benar baru dalam programming dan ingin mempelajari JavaScript. Section ini diibaratkan kalian diperkenalkan pada bahasa baru seperti bahasa Melayu, jika kalian sudah bisa bahasa Indonesia, maka proses pembelajaran bahasa Melayu akan menjadi lebih gampang dikarenakan konsep serta kosa-kata yang dimiliki kedua bahasa hampir mirip.
        </p>
        <p>
          Ingatlah pada awal saya telah terangkan bahwa workshop ini dibuat khusus untuk teman-teman yang memang tidak memiliki pengalaman sama sekali pada dunia pemrograman sehingga kamu dapat mengikutinya. Bagi yang berasal dari bahasa pemrograman lainnya, kalian bisa mempelajari bahasa baru serta kita akan mengidentifikasi keunggulan serta kelemahan bahasa yang akan kita pelajari dengan bahasa lainnya.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Apa sih arti code?</h2>
        <p>
          Pertanyaan yang sangat polos tetapi kamu mungkin akan kesusahan menjawabnya. Kamu bisa menganalogikan bahwa ketika kamu menulis code, kamu sedang menulis sebuah perintah tentang cara penyelesaian dari masalah yang kita hadapi sehingga komputer dapat mengerti dan menyelesaikan masalah tersebut.
        </p>
        <p>
          Lah, kita juga harus mengerti? Nah, karena kamu ataupun orang lain pasti akan kembali dan membaca code tersebut pada masa depan, mungkin besok ataupun 5 tahun kedepan. Sehingga sangat penting bagi kalian untuk menulis code yang dapat kalian mengerti sehingga kalian tidak akan kesusahan pada masa depan. Kamu juga akan menghabiskan waktu lebih sedikit untuk memahaminya karena kamu sudah pernah menulis code tersebut. Ingatlah ini bukan masalah dimana code yang berjalan paling efektif, tetapi lebih ke bagaimana code kamu itu bisa dimengerti kamu sendiri serta orang lain sehingga memudahkan kamu kedepannya. Code itu diibaratkan komunikasi antara kamu, orang lain, serta komputer.
        </p>
        <p>
          Tanpa berbasa-basi lagi, kita akan segera melihat bagaimana code bekerja. Ketika kamu menulis code, komputer akan membaginya lagi menjadi bagian-bagian yang kecil sehingga dia dapat mengerti serta mengeksekusi code tersebut satu per satu. Pada JavaScript, dalam 1 waktu, hanya akan ada 1 code yang berjalan (sering disebut sebagai single threaded). Secara singkatnya, JavaScript akan mengeksekusi code di line 1, kemudian ke line 2, line 3 dan sampai akhir. Mari kita lihat langsung!
        </p>
        <CodeMirror
          value={`const iuranBulanan = 500;\nconst iuranTahunan = iuranBulanan * 12;\nconsole.log(iuranTahunan);`}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          Mari kita breakdown apa saja yang sedang terjadi pada code diatas.
          <ol>
            <li>
              Kita mendeklarasikan sebuah variabel dan diberi nama <b>iuranBulanan</b>. Kata <b>const</b> diawal tersebut bertujuan untuk memberi tahu JavaScript bahwa kita akan mendeklarasikan variabel. Dan perlu kalian ketahui bahwa setiap penulisan variabel selalu tidak memiliki spasi antara kata-kata yang merangkainya. Itulah mengapa kita menggabungkan kata "iuran bulanan" menjadi 1 kata. Untuk membuatnya menjadi lebih mudah dibaca, kita menggunakan tata nama <b>camel casing</b>, yang artinya untuk kata kedua pada variabel tersebut menggunakan huruf kapital sehingga terlihat seperti punuk unta. Kamu bisa menggunakan tata nama lain yang kamu sukai tetapi pada workshop ini saya akan menggunakan camel casing berhubung sudah menjadi sebuah standar setiap orang untuk menggunakan camel casing pada JavaScript.
            </li>
            <li>
              Kamu pasti menyadari bahwa setiap code JavaScript selalu diakhiri dengan <b>; (semi colon)</b>. Tanda semi colon bertujuan untuk memberitahu JavaScript bahwa kita sudah selesai menulis code tersebut dalam line tersebut. Analogikanlah hal ini seperti tanda titik pada dunia pemrograman.
            </li>
            <li>
              Penamaan variabel dapat menggunakan kata apa saja, tetapi kamu tidak bisa menggunakan kata kunci JavaScript seperti <b>const, function, for dan masih banyak lagi</b>. Kamu perlu menggunakan kata-kata yang cocok untuk membuat variabel yang bagus sehingga kamu dapat mengerti tujuan pendeklarasian variabel tersebut. Hal ini berguna ketika code kamu sudah mencapai ribuan baris, dengan penamaan variabel yang bagus, kita bisa langsung tahu tujuan variabel tersebut dibuat. <b><em>Jadi ingatlah, pakai nama yang bagus untuk variabel.</em></b>
            </li>
            <li>
              Setelah baris pertama, sekarang saya memiliki variabel bernama iuranBulanan yang dapat saya pakai kapanpun saya mau dalam code ini. Variabel diibaratkan seperti sebuah kotak yang dapat kita isi barang-barang yang mungkin akan kita gunakan nanti. Kenapa variabel itu penting dalam programming? Mari coba kita analogikan seperti begini, jika kita mempunyai code yang berisi ribuan lines dan perlu menggunakan nilai dalam iuranBulanan untuk melakukan kalkulasi, jika kita ingin mengubah nilainya menjadi nilai lain, maka kita harus menggantinya secara manual pada setiap code yang menggunakan nilai tersebut. Lain halnya dengan adanya variabel, kita cukup mengubah nilai pada variabel tersebut, dan voilaa! Seluruh nilai tersebut akan secara otomatis berubah mengikuti nilai di dalam variabel iuranBulanan.
            </li>
            <li>
              Selanjutnya pada line berikutnya, kita akan melakukan kalkulasi iuranTahunan. Pada contoh diatas saya menggunakan tanda <b>*</b> yang merepresentasikan perkalian. Jika kita baca codenya, maka kita akan mengkalikan nilai iuranBulanan dengan 12 (dimana 12 merupakan jumlah bulan dalam 1 tahun), dimana nilai hasil perkalian tersebut akan kita simpan dalam variabel bernama iuranTahunan.
            </li>
            <li>
              <b>console.log(iuranTahunan);</b> bertujuan untuk menulis hasil dari nilai yang terdapat dalam iuranTahunan pada console JavaScript. JavaScript Console merupakan bagian dari developer tools. Jika kamu ingin mencarinya, kamu dapat melihat <a target="_blank" rel="noopener noreferrer" href="https://webmasters.stackexchange.com/questions/8525/how-do-i-open-the-javascript-console-in-different-browsers">artikel ini</a>. Kita akan mempelajari apa hal tersebut tetapi sekarang kamu dapat copy code kamu pada console dan hasilnya akan diperlihatkan kepada kamu.
            </li>
          </ol>
        </p>
        <p>
          Sekarang kita akan membuat code tersebut dapat berjalan dalam browser kita. Mari membuat 1 folder baru dan buatlah file <b>index.html</b> dengan isi seperti dibawah ini.
        </p>
        <CodeMirror
          value={`<!DOCTYPE html>\n<html lang="en">\n\t<head>\n\t\t<title>Eksperimen JS</title>\n\t</head>\n\t<body>\n\t\t<h1>Eksperimen JS di browser!</h1>\n\t\t<script src="./main.js"></script>\n\t</body>\n</html>`
          }
          options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          Jika kamu lihat ke code tersebut, kita menambahkan tag <b>script</b> yang memungkinkan kita untuk menhubungkan code JavaScript kita ke HTML kita. Sekarang, buatlah file baru pada folder yang sama dengan nama <b>main.js</b> (bisa dinamakan sesuka hati kamu asalkan nama di dalam tag serta disini harus sama). Kemudian taruhlah code diatas dalam file JavaScript tersebut.
        </p>
        <p>
          Saatnya kamu membuka file <b>HTML</b> kamu di browser, dan menuju ke console, maka kamu akan melihat angka 6000 yang ditampilkan. Selamat! Kamu sudah berhasil menulis code pertama kamu!
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Values and Types</h2>
        <p>
          Sebelumnya kita hanya menggunakan tipe nilai <b>number</b> dalam menulis code kita. Di JavaScript terdapat banyak tipe nilai yang dapat kamu gunakan. Berikut tipe-tipe yang tersedia dalam JavaScript.
          <ol>
            <li>
              string
            </li>
            <li>
              number
            </li>
            <li>
              boolean
            </li>
            <li>
              null and undefined
            </li>
            <li>
              object
            </li>
            <li>
              symbol (Versi ES6 keatas)
            </li>
          </ol>
        </p>
        <h2 className="fs-3 fw-bolder mt-5">String</h2>
        <p>
          Pada programming, kita murujuk apapun yang berkaitan dengan huruf dan tulisan sebagai <b>string</b>. Daripada kamu bingung karena kebanyakan teori, kita langsung saja melihat contohnya.
        </p>
        <CodeMirror
          value={`const myName="Randy Brilliant";\nconsole.log(myName);`
          }
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          Kamu dapat melihat saya menggunakan <b>" (double quote)</b> untuk melingkupi seluruh kata-kata yang ingin aku jadikan string. Pada JavaScript, kita juga dapat menggunakan <b>' (single quote)</b> dan <b>` (back tick)</b> sebagai demarcate strings. String akan selalu digunakan dalam pemrograman. kita memerlukannya untuk penyimpanan data seperti nama, produk, kota dan lain-lain.
        </p>
        <p>
          Kita juga bisa menggabungkan beberapa string menjadi satu yang biasa dikenal dengan <b>string concatenation</b>. Contohnya jika kamu ingin menyapa orang berdasarkan nama mereka masing-masing, kita dapat menulis codenya seperti ini.
        </p>
        <CodeMirror
          value={'const firstName="Randy";\nconst lastName="Brilliant";\n\nconst greetings = "Hello there " + firstName + " " + lastName + "! How are you today?";\nconst greetingsTemplate = `Hello there ${firstName} ${lastName}! How are you today?`;\n\nconsole.log(greetings);\nconsole.log(greetingsTemplate);'}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          Cara pertama merupakan cara yang kuno. Kita menggunakan operator <b>+</b> untuk memberitahu JavaScript menghubungkan 2 strings. Selain itu, kita juga perlu menaruh spasi diantara firstName dan lastName sehingga akan menjadi sangat membingungkan jika kalian menghubungkan banyak kalimat. Komputer hanya akan mengeksekusi code sesuai apa yang dituliskan. Jika kamu tidak menaruh spasi tersebut, maka komputer tidak akan menambahkannya juga.
        </p>
        <p>
          Pada line berikutnya merupakan cara baru dalam melakukan string concatenation. Pada tahun 2015, JavaScript mendapatkan pembaharuan besar-besaran sehingga banyak sekali hal-hal yang ditambahkan yang sangat membantu kita dalam mengembangkan sebuah website. Sekarang kita bisa menggunakan <b>` (back tick)</b> untuk melakukan template strings. Jika kamu melakukannya, maka segala hal yang berada di dalam <b>&#36;&#123;yourVariableHere&#125;</b> akan di output pada string tersebut. Ini terlihat keren bukan?
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Number</h2>
        <p>
          Mungkin beberapa diantara kamu yang berasal dari bahasa pemrograman lainnya akan membedakan number menjadi 2 tipe yaitu <b>integer</b>(seluruh angka seperti 1, 10000, 250000) dan <b>floats</b>(1.2, 3.56, 22.78), hal ini tidak berlaku di JavaScript. JavaScript menggabungkan kedua tipe tersebut menjadi 1 tipe bernama <b>number</b>. Yaa, sebuah angka adalah angka sarkasnya.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Boolean</h2>
        <p>
          Terkadang kita membutuhkan hal simpel seperti <b>true</b> or <b>false</b>. Kedua nilai tersebut adalah booleans. Seperti sebuah switch lampu yang kita gunakan untuk menghidupkannya. Lampu hanya akan mengalami salah satu dari 2 kejadian yaitu nyala/on/true atau padam/off/false. Kamu bisa membuatnya seperti <b>const hidupLampu = true;</b>, dan boolean akan sering kamu gunakan kapanpun.
        </p>
        <p>
          Untuk bagian object serta null/undefined akan kita bahas pada section selanjutnya, tetapi kalau untuk symbol tidak akan kita bahas pada workshop kali ini dikarenakan use cases yang masih sangat jarang karena sudah dapat dilakukan oleh tipe data lainnya.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Control Flow</h2>
        <p>
          Terkadang kita ingin memodifikasi cara jalan program kita, seperti kita hanya akan menjalankan code tersebut jika beberapa kondisi telah terpenuhi (true). Disinilah statement akan bermain peranan penting. Bayangkan bagaimana jika kita hendak melakukan hal di bawah ini.
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
          Pada contoh diatas, kondisi yang kita berikan pada <b>if statement</b> jika true, maka code pada block pertama akan dijalankan dan block kedua akan dilewatkan dan sebaliknya jika false. Coba jalan code tersebut pada file main.js diawal. Kamu juga tidak diharuskan untuk memiliki else block.
        </p>
        <CodeMirror
          value={'if (1 + 1 === 2) {\n\tconsole.log("Untung komputernya masih pandai menghitung.");\n} else {\n\tconsole.log("Wah, pasti hasilnya adalah 11 nih!");\n}'}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          Kamu juga bisa menaruh berbagai expression (singkatnya adalah membandingkan nilai di kiri dengan nilai di kanan) pada if statement tersebut. Pada kasus diatas, kita menanyakan apakah 1 + 1 adalah 2. Jika benar memang jawabannya adalah 2, maka seperti cara diatas, maka code pada block pertama yang akan dieksekusi. Jika ternyata salah (ahsiap), maka code pada block kedua yang akan dijalankan.
        </p>
        <p>
          Mari kita berdiskusi tentang tanda <b>===</b> sebentar. Mari kita jabarkan tanda <b>=</b> yang sudah pernah kita gunakan sebelumnya dan yang akan digunakan.
          <ol>
            <li>
              <b>=</b> - Tanda = pada JavaScript merupakan tanda <b>assignment</b>. Contoh kita menulis code <b>const apakahHariIniPanas = true;</b> yang dapat kamu suarakan menjadi "kita membuat variabel apakahHariIniPanas dan di assign dengan value true".
            </li>
            <li>
              <b>==</b> - Inilah tanda yang digunakan sebagai tanda perbandingan di if statement seperti contoh code diatas, <b>if (1 + 1 == 2)</b> jika disuarakan menjadi "apakah nilai 1 + 1 sama dengan 2". Tanda ini memiliki fungsi yang sama dengan tanda <b>===</b> tetapi memiliki 1 perbedaan yang sangat signifikan sehingga membuat keduanya menjadi beda.
            </li>
            <li>
              <b>===</b> - Memiliki fungsi yang sama dengan tanda <b>==</b> diatas, tetapi perbedaan yang membedakan keduanya adalah tanda <b>===</b> memberlakukan strict serta coercion dimana akan kita langsung demonstrasikan secara visual untuk melihat bedanya.
            </li>
            <li>
              <b>!==</b> - Memiliki arti kebalikan dari contoh diatas yaitu tidak sama dengan.
            </li>
            <li>
              <b>&lt;, &gt;, =, &lt;=, =&gt;</b> - Merupakan tanda perbandingan yang mungkin sudah kamu tahu sejak SD, dimana ada tanda lebih besar, lebih kecil, lebih besar sama dengan dan lebih kecil sama dengan.
            </li>
            <li>
              <b>&& dan ||</b> - tanda && merepresentasikan arti <b>dan</b> serta || merepresentasikan arti <b>atau</b>. Terkadang kita memiliki beberapa kondisi yang ingin kita tambahkan ke dalam if statement kita, disinilah fungsi kedua tanda tersebut akan berguna bagi kalian.
            </li>
          </ol>
        </p>
        <CodeMirror
          value={'const temanJomblo = 4;\nif (temanJomblo == 0) {\n\tconsole.log("Jomblo is the best!");\n} else if (temanJomblo >= 4) {\n\tconsole.log("Akhirnya sudah bisa mabar Valorant!");\n} else {\n\tconsole.log("Saatnya party!!");\n}'}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          Kamu juga boleh menambahkan else if jika memiliki lebih dari 2 kondisi yang berbeda.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Loops</h2>
        <p>
          Bagaimana jika ingin melakukan suatu hal secara berulang kali? Tentu saja bisa, kamu dapat melakukannya seperti contoh dibawah.
        </p>
        <CodeMirror
          value={'let temanJomblo = 0;\ntemanJomblo = temanJomblo + 1;\ntemanJomblo = temanJomblo + 1;\ntemanJomblo = temanJomblo + 1;\ntemanJomblo = temanJomblo + 1;\ntemanJomblo = temanJomblo + 1;\ntemanJomblo = temanJomblo + 1;\ntemanJomblo = temanJomblo + 1;\ntemanJomblo = temanJomblo + 1;\ntemanJomblo = temanJomblo + 1;\ntemanJomblo = temanJomblo + 1;\nconsole.log(temanJomblo);'}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          Yeah, kita berhasil melakukannya! Hmm.... tapi kok jadinya sangat menyusahkan yaa harus menuliskan code yang sama berulang kali. Cara ini sangat tidak dianjurkan dan kita akan mempelajari cara yang lebih elegan pada section kali ini. Tapi sebelumnya, ada 1 hal yang kita lewatkan, mari selidiki sama-sama.
        </p>
        <p>
          Pada contoh diatas, pendeklarasian variabel kita menggunakan <b>let</b> dan bukan <b>const</b>. Lah emangnya ada lagi yaa tentang variabel yang aku tidak tahu? Jadi pada variabel di JavaScript terdapat 3 cara pendeklarasiannya yaitu <b>var</b>, <b>let</b>, <b>const</b>. Mari lihat tabel berikut untuk perbedaan masing-masing variabel tersebut.
        </p>
        <img class="rounded mx-auto d-block img-fluid py-3" src="https://pbs.twimg.com/media/EeVw-DOXgAAMtKk.jpg" alt="JavaScript Variable Difference" />
        <p>
          Dari tabel tersebut, kita bisa menarik kesimpulan mengapa tadi kita menggunakan let daripada const, dikarenakan const tidak dapat di reassigned lagi. Secara umum, kita terserah dapat menggunakan diantara ketiga variabel tersebut. Tetapi saran aku cobalah ikutin kata-kata ini "princile of least power". Kita harus selalu menggunakan hal yang paling tidak kuat untuk menyelesaikan sebuah masalah. Hal dengan kekuatan yang minim selalu lebih simpel dan hal simpel sangat jarang terkena bug. Disini kita menggunakan let meskipun ada var yang bisa melakukan semua hal dikarenakan dengan let kita juga sudah bisa melakukan hal tersebut. Var juga merupakan cara lama yang digunakan pada JavaScript. Sehingga saya sarankan untuk menggunakan const dan let lebih sering saja.
        </p>
        <p>
          Ok, kita kembali lagi pada penyelesaian masalah diatas, mari kita mengeksplor berbagai cara melakukan perulangan dengan <b>looping</b>.
        </p>
        <CodeMirror
          value={'let temanJomblo = 0;\nwhile (temanJomblo < 10) {\n\ttemanJomblo = temanJomblo + 1;\n}\nconsole.log(temanJomblo);'}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          WOW, LOOK AT THAT! Dari puluhan baris menjadi tidak sampai 6 baris. Inilah <b>while loop</b>. Line code pertama pada while loop bekerja seperti if statement, selama condition di dalam statement tersebut masih <b>true</b>, maka dia akan terus menjalankan code block di dalamnya sampai statement di dalam menjadi <b>false</b>. Jika statement di dalam sudah false, maka while loop tersebut akan berhenti dan komputer akan lanjut menjalankan code selanjutnya.
        </p>
        <p>
          Mari kita persingkat code diatas lagi sehingga terlihat lebih elegan.
        </p>
        <CodeMirror
          value={'let temanJomblo = 0;\nwhile (temanJomblo < 10) {\n\ttemanJomblo += 1;\n}\n\ntemanJomblo = temanJomblo + 1;\ntemanJomblo += 1;\ntemanJomblo++;\n++temanJomblo;\n\nconsole.log(temanJomblo);'}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          Keempat code baru tersebut memiliki fungsi yang sama, yaitu menambahkan 1 pada nilai variabel temanJomblo. Pada line kedua, kamu bisa menaruh angka sesuka hati kamu dan dia akan menambahkan variabel tersebut dengan angka yang kamu taruh. (ada juga -= untuk menguranginya, *= untuk perkalian, /= untuk pembagian, **= untuk perpangkatan). 2 line terakhir akan menambah angkanya dengan 1 dan melakukan hal yang sama. Lebih disarankan untuk menggunakan tanda ++ setelah variabel karena sudah menjadi standar umum dalam JavaScript.
        </p>
        <p>
          Sekarang, mari kita lihat cara looping lain yang dapat melakukan hal yang sama dengan while loop.
        </p>
        <CodeMirror
          value={'let temanJomblo = 0;\nfor (let i = 0; i <= 10; i++) {\n\ttemanJomblo ++;\n}\nconsole.log(temanJomblo);'}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          Ini merupakan <b>for loop</b>. Di dalam tanda kurung tersebut, terdapat 3 statement dan kamu membutuhkan semuanya. Mengapa 3 statement? Karena akan lebih mudah kamu mengerti cara jalannya.
          <ol>
            <li>
              <b>let i = 0;</b> - Pendeklarasian variabel tersebut digunakan sebagai pengontrol loop kamu. Nama variabel bisa menggunakan apapun, tetapi kebanyakan orang menggunakan i saja. Disini kita memulai nilai variabel kita dari 0.
            </li>
            <li>
              <b>i &lt;= 10;</b> - Ini bekerja hampir seperti while loop. Disini kita memberi statement bahwa loop ini akan berjalan hingga nilai kurang dari sama dengan 10 dan akan menghentikan eksekusi codenya setelah kondisinya terpenuhi.
            </li>
            <li>
              <b>i++</b> - Jika kita pelajari diatas tadi, tujuan tanda ++ adalah untuk menambahkan nilai tersebut dengan 1. Inilah yang digunakan sehingga kita dapat menambah nilai variabelnya hingga memenuhi kondisi diatas.
            </li>
          </ol>
        </p>
        <p>
          Satu catatan penting dalam coding, kita selalu memulai hitungan angka dari angka 0, berbeda dengan cara hitung angka pada kehidupan sehari-hari yaitu dimulai dari <b>1, 2, 3, 4, 5</b>. Dalam pemrograman, kita menghitung mulai dari <b>0, 1, 2, 3, 4</b>. Bisa kita lihat bahwa pada hitungan kelima, memiliki nilai 4. Kita menghitungnya berdasarkan indeksnya.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Infinite Loop</h2>
        <p>
          Sesuai dengan namanya, yaitu infinite (tidak terbatas). Terkadang kita mungkin bisa menulis code untuk melakukan looping, tetapi karena kondisi di dalamnya selalu true, maka code tersebut akan berjalan tersebut hingga komputer kamu pada akhirnya rusak. Ini dikenal dengan <b>Infinite Loop</b>. Contohnya (resiko tanggung sendiri jika hank :)
        </p>
        <CodeMirror
          value={'let temanJomblo = 1;\nwhile (temanJomblo > 0) {\n\ttemanJomblo ++;\n}\nconsole.log(temanJomblo);'}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        />
        <p>
          Nilai awal dari temanJomblo adalah 1, dan ketika kita memasuki while loop tersebut, dikarenakan kondisinya true terus dimana temanJomblo memiliki nilai 1, maka while loop tersebut akan terus berjalan. Hati-hati terhadap code seperti ini. Catastrophe!
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Assessment 03</h2>
        <p>
          Dengan menggunakan file sebelumnya, kamu diharapkan dapat menyelesaikan soal dibawah.
        </p>
        <p>Buatlah program dibawah yang dapat melakukan hal ini.</p>
        <ol>
          <li>
            Deklarasikan 2 variabel, yaitu karakter dan totalPerulangan.
          </li>
          <li>
            Dengan menggunakan salah satu loop diatas, ulangi kata-kata tersebut sebanyak 5x.
          </li>
          <li>
            menampilkan jawaban tersebut dengan menggunakan console.log.
          </li>
        </ol>
        <div className="d-flex justify-content-between mt-5">
          <Link type="button" class="btn btn-primary btn-lg" to="/assessment-project-css">
            <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            Assessment Project: CSS
          </Link>
          <Link type="button" class="btn btn-primary btn-lg" to="/function-scope">
            Function and Scope
            <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default IntroJs


