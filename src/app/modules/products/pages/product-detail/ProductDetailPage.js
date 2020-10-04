import React from 'react';

import PublicLayout from '../../../../core/layouts/public-layout/PublicLayout';
import ProductDetail from '../../components/product-detail/ProductDetail';
import AppBreadcrumbs from '../../../../shared/components/app-breadcrumbs/AppBreadcrumbs';

const ProductDetailPage = () => {
	return (
		<PublicLayout>
			<AppBreadcrumbs></AppBreadcrumbs>
			<ProductDetail></ProductDetail>
		</PublicLayout>
	);
};

export default ProductDetailPage;
