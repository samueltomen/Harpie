import { useState } from "react";
import './NosProjets.css'
import Item from "./Items";
import { v4 as uuidv4 } from "uuid";
import imageCard1 from "../../assets/image_card_1r.png";
import imageCard2 from "../../assets/image_card_2r.png";
import imageCard3 from "../../assets/image_card_3r.png";


export default function NosProjets() {
  const [dataArr, setDatArr] = useState([
    {
      text: "Nous sommes fière de vous présenter la nouvelle école construite en Ouganda pouvant accueillir 200 élèves",
      id: uuidv4(),
      titre: "Construction d'une nouvelle ecole",
      maj: "Mis à jour il y a 5 mins",
      image: imageCard1,
      date: "Novembre 12, 2022",
    },
    {
      text: "Nous sommes fière de vous partagez la campagne de distribution des fournitures scolaire",
      id: uuidv4(),
      titre: "Construction d'une nouvelle ecole",
      maj: "Mis à jour il y a 5 mins",
      image: imageCard2,
      date: "Novembre 12,2022",
    },
    {
      text: "Nous sommes fière de vous partagez la campagne de distribution des fournitures scolaire",
      id: uuidv4(),
      titre: "Construction d'une nouvelle ecole",
      maj: "Mis à jour il y a 5 mins",
      image: imageCard3,
      date: "Novembre 12,2022",
    },
    {
      text: "Nous sommes fière de vous partagez la campagne de distribution des fournitures scolaire",
      id: uuidv4(),
      titre: "Construction d'une nouvelle ecole",
      maj: "Mis à jour il y a 5 mins",
      image: imageCard1,
      date: "Novembre 12,2022",
    },
  ]);

  return (
    <>
      <div id="ourprojects">
          <h1>NOS PROJETS</h1>
          <div className="row">
          {dataArr.map((item) => {
            return (
              <Item
                text={item.text}
                titre={item.titre}
                image={item.image}
                key={item.id}
                id={item.id}
                date={item.date}
                maj={item.maj}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
