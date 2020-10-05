const axios = require('axios');
const url = require('url');

const productsController = (model) => {
	const search = (req, res) => {
		let query = url.parse(req.url, true).query.q;
		if (query) {
			query = query.trim();
			const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`;
			axios
				.get(encodeURI(url))
				.then(function (response) {
					const products = model.getProductList(response.data);
					res.json({ ...products });
				})
				.catch(function (error) {
					res.status(500).send(error);
				});
		} else {
			const err = new Error('Not Found');
			err.status = 404;
			res.status(404).send(err);
		}
	};

	const getById = (req, res) => {
		let itemId = req.params.id;
		if (itemId.toString().trim()) {
			itemId = itemId.replace(/\s/g, '');
			const itemUrl = `https://api.mercadolibre.com/items/${itemId}`;
			const itemDescriptionUrl = `https://api.mercadolibre.com/items/${itemId}/description`;
			Promise.all([
				axios.get(encodeURI(itemUrl)),
				axios.get(encodeURI(itemDescriptionUrl))
			])
				.then(function (results) {
					const products = model.getProductDetail({
						...results[0].data,
						description: { ...results[1].data }
					});
					res.json({ ...products });
				})
				.catch(function (error) {
					if (error.response && error.response.status === 404) {
						const err = new Error('Not Found');
						err.status = 404;
						res.status(err.status).send({
							error: {
								message: err.message
							}
						});
					} else {
						const err = new Error(error.message);
						err.status = 500;
						res.status(err.status).send({
							error: {
								message: err.message
							}
						});
					}
				});
		} else {
			const err = new Error('Not Found');
			err.status = 404;
			res.status(err.status).send({
				error: {
					message: err.message
				}
			});
		}
	};

	return {
		getById,
		search
	};
};

module.exports = productsController;
