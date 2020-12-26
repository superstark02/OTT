import './App.css';
import Home from './Pages/Home';
import { theme } from './Theme/Theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Display from './Pages/Display';
import PlayScreen from './Pages/PlayScreen';
import SearchPage from './Pages/SearchPage';
import About from './Pages/About';
import Help from './Pages/Help';
import Feedback from './Pages/Feedback';
import Category from './Pages/Categories/Category';
import Discover from './Pages/Categories/Discover';
import Anime from './Pages/Categories/Anime';
import Series from './Pages/Categories/Series';
import ShortFilms from './Pages/Categories/ShortFilms';
import Signin from './Pages/Signin';
import Bollywood from './Pages/Categories/Bollywood';

const screenStyle = {
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.light,
  minHeight: '100vh'
};

document.getElementById("root").style.height = "100vh";

function App() {
  return (
    <div style={screenStyle} >
      <Router >
        <Switch>
          <Route exact path='/' component={Home} />

          <Route exact path='/display/:id' component={Display} />

          <Route exact path='/discover' component={Discover} />

          <Route exact path='/anime' component={Anime} />

          <Route exact path='/series' component={Series} />

          <Route exact path='/short-films' component={ShortFilms} />

          <Route exact path='/category/Hollywood' component={Category} />
          <Route exact path='/category/Bollywood' component={Bollywood} />

          <Route exact path='/about' component={About} />

          <Route exact path='/play/:id/:season/:episode' component={PlayScreen} />

          <Route exact path='/search' component={SearchPage} />

          <Route exact path='/help' component={Help} />

          <Route exact path='/feedback' component={Feedback} />

          <Route exact path='/sign-in' component={Signin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
