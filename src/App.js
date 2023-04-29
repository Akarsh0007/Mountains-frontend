
import './App.css';
import BottomNav from './components/BottomNav';
import Climb from './components/Climb';
import Footer from './components/Footer';
import Header from './components/Header';
import History from './components/History';
import Mountain from './components/Mountain';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
     <Router>
    <div className="App">
      <Header/>
        <BottomNav />
        <History />
        <Climb />
        <Mountain />
        <Footer/>
      </div>
      </Router>
  );
}

export default App;
