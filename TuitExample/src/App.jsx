import logo from './logo.svg';
import './App.css';
import Header from './componentss/Header'
import Navbar from './componentss/Navbar'
import UnderNav from './componentss/UnderNav';
import Main from './componentss/Main';
import UnderMain from './componentss/UnderMain';
import Footer from './componentss/Footer';


function App() {
  return (
    <div className="App ">
     <Header/>
     <Navbar/>
     <UnderNav/>
     <Main/>
     <UnderMain/>
     <Footer/>
    </div>
  );
}

export default App;
