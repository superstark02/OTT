import './App.css';
import { theme } from './Theme/Theme';
import MyAppBar from './Components/MyAppBar'
import Carousel from './Components/Carousel';
import Categories from './Components/Categories';
import MyList from './Components/MyList';


function App() {
  return (
    <div style={{backgroundColor:theme.palette.primary.dark, margin:"0px", height:"100vh", color:theme.palette.primary.light}} >
        <MyAppBar/>
        <Carousel/>
        <Categories/>
        <MyList/>
    </div>
  );
}

export default App;
