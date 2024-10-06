import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <HomePage></HomePage>
    <Footer></Footer>
  </div>
  );
}

export default App;
