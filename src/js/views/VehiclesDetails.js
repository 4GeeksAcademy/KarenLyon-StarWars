import React, { useEffect, useContext } from "react";
import "../../styles/learnMore.css";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Context } from "../store/appContext";


export const VehiclesDetails = () => {
  const params = useParams();
  const { actions, store } = useContext(Context)



  useEffect(() => {
    actions.getVehiclesDetails(params.elementId)
  }, [])

  const data = store.vehiclesDetails?.result?.properties
  console.log(data)

  return (
    <div className="background">
      {store.vehiclesDetails?.result?.uid === params.elementId ? (
        <div className="details">
          <> <img className="detailImg" variant="top" src={`https://starwars-visualguide.com/assets/img/vehicles/${params.elementId}.jpg`} />
            <ul className="description">
              <li className="d-flex"><h3 className="properties">Model :</h3>
                <h3> {data.model} </h3> </li>
              <li className="d-flex"><h3 className="properties">Class : </h3>
                <h3> {data.vehicle_class} </h3> </li>
              <li className="d-flex"><h3 className="properties">Manufacturer : </h3>
                <h3> {data.manufacturer} </h3> </li>
              <li className="d-flex"><h3 className="properties">Cost In Credits : </h3>
                <h3> {data.cost_in_credits} </h3> </li>
              <li className="d-flex"><h3 className="properties">Lenght : </h3>
                <h3> {data.length} </h3> </li>
              <li className="d-flex"><h3 className="properties">Crew : </h3>
                <h3> {data.crew} </h3> </li>
              <li className="d-flex"><h3 className="properties">Passengers : </h3>
                <h3> {data.passengers} </h3> </li>
            </ul>
          </> </div>) : (<h3>Cargando</h3>)
      }
    </div>
  );
}

