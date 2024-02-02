import React, { useContext } from "react";
import "../../styles/home.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	if (!store.people.hasOwnProperty("results")) return console.log("no existe")
	if (!store.vehicles.hasOwnProperty("results")) return console.log("no existe")



	return (
		<div>
			<ul >
				<li className="d-flex">
					{store.people.results.map((element) => {
						return (

							<Card key={element.uid} style={{ width: '18rem' }} className="Characters">
								<Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${element.uid}.jpg`} />
								<Card.Body>
									<Card.Title>{element.name}</Card.Title>
									<Card.Text>
                               
									</Card.Text>
									<Link className="btn btn-primary" to={`/character/${element.uid}`}>Learn More</Link>
								</Card.Body>
							</Card>
						)

					})}</li>
			</ul>
			<li className="d-flex">
				{store.vehicles.results.map((e) => {
					return (

						<Card key={e.uid} style={{ width: '18rem' }} className="Characters">
							<Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/vehicles/${e.uid}.jpg`} />
							<Card.Body>
								<Card.Title>{e.name}</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up the
									bulk of the card's content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					)

				})}
			</li>
		</div>
	);
}


