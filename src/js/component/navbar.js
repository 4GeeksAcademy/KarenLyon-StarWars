import React, { useContext } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";



export const Navbar = () => {
	const { store } = useContext(Context);

	return (
		<nav className="navbar navbar-dark bg-dark">
			<Link to="/">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/100px-Star_Wars_Logo..png" alt="Star Wars Logo" />
			</Link>
			<div className="ml-auto favoritesButton">
				<DropdownButton id="dropdown-basic-button" title="Favoritos">
					{store.favorites.length > 0 ? (
						store.favorites.map((favorite, index) => (
							<Dropdown.Item key={index} href={`#${favorite}`}>{favorite}</Dropdown.Item>
						))
					) : (
						<Dropdown.Item disabled>No hay favoritos</Dropdown.Item>
					)}
				</DropdownButton>
			</div>
		</nav>
	);
};
