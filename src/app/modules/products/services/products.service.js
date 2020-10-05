import axios from 'axios';

const conditions = {
	new: 'Nuevo',
	not_specified: 'Sin especificar',
	used: 'Usado'
};

export const searchProducts = (term) => {
	return axios.get(`/api/items?q=${term}`);
};

export const getProduct = (id) => {
	return axios.get(`/api/items/${id}`);
};

export const getProductCondition = (condition) => {
	return conditions[condition] || conditions['not_specified'];
};
