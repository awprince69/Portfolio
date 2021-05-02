import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Contact from './Component/Contact/Contact';
import Resume from './Component/Resume/Resume';
import Projects from './Component/Projects/Projects';
import Blog from './Component/Blog/Blog';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route  path='/home'>
          <Home></Home>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/resume'>
          <Resume></Resume>
        </Route>
        <Route path='/projects'>
          <Projects></Projects>
        </Route>
        <Route path='/blogs'>
          <Blog></Blog>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
