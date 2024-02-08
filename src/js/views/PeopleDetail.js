import React, { useEffect, useContext } from "react";
import "../../styles/learnMore.css";
import { useParams } from "react-router";
import { Context } from "../store/appContext";


export const PeopleDetails = () => {
  const params = useParams();
  const { actions, store } = useContext(Context)



  useEffect(() => {
    actions.getPeopleDetails(params.elementId)
  }, [])

  const data = store.peopleDetails?.result?.properties


  return (

    <div >
      {store.peopleDetails?.result?.uid === params.elementId ? (
        <div className="details">
          <> <img className="detailImg" variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${params.elementId}.jpg`} />
            <ul className="description">
              <li className="d-flex"><h3 className="properties">Name :</h3>
                <h3> {data.name} </h3> </li>
              <li className="d-flex"><h3 className="properties">Height : </h3>
                <h3> {data.height} </h3> </li>
              <li className="d-flex"><h3 className="properties">Hair Color : </h3>
                <h3> {data.hair_color} </h3> </li>
              <li className="d-flex"><h3 className="properties"> Skin Color : </h3>
                <h3> {data.skin_color} </h3> </li>
              <li className="d-flex"><h3 className="properties">Eye Color : </h3>
                <h3> {data.eye_color} </h3> </li>
              <li className="d-flex"><h3 className="properties">Birth Year : </h3>
                <h3> {data.birth_year} </h3> </li>
              <li className="d-flex"><h3 className="properties">Gender : </h3>
                <h3> {data.gender} </h3> </li>
            </ul>
          </> </div>) : (<h3>Cargando</h3>)
      }
    </div>
  );
}

