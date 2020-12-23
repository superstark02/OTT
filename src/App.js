import './App.css';
import Home from './Pages/Home';
import { theme } from './Theme/Theme';
import { BrowserRouter as Router} from 'react-router-dom';
import { Navigation, Route, glide } from "react-tiger-transition";
import Display from './Pages/Display';
import FileUpload from './Pages/FileUpload';
import PlayScreen from './Pages/PlayScreen';
import SearchPage from './Pages/SearchPage';
import About from './Pages/About';
import Help from './Pages/Help';
import Feedback from './Pages/Feedback';
import Category from './Pages/Categories/Category';
import "react-tiger-transition/styles/main.min.css";
import Discover from './Pages/Categories/Discover';
import Anime from './Pages/Categories/Anime';
import Series from './Pages/Categories/Series';
import ShortFilms from './Pages/Categories/ShortFilms';
import Signin from './Pages/Signin';
import Temp from './Pages/Temp';

glide({
  name: 'glide-left'
});

glide({
  name: 'glide-right',
  direction: 'right'
});

const screenStyle = {
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.light
};

document.getElementById("root").style.height = "100vh";

function App() {
  return (

    <Router>
      <Navigation>
        <Route exact path='/'
          screen // shorthand to wrap children with screen
          screenProps={{
            style: {
              ...screenStyle
            }
          }}>
          <Home />
        </Route>

        <Route exact path='/display/:id'
          screen // shorthand to wrap children with screen path='/display/:industry/:platform/:genre/:id
          screenProps={{
            style: {
              ...screenStyle
            }
          }} >
          <Display />
        </Route>

        <Route exact path='/discover'
          screen // shorthand to wrap children with screen path='/display/:industry/:platform/:genre/:id
          screenProps={{
            style: {
              ...screenStyle
            }
          }} >
          <Discover />
        </Route>

        <Route exact path='/anime'
          screen // shorthand to wrap children with screen path='/display/:industry/:platform/:genre/:id
          screenProps={{
            style: {
              ...screenStyle
            }
          }} >
          <Anime />
        </Route>

        <Route exact path='/series'
          screen // shorthand to wrap children with screen path='/display/:industry/:platform/:genre/:id
          screenProps={{
            style: {
              ...screenStyle
            }
          }} >
          <Series />
        </Route>

        <Route exact path='/short-films'
          screen // shorthand to wrap children with screen path='/display/:industry/:platform/:genre/:id
          screenProps={{
            style: {
              ...screenStyle
            }
          }} >
          <ShortFilms />
        </Route>

        <Route exact path='/category/:id'
          screen // shorthand to wrap children with screen path='/display/:industry/:platform/:genre/:id
          screenProps={{
            style: {
              ...screenStyle
            }
          }} >
          <Category />
        </Route>

        <Route exact path='/about'
          screen // shorthand to wrap children with screen path='/display/:industry/:platform/:genre/:id
          screenProps={{
            style: {
              ...screenStyle
            }
          }} >
          <About />
        </Route>

        <Route exact path='/play/:id/:season/:episode'
          screen // shorthand to wrap children with screen path='/display/:industry/:platform/:genre/:id
          screenProps={{
            style: {
              ...screenStyle
            }
          }} >
          <PlayScreen />
        </Route>

        <Route exact path='/fileUpload'
          screen // shorthand to wrap children with screen path='/display/:industry/:platform/:genre/:id
          screenProps={{
            style: {
              ...screenStyle
            }
          }} >
          <FileUpload />
        </Route>

        <Route exact path='/search'
          screen // shorthand to wrap children with screen path='/display/:industry/:platform/:genre/:id
          screenProps={{
            style: {
              ...screenStyle
            }
          }} >
          <SearchPage />
        </Route>

        <Route exact path='/help'
          screen // shorthand to wrap children with screen path='/display/:industry/:platform/:genre/:id
          screenProps={{
            style: {
              ...screenStyle
            }
          }} >
          <Help />
        </Route>

        <Route exact path='/feedback'
          screen // shorthand to wrap children with screen path='/display/:industry/:platform/:genre/:id
          screenProps={{
            style: {
              ...screenStyle
            }
          }} >
          <Feedback />
        </Route>

        <Route exact path='/sign-in'
          screen // shorthand to wrap children with screen path='/display/:industry/:platform/:genre/:id
          screenProps={{
            style: {
              ...screenStyle
            }
          }} >
          <Signin />
        </Route>

        <Route exact path='/temp'
          screen // shorthand to wrap children with screen path='/display/:industry/:platform/:genre/:id
          screenProps={{
            style: {
              ...screenStyle
            }
          }} >
          <Temp />
        </Route>

      </Navigation>
    </Router>
  );
}

export default App;
