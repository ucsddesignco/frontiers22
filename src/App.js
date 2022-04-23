import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Landing from './components/Landing';
import Skeleton from './components/Skeleton';

function App() {
  return (
    <div className="App">
      <Landing />
      <Navbar />
    </div>
  );
}

export default App;
