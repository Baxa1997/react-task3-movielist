import './App.css';
import Header from './components/Header/header';
import Main from './components/Main/main';
import Sidebar from './components/Sidebar/sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="border-line"></div>
      <div className="section">
        <Main/>
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
