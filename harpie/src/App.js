import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NosProjets from './Components/Nos_Projets/NosProjets';
import NavBar from './Components/Main/1_NavBar/NavBar';
import Footer from './Components/Main/8_Footer/Footer';
import Projets from './Components/Main/4_Projets/Projets';
import NosHistoires from './Components/Main/6_NosHistoires/NosHistoires';
import Newsletters from './Components/Main/7_Newsletters/Newsletters';
import LeSaviezVous from './Components/Main/5_LeSaviezVous/LeSaviezVous';
import Home from './Components/Main/2_Home/Home';
import TakeAction from './Components/Main/3_TakeAction/TakeAction';


function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <NosProjets/> */}
      <Home/>
      <TakeAction/>
      <Projets/>
      <LeSaviezVous/>
      <NosHistoires/>
      <Newsletters/>
      <Footer/>
    </div>
  );
}

export default App;
