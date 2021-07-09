import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Intro from './pages/Intro';
import Overview from './pages/Overview';
import Weapon from './pages/Weapon';

import Html from './pages/HTML/Html';
import HtmlNextSteps from './pages/HTML/HtmlNextSteps';
import MetaHtml from './pages/HTML/MetaHtml';
import ProjectHtml from './pages/HTML/ProjectHtml';

import Css from './pages/CSS/Css';
import CssIntegration from './pages/CSS/CssIntegration';
import CssSelector from './pages/CSS/CssSelector';
import CssLayout from './pages/CSS/CssLayout';
import ProjectCss from './pages/CSS/ProjectCss';

import IntroJs from './pages/JS/IntroJs';
import FunctionScope from './pages/JS/FunctionScope';
import ObjectsArrays from './pages/JS/ObjectsArrays';
import JsDom from './pages/JS/JsDom';
import ProjectJs from './pages/JS/ProjectJs';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/introduction" component={Intro} />
        <Route path="/overview" component={Overview} />
        <Route path="/your-weapons" component={Weapon} />
        <Route path="/html" component={Html} />
        <Route path="/html-next-steps" component={HtmlNextSteps} />
        <Route path="/meta-html" component={MetaHtml} />
        <Route path="/assessment-project-html" component={ProjectHtml} />
        <Route path="/css" component={Css} />
        <Route path="/css-integration-with-html" component={CssIntegration} />
        <Route path="/css-selector-and-pseudo-selector" component={CssSelector} />
        <Route path="/css-layout" component={CssLayout} />
        <Route path="/assessment-project-css" component={ProjectCss} />
        <Route path="/intro-to-js" component={IntroJs} />
        <Route path="/function-scope" component={FunctionScope} />
        <Route path="/objects-arrays" component={ObjectsArrays} />
        <Route path="/js-dom" component={JsDom} />
        <Route path="/assessment-project-javascript" component={ProjectJs} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
