import React, { useState, createContext } from 'react';
import MovieList from './MovieList';
import Nav from './Nav';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
	const [movies, setMovies] = useState([
		{
			name: 'Raya and the last dragon',
			price: '$20',
			id: 123,
		},
		{
			name: 'Tangled',
			price: '$10',
			id: 4,
		},
		{
			name: 'Coco',
			price: '$10',
			id: 125,
		},
	]);
	return <MovieContext.Provider value={[movies, setMovies]}>{props.children}</MovieContext.Provider>;
};
