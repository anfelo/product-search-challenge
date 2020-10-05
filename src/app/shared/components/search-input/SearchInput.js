import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './SearchInput.scss';
import searchIcon from '../../../../assets/img/search_icon.png';

const SearchInput = () => {
	const history = useHistory();
	const [searchText, setSearchText] = useState('');

	const onInputChange = (event) => {
		setSearchText(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (searchText.trim()) {
			history.push(`/items?search=${searchText}`);
		}
	};

	return (
		<form onSubmit={onSubmit}>
			<div className='control'>
				<input
					className='input'
					type='text'
					autoComplete='off'
					placeholder='Nunca dejes de buscar'
					value={searchText}
					onChange={onInputChange}
				/>
				<button type='submit' className='button is-light'>
					<span>
						<img src={searchIcon} alt='Search icon' />
					</span>
				</button>
			</div>
		</form>
	);
};

export default SearchInput;
