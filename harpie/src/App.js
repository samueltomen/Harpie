import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NosProjets from './Components/Nos_Projets/NosProjets';
import NavBar from './Components/Main/1_NavBar/NavBar';
import Footer from './Components/Main/8_Footer/Footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <NosProjets/>
      <Footer/>
    </div>
  );
}

export default App;
