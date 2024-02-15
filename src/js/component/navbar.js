import React, { useContext, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { DropdownItem } from "react-bootstrap";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	const handleRemoveFavorite = (name, e) => {
		e.preventDefault();
		e.stopPropagation(); // Detener la propagación del evento para evitar que el dropdown se cierre
		actions.removeFavorite(name);
	};


	return (
		<nav className="navbar navbar-dark bg-dark">
			<Link to="/">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/100px-Star_Wars_Logo..png" alt="Star Wars Logo" />
			</Link>
			<div className="ml-auto favoritesButton">
				<DropdownButton
					id="dropdown-basic-button"
					title="Favorites"
					show={dropdownOpen}
					onClick={toggleDropdown}
				>
					{store.favorites.map((name, index) => (
						<Dropdown.Item key={index} className="d-flex align-items-center">
							<span>{name}</span>
							<button type="button" className="btn btn-outline-danger ms-3 me-2" onClick={(e) => handleRemoveFavorite(name, e)}>
								<i className="fa fa-trash"></i>
							</button>
						</Dropdown.Item>
					))}
					{store.favorites.length === 0 ? (
						<Dropdown.Item disabled>Add Favorites</Dropdown.Item>
					) : (
						<p className="favoritesLength">
							{store.favorites.length === 1 ?
								`${store.favorites.length} Favorite` :
								`${store.favorites.length} Favorites`}
						</p>
					)}
				</DropdownButton>
			</div>
		</nav >
	);
};
