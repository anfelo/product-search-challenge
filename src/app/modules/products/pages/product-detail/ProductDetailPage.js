import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as productsService from '../../services/products.service';

import PublicLayout from '../../../../core/layouts/public-layout/PublicLayout';
import ProductDetail from '../../components/product-detail/ProductDetail';
import AppBreadcrumbs from '../../../../shared/components/app-breadcrumbs/AppBreadcrumbs';
import AppLoader from '../../../../shared/components/app-loader/AppLoader';

const ProductDetailPage = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(false);

	const searchItem = async () => {
		if (id) {
			setLoading(true);
			const results = await productsService.getProduct(id);
			setProduct(results.data.item);
			setLoading(false);
		}
	};

	useEffect(() => {
		searchItem();
	}, []);

	return (
		<PublicLayout>
			<AppBreadcrumbs></AppBreadcrumbs>
			{loading ? (
				<div className='row is-centered'>
					<AppLoader></AppLoader>
				</div>
			) : product ? (
				<ProductDetail item={product} isLoading={loading}></ProductDetail>
			) : (
				<>
					<h2 className='title'>El producto que buscas no existe</h2>
					<ul>
						<li>Revisa la ortografía de la palabra.</li>
						<li>
							Navega por las categorías para encontrar un producto similar
						</li>
					</ul>
				</>
			)}
		</PublicLayout>
	);
};

export default ProductDetailPage;
