import React, { useEffect, useContext } from "react";
import "../../styles/learnMore.css";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Context } from "../store/appContext";


export const PlanetsDetails = () => {
  const params = useParams();
  const { actions, store } = useContext(Context)



  useEffect(() => {
    actions.getPlanetsDetails(params.elementId)
  }, [])

  const data = store.planetsDetails?.result?.properties
  console.log(data)

  return (
    <div className="background">
      {store.planetsDetails?.result?.uid === params.elementId ? (
        <div className="details">
          <> <img className="detailImg" variant="top" src={`https://starwars-visualguide.com/assets/img/planets/${params.elementId}.jpg`} />
            <ul className="description">
              <li className="d-flex"><h3 className="properties">Diameter :</h3>
                <h3> {data.diameter} </h3> </li>
              <li className="d-flex"><h3 className="properties">Rotation Period : </h3>
                <h3> {data.rotation_period} </h3> </li>
              <li className="d-flex"><h3 className="properties">Orbital Period : </h3>
                <h3> {data.orbital_period} </h3> </li>
              <li className="d-flex"><h3 className="properties"> Population : </h3>
                <h3> {data.population} </h3> </li>
              <li className="d-flex"><h3 className="properties">Climate : </h3>
                <h3> {data.climate} </h3> </li>
              <li className="d-flex"><h3 className="properties">Terrain : </h3>
                <h3> {data.terrain} </h3> </li>
              <li className="d-flex"><h3 className="properties">Surface Water : </h3>
                <h3> {data.surface_water} </h3> </li>
            </ul>
          </> </div>) : (<h3>Cargando</h3>)
      }
    </div>
  );
}

