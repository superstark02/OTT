import './App.css';
import Home from './Pages/Home';
import { theme } from './Theme/Theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Display from './Pages/Display';
import FileUpload from './Pages/FileUpload';
import PlayScreen from './Pages/PlayScreen';
import SearchPage from './Pages/SearchPage';
import About from './Pages/About';
import Help from './Pages/Help';
import Feedback from './Pages/Feedback';

function App() {
  return (
    <div style={{ backgroundColor: theme.palette.primary.dark, margin: "0px", color: theme.palette.primary.light, minHeight:"100vh" }} >
      <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/display/:industry/:platform/:genre/:id' component={Display} />
            <Route exact path='/play/:industry/:platform/:genre/:id/:season/:episode' component={PlayScreen} />

            <Route exact path='/fileUpload' component={FileUpload} />
            <Route exact path='/search' component={SearchPage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/help' component={Help} />
            <Route exact path='/feedback' component={Feedback} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
