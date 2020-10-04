import React from 'react';

import './SearchInput.scss';
import searchIcon from '../../../../assets/img/search_icon.png';

const SearchInput = (props) => {
	return (
		<div className='control'>
			<input
				className='input'
				type='text'
				autoComplete='off'
				placeholder='Nunca dejes de buscar'
			/>
			<button className='button is-light'>
				<span>
					<img src={searchIcon} alt='Search icon' />
				</span>
			</button>
		</div>
	);
};

export default SearchInput;
