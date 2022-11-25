import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Projets from './Components/Main/4_Projets/Projets';
import NosHistoires from './Components/Main/6_NosHistoires/NosHistoires';
import Newsletters from './Components/Main/7_Newsletters/Newsletters';
import LeSaviezVous from './Components/Main/5_LeSaviezVous/LeSaviezVous';
import Home from './Components/Main/2_Home/Home';
import TakeAction from './Components/Main/3_TakeAction/TakeAction';



function App() {
  return (
    <div className="App">
      <Home/>
      <TakeAction/>
      <Projets/>
      <LeSaviezVous/>
      <NosHistoires/>
      <Newsletters/>
    </div>
  );
}

export default App;
