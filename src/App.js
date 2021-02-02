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
import Categories from './Pages/Categories';
import ShowCategory from './Pages/ShowCategory';
import WatchLater from './Pages/WatchLater';
import Plans from './Pages/MyPlans';
import CrossPlatform from './Pages/CrossPlatform';
import Temp from './Pages/Temp';
import Wrapper from './Pages/Wrapper';

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
          <Route exact path='/' component={Wrapper} />

          <Route exact path='/display/:id' component={Display} />
          <Route exact path='/play/:id/:season/:episode' component={PlayScreen} />

          <Route exact path='/discover' component={Discover} />
          <Route exact path='/cross-platform' component={CrossPlatform} />
          <Route exact path='/anime' component={Anime} />
          <Route exact path='/series' component={Series} />
          <Route exact path='/short-films' component={ShortFilms} />

          <Route exact path='/category' component={Categories} />
          <Route exact path='/category/Hollywood' component={Category} />
          <Route exact path='/category/Bollywood' component={Bollywood} />
          <Route exact path='/category/:id' component={ShowCategory} />

          
          <Route exact path='/search' component={SearchPage} />

          <Route exact path='/help' component={Help} />
          <Route exact path='/about' component={About} />
          <Route exact path='/feedback' component={Feedback} />
          <Route exact path='/sign-in' component={Signin} />
          <Route exact path='/watch-later' component={WatchLater} />
          <Route exact path='/plans' component={Plans} />
          <Route exact path='/temp' component={Temp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
