import './NosProjets.css'
import Item from "./Items";
// import { v4 as uuidv4 } from "uuid";


export default function NosProjets() {
  return (
    <>
      <div id="ourprojects">
          <h1>NOS PROJETS</h1>
          <div className="row">
            <Item/>
        </div>
      </div>
    </>
  );
}
