import { useState } from "react";
import Item from "./Items";
import { v4 as uuidv4 } from "uuid";



export default function NosProjets(){
    const [dataArr, setDatArr] = useState([
        {text: "Nous sommes fière de vous présenter la nouvelle école construite en Ouganda pouvant accueillir 200 élèves", id: uuidv4(), titre: "construction d'une nouvelle ecole", maj: "Mis à jour il y a 5 mins", image: "./image/image_card_1r.png",date:"Novembre 12, 2022"},
        {text: "Nous sommes fière de vous partagez la campagne de distribution des fournitures scolaire", id: uuidv4(), titre: "construction d'une nouvelle ecole", maj: "Mis à jour il y a 5 mins", image: "test/src/Assets/Carousel.jpg",date:"Novembre 12,2022"},
        {text: "Nous sommes fière de vous partagez la campagne de distribution des fournitures scolaire", id: uuidv4(), titre: "construction d'une nouvelle ecole", maj: "Mis à jour il y a 5 mins", image: "./images/Carousel.jpg",date:"Novembre 12,2022"},
        {text: "Nous sommes fière de vous partagez la campagne de distribution des fournitures scolaire", id: uuidv4(), titre: "construction d'une nouvelle ecole", maj: "Mis à jour il y a 5 mins", image: "./images/Carousel.jpg",date:"Novembre 12,2022"},
    ])


    return (
        <>
        <div className="container">
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
                        )
                    })}
            </div>
        </div>
        </>
    )
}