import './App.css';
import Home from './Pages/Home';
import { theme } from './Theme/Theme';

function App() {
  return (
    <div style={{ backgroundColor: theme.palette.primary.dark, margin: "0px", color: theme.palette.primary.light }} >
      <Home />
    </div>
  );
}

export default App;
