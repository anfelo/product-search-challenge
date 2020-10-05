import React from 'react';

import * as currencyHelpers from '../../../../shared/helpers/currency/currency';
import * as productService from '../../services/products.service';

import './ProductDetail.scss';

const ProductDetail = ({ item }) => {
	return (
		<div className='panel is-white'>
			<div className='product-detail'>
				<div className='row'>
					<div className='product-detail__column-left column'>
						<div className='product-detail__image'>
							<div className='image'>
								<img src={item.picture} alt={`Product ${item.title}`} />
							</div>
						</div>
						<div className='product-detail__description'>
							<h2 className='title'>Descripción del producto</h2>
							<p className='has-text-grey'>{item.description}</p>
						</div>
					</div>
					<div className='product-detail__column-right column'>
						<div className='product-detail__aside'>
							<small>
								{productService.getProductCondition(item.condition)} -{' '}
								{item.sold_quantity} vendidos
							</small>
							<div className='row'>
								<p className='is-size-2'>
									<strong>{item.title}</strong>
								</p>
							</div>
							<div className='row'>
								<p className='product-detail__price is-size-1'>
									{currencyHelpers.convertNumberToCurrency(
										item.price.amount,
										item.price.currency
									)}
									<small className='product-detail__price--decimals is-size-2'>
										{!item.price.decimals ? '00' : item.price.decimals}
									</small>
								</p>
							</div>
							<p>
								<button type='button' className='button is-secondary is-block'>
									Comprar
								</button>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
