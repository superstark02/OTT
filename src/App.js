import './App.css';
import Home from './Pages/Home';
import { theme } from './Theme/Theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Display from './Pages/Display';
import FileUpload from './Pages/FileUpload';
import PlayScreen from './Pages/PlayScreen';

function App() {
  return (
    <div style={{ backgroundColor: theme.palette.primary.dark, margin: "0px", color: theme.palette.primary.light, minHeight:"100vh" }} >
      <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/display/:industry/:platform/:genre/:id' component={Display} />
            <Route exact path='/play/:industry/:platform/:genre/:id/:season/:episode' component={PlayScreen} />

            <Route exact path='/fileUpload' component={FileUpload} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
