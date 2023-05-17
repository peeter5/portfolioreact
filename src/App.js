import Header from './components/Header';
import Profile from './pages/Profile';
import './App.css';
import logo from './logo.svg'

function App() {
  return (
    <div className="App">
     <Header />
     <Header logo = {logo} />
     <Profile userName = "peeter5" />
    </div>
  );
}

export default App;
