import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Introduction', link: 'introduction'},
  { name: 'Overview', link: 'overview'},
  { name: 'Your Weapons', link: 'your-weapons'},
  { name: 'HTML (Hypertext Markup Language)', link: 'html'},
  { name: 'HTML Next Steps', link: 'html-next-steps'},
  { name: 'HTML Meta Tag', link: 'meta-html'},
  { name: 'Assessment Project: HTML', link: 'assessment-project-html'},
  { name: 'CSS (Cascading Style Sheet)', link: 'css'},
  { name: 'CSS Integration with HTML', link: 'css-integration-with-html'},
  { name: 'CSS Selector and Pseudo Selector', link: 'css-selector-and-pseudo-selector'},
  { name: 'CSS Layout', link: 'css-layout'},
  { name: 'Assessment Project: CSS', link: 'assessment-project-css'},
  { name: 'Intro to JS (JavaScript)', link: 'intro-to-js'},
  { name: 'Function and Scope', link: 'function-scope'},
  { name: 'Objects and Arrays', link: 'objects-arrays'},
  { name: 'The DOM (Document Object Model)', link: 'js-dom'},
  { name: 'Assessment Project: JavaScript', link: 'assessment-project-javascript'},
  { name: 'Final Assessment Project: HTML, CSS and JS', link: 'final-assessment-project'},
  { name: 'Git', link: 'git'},
  { name: 'Deploy Your Website', link: 'deploy-website'},
  { name: 'Final Thoughts', link: 'final'},
]

const Home = () => {
  return (
    <main className="container" id="home-page">
      <div className="bg-primary p-5 rounded text-white mt-5 text-center">
        <h1 className="fs-1 fw-bolder">Intro to Web Development</h1>
        <p className="lead fst-italic fw-bold">
          Prepared by : <a href="https://www.instagram.com/RandyBrilliant" target="_blank" rel="noreferrer noopener" className="text-white">Randy Brilliant</a>
        </p>
      </div>

      <div className="bg-white p-5 rounded mt-5">
        <h2 className="fs-3 fw-bolder text-center">Table of Content</h2>
        <ol class="list-group list-group-numbered list-group-flush mt-5">
          {navigation.map((nav) => (
            <li class="list-group-item fs-5">
              <Link to={nav.link}>{nav.name}</Link>
            </li>
          ))}
        </ol>
      </div>
    </main>
  )
}

export default Home
