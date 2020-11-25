import './App.css';
import { theme } from './Theme/Theme';
import MyAppBar from './Components/MyAppBar'


function App() {
  return (
    <div style={{backgroundColor:theme.palette.primary.dark, margin:"0px", height:"100vh", color:theme.palette.primary.light}} >
        <MyAppBar/>
    </div>
  );
}

export default App;
