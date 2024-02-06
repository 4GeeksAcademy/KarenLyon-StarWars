import React, {useEffect ,useContext} from "react";
import "../../styles/home.css";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Context } from "../store/appContext";


export const PeopleDetails = ()=>{
    const params = useParams();
    const {actions, store} = useContext(Context)

   

    useEffect(() => {
      actions.getPeopleDetails(params.elementId)
      },[]) 
    
      const data = store.peopleDetails?.result?.properties
     

    return (
        <>
        <Card>
        {store.peopleDetails?.result?.uid===params.elementId ? (
            <> <Card.Img variant="top" style={{height:'70px', width:'70px'}} src={`https://starwars-visualguide.com/assets/img/characters/${params.elementId}.jpg`}/>
          <Card.Body>
            <p>{data.name}</p>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body></>):(<h3>Cargando</h3>)}
         
        </Card></>
    );
}

