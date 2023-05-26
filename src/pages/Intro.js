import Me from '../assets/img/me.jpg';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <main id="introduction" className="mt-5">
      <section className="container-fluid p-5 bg-white shadow">
        <h1 className="fs-1 fw-bolder">Introduction</h1>
        <p>
          Pada saat saya membuat dokumentasi ini, saya sangat senang karena akhirnya apa yang kupelajari selama ini dapat berguna untuk kamu yang membaca. Pada buku ini, saya akan mengajarkan kalian dari seseorang yang selalu hanya bisa terpana melihat kerennya website menjadi seseorang yang ketika melihat website akan berpikiran, <q>Oh, ini mah masih ada salahnya, saya bisa membuatnya menjadi sempurna!</q>.
        </p>
        <p>
          Saya berasumsi bahwa yang melihat dokumentasi ini ataupun mengikuti pelajaran saya sama sekali tidak tahu cara membuat website, atau hanya sekedar untuk menambah wawasan kalian di dalam pengembangan website. Bagi kalian yang memang tidak memiliki latar belakang di bidang komputer, janganlah takut jika kamu merasa tidak bisa mengikuti pelajaran ini, karena saya selalu berpikiran bahwa manusia pada masa depan tidak akan dapat lari dari yang namanya kemajuan teknologi. Jadi mau tidak mau kalian juga harus mulai belajar dari sekarang selagi ada kesempatan untuk mencuri head start dari orang lain.
        </p>
        <p>
          Syarat untuk mengikuti pelajaran ini sangat simpel, kamu hanya harus tahu cara memakai internet untuk browsing, menggunakan komputer anda, dan pastinya bisa mengetik dengan keyboard dan menggunakan mouse.
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Susah gak belajar coding?</h2>
        <p>
          Banyak orang selalu berasumsi bahwa program itu hanya bisa dibuat oleh orang yang sangat jenius, memiliki IQ seperti <em>Elon Musk</em> atau <em>Mark Zuckenberg</em>, bahkan orang yang mengambil kelas IPA di sekolah kamu, tetapi tidak demikian. Kamu tidak harus menjadi orang yang pandai matematika untuk coding. Banyak juga orang-orang yang notabene tidak memiliki background seperti yang saya sebutkan diatas seperti artis, pengacara, arkeolog dan lainnya juga bisa meraup sukses dengan belajar coding. Jangan membiarkan persepsi liar tersebut menghalang kamu untuk belajar coding. Satu-satunya hal yang mesti kamu ketahui adalah coding itu tidak susah, tetapi proses mempelajari bagaimana cara coding itu yang sangat susah. Ini sama halnya dengan ketika kamu mempelajari bahasa yang baru, dimana kamu akan kesulitan untuk mempelajari dikarenakan bahasa sehari-harimu itu sangat berbeda dengan bahasa yang akan kamu pelajari. Kamu pasti akan merasa frustasi, bahkan memiliki keinginan untuk keluar. 
        </p>
        <p>
          <strong>“PERSISTENCE!”</strong>, salah satu bahasa inggris yang sangat saya kagumi karena memiliki arti <strong>“KEGIGIHAN”</strong>, kamu harus memiliki kegigihan dan tekad yang kuat, ketika semuanya terasa sangat buruk, istirahatlah sejenak hingga pemikiran kamu sudah tidak dipenuhi beban, baru kembali untuk mempelajarinya.
        </p>
        <p>
          Jangan pernah takut untuk <q>Bertanya kepada Om Google</q>. Perlakukan Google sebagai pendamping terdekatmu, dimana setiap masalah yang kamu alami, ceritakanlah kepada Google sehingga dia dapat memberikan kamu jawaban atas beban hidup kamu. Setiap programmer yang kutemui, bahkan aku sendiri dan programmer top seperti <em>Guido van Rossum</em> (Pencipta Bahasa Python) selalu memanfaatkan Google untuk bertanya mengenai masalah mereka. Ketahuilah bahwa itu bukanlah menyontek, tetapi merupakan salah satu teknik kamu untuk menuju kesuksesan. Terdapat informasi yang sangat berlimpah diluar sana yang tidak mungkin dapat kamu hafal, pergi ke StackOverFlow untuk bertanya pertanyaan bodoh, lakukan terus-menerus sampai kamu menjadi seseorang yang ahli di bidangnya.
        </p>
        <p>
          Selalu ingatlah, bahwa belajar coding itu sangat susah dan membutuhkan kerja keras yang ekstra. Percayalah kepada kata-kataku, ketika pekerjaan lainnya diluar sana hanya membutuhkan skill yang biasa-biasa saja dengan gaji yang biasa-biasa saja, saya menjamin kamu akan segera mendapatkan pekerjaan impian dengan gaji yang berlimpah. <strong>Happy Coding!</strong>
        </p>
        <h2 className="fs-3 fw-bolder mt-5">Kenalan Yuk!</h2>
        <img src={Me} className="rounded mx-auto d-block img-fluid py-3" width="500" alt="Randy Brilliant" />
        <p>
          Nama saya adalah Randy Brilliant. Salam kenal. Saat ini, saya merupakan Programmer pada salah satu kampus di Medan bernama IB IT&B atau biasa kerap dikenal dengan <em>IT&B Campus</em>. Sebelumnya, saya dipercayakan untuk menjadi Education Consultant dan Computer Lab Assistant dimana saya diberi tanggung jawab untuk memberi pencerahan kepada calon mahasiswa seperti kalian untuk mengetahui lebih jauh tentang IT&B Campus dan tujuan kalian kedepannya. Saya juga bertanggung jawab atas segala hal berbau IT disana. Pada malam hari, saya bekerja sebagai freelancer Graphic Designer dan Web Developer dengan telah bekerja untuk beberapa klien terkenal seperti Grab, Offle, Family Group, Print&Pack dan banyak lagi.
        </p>
        <p>
          Saya merupakan seorang optimistis, dan sangat menyukai hal-hal berbau teknologi. Saya selalu berharap dapat membantu orang disekitar dengan skill yang saya miliki dan sangat senang jika dapat membantu orang-orang menyelesaikan masalah.
        </p>
        <div className="d-flex justify-content-between">
          <Link type="button" className="btn btn-primary btn-lg" to="/">
            <svg className="me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            Home
          </Link>
          <Link type="button" className="btn btn-primary btn-lg" to="/overview">
            Overview
            <svg className="ms-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Intro
