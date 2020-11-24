import './App.css';
import video from './Videos/Post.mp4'

function App() {
  return (
    <div className="App">
      <video controls width="100%" >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
