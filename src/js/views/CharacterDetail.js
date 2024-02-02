import React, {useEffect ,useContext} from "react";
import "../../styles/home.css";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Context } from "../store/appContext";


export const CharacterDetail = ()=>{
    const params = useParams();
    const {actions, store} = useContext(Context)

   

    useEffect(() => {
      actions.getCharacter(params.elementId)
      },[]) 
    
      const data = store.character?.result?.properties
      console.log(data)

    return (
        <>
        <Card>
        {store.character?.result?.uid===params.elementId ? (
            <> <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${params.elementId}.jpg`}/>
          <Card.Body>
            <p>name: {data.name}</p>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body></>):(<h3>Cargando</h3>)}
         
        </Card></>
    );
}

