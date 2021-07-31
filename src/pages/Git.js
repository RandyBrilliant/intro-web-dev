import { Link } from 'react-router-dom';

const Git = () => {
  return (
    <h1>This is Git</h1>
    // <main id="git" className="mt-5">
    //   <section className="container-fluid p-5 bg-white shadow">
    //     <h1 className="fs-1 fw-bolder">Git and Bash</h1>
    //     <p>
    //       Coding itu tidak mesti selalu dilakukan oleh 1 orang. Seringkali kamu pasti akan berkolaborasi dengan orang lain untuk coding, mulai dari bagian back-end, web design, hingga front-end yang akan berkontribusi untuk membuat sebuah website yang kompleks. Bisa kamu bayangkan, kemungkinan terbesar yang dapat terjadi adalah kamu dan teman kamu dapat bentrok ketika hendak melakukan project gabungan tersebut.
    //     </p>
    //     <p>
    //       Git merupakan distributed source control management tool. Kata-kata tersebut jelas terlihat keren tetapi jika kita ringkas secara sederhana berarti cara paling mudah untuk berbagi code dan mengerjakannya bersama-sama dengan tim yang besar. Git juga sangat berguna untuk melakukan backup code kamu dari komputermu dan kamu dapat mengaksesnya dari manapun secara online.
    //     </p>
    //     <p>
    //       Kita akan segera berinteraksi dengan git melalui terminal atau command prompt di komputer kita. Jika kamu merupakan pengguna Windows, kamu dapat download <a href="https://git-scm.com/downloads" target="_blank" rel="noreferrer noopener">Git For Windows</a>. Dengan package tersebut, kamu dapat menggunakan git pada windows kamu. Jika kamu menggunakan Mac, kamu tidak perlu mendownlaodnya lagi karena secara default git telah tersedia pada terminal di Mac.
    //     </p>
    //     <h2 className="fs-3 fw-bolder mt-5">bash</h2>
    //     <p>
    //       Open your terminal, let's get comfortable with navigating in bash. In bash, you're just navigating around the folders in your computer. You know how you use the File Finder (or whatever your operating system has) to find files and you click in and out-of folders? It's the same for bash, we're just using text commands to do it now.
    //     </p>
    //     <h2 className="fs-3 fw-bolder mt-5">bash</h2>
    //     <p>
    //       Now type ls. ls stands for "list". It lists everything in the directory. It'll show you a bunch of files and folders you can open or run. ls is like asking "what's here?" Try typing ls -l. You'll notice the same files and folders are being outputted but it's formatted in a different way. -l is what's called a flag. It's something that's passed to the ls program and it modifies what it does. In this case, -l means give us the long output. Try typing ls -lah. This will show you even more files because -a means show all files, including hidden files (which are the ones that start with a .) and it will show you the file sizes in more readable sizes because of -h.

    //       If you forget what these means, explainshell.com is an extremely helpful site.
    //     </p>
    //     <h2 className="fs-3 fw-bolder mt-5">bash</h2>
    //     <p>
    //       Open your terminal, let's get comfortable with navigating in bash. In bash, you're just navigating around the folders in your computer. You know how you use the File Finder (or whatever your operating system has) to find files and you click in and out-of folders? It's the same for bash, we're just using text commands to do it now.
    //     </p>
    //     <div className="d-flex justify-content-between mt-5">
    //       <Link type="button" class="btn btn-primary btn-lg" to="/final-assessment-project">
    //         <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-left" viewBox="0 0 16 16">
    //           <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
    //         </svg>
    //         Final Assessment Project: HTML, CSS and JS
    //       </Link>
    //       <Link type="button" class="btn btn-primary btn-lg" to="/deploy-website">
    //         Deploy Your Website
    //         <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrow-right" viewBox="0 0 16 16">
    //           <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
    //         </svg>
    //       </Link>
    //     </div>
    //   </section>
    // </main>
  )
}

export default Git



