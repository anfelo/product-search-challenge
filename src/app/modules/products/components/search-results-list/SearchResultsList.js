import React from 'react';

import SearchResultItem from '../search-result-item/SearchResultItem';

import './SearchResultsList.scss';

const SearchResultsList = (props) => {
	const searchResults = results.map((item) => (
		<SearchResultItem key={item.id} item={item}></SearchResultItem>
	));

	return (
		<div className='panel is-white'>
			<div className='search-results-list'>{searchResults}</div>
		</div>
	);
};

export default SearchResultsList;

const results = [
	{
		id: 'MLA866041474',
		title: 'Notebook Lenovo Cloudbook Ip S150 Amd A4 4gb Ssd 64gb Win10 ',
		price: { currency: 'COP', amount: 43999.12, decimals: 0.12 },
		picture: 'http://http2.mlstatic.com/D_955412-MLA42473216214_072020-O.jpg',
		condition: 'new',
		free_shipping: true,
		author: 'Capital Federal'
	},
	{
		id: 'MLA866041475',
		title: 'Notebook Lenovo Cloudbook Ip S150 Amd A4 4gb Ssd 64gb Win10 ',
		price: { currency: 'COP', amount: 43999.12, decimals: 0.12 },
		picture: 'http://http2.mlstatic.com/D_955412-MLA42473216214_072020-O.jpg',
		condition: 'new',
		free_shipping: true,
		author: 'Capital Federal'
	},
	{
		id: 'MLA866041476',
		title: 'Notebook Lenovo Cloudbook Ip S150 Amd A4 4gb Ssd 64gb Win10 ',
		price: { currency: 'COP', amount: 43999.12, decimals: 0.12 },
		picture: 'http://http2.mlstatic.com/D_955412-MLA42473216214_072020-O.jpg',
		condition: 'new',
		free_shipping: true,
		author: 'Capital Federal'
	},
	{
		id: 'MLA866041477',
		title: 'Notebook Lenovo Cloudbook Ip S150 Amd A4 4gb Ssd 64gb Win10 ',
		price: { currency: 'COP', amount: 43999.12, decimals: 0.12 },
		picture: 'http://http2.mlstatic.com/D_955412-MLA42473216214_072020-O.jpg',
		condition: 'new',
		free_shipping: true,
		author: 'Capital Federal'
	}
];
