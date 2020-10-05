const productModel = () => {
	const getProductList = (data) => {
		return {
			author: {
				name: '',
				lastname: ''
			},
			categories: [],
			items: data.results.map(getProductItem)
		};
	};

	const getProductDetail = (data) => {
		return {
			author: {
				name: '',
				lastname: ''
			},
			item: {
				...getProductItem(data),
				picture: data.pictures[0].secure_url,
				sold_quantity: data.sold_quantity,
				description: data.description.plain_text
			}
		};
	};

	const getProductItem = (data) => {
		return {
			id: data.id,
			title: data.title,
			price: {
				currency: data.currency_id,
				amount: data.price.toString().split('.')[0],
				decimals:
					data.price && data.price.toString().split('.').length > 1
						? data.price.toString().split('.')[1]
						: 0
			},
			picture: data.thumbnail,
			condition: data.condition,
			free_shipping: data.shipping ? data.shipping.free_shipping : false
		};
	};

	return {
		getProductList,
		getProductDetail,
		getProductItem
	};
};

module.exports = productModel;
