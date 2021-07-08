import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Overview from './pages/Overview';
import Weapon from './pages/Weapon';
import Html from './pages/HTML/Html';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/introduction" component={Intro} />
        <Route path="/overview" component={Overview} />
        <Route path="/your-weapons" component={Weapon} />
        <Route path="/html" component={Html} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
