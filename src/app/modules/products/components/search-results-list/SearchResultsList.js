import React from 'react';

import SearchResultItem from '../search-result-item/SearchResultItem';

import './SearchResultsList.scss';

const SearchResultsList = (props) => {
	const searchResults = props.products.map((item) => (
		<SearchResultItem key={item.id} item={item}></SearchResultItem>
	));

	return (
		<div className='panel is-white'>
			<div className='search-results-list'>
				{searchResults.length ? (
					searchResults
				) : (
					<>
						<h2 className='title'>
							No hay publicaciones que coincidan con tu búsqueda.
						</h2>
						<ul>
							<li>Revisa la ortografía de la palabra.</li>
							<li>Utiliza palabras más genéricas o menos palabras.</li>
							<li>
								Navega por las categorías para encontrar un producto similar
							</li>
						</ul>
					</>
				)}
			</div>
		</div>
	);
};

export default SearchResultsList;
