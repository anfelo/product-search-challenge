import React from 'react';

import MediaBox from '../../../../shared/components/media-box/MediaBox';

import './SearchResultItem.scss';
import shippingIcon from '../../../../../assets/img/shipping_icon.png';

const SearchResultItem = ({ item }) => {
	return (
		<div className='search-result-item'>
			<MediaBox
				imgUrl={item.picture}
				imgAlt={`Product ${item.title}`}
				mediaLeft={item.author}
			>
				<p className='search-result-item__price'>
					<span className='search-result-item__price-amount'>
						$ {item.price.amount}
					</span>
					<span>
						<img src={shippingIcon} alt='Free Shipping' />
					</span>
				</p>
				<p>{item.title}</p>
			</MediaBox>
		</div>
	);
};

export default SearchResultItem;
