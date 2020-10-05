import React from 'react';
import { Link } from 'react-router-dom';

import * as currencyHelpers from '../../../../shared/helpers/currency/currency';

import MediaBox from '../../../../shared/components/media-box/MediaBox';

import shippingIcon from '../../../../../assets/img/shipping_icon.png';
import './SearchResultItem.scss';

const SearchResultItem = ({ item }) => {
	return (
		<Link className='search-result-item' to={`/items/${item.id}`}>
			<MediaBox
				imgUrl={item.picture}
				imgAlt={`Product ${item.title}`}
				mediaLeft={item.author}
			>
				<p className='search-result-item__price'>
					<span className='search-result-item__price-amount'>
						{currencyHelpers.convertNumberToCurrency(item.price.amount)}
					</span>
					{item.free_shipping ? (
						<span>
							<img src={shippingIcon} alt='Free Shipping' />
						</span>
					) : (
						''
					)}
				</p>
				<p>{item.title}</p>
			</MediaBox>
		</Link>
	);
};

export default SearchResultItem;
