const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 0
});

export const convertNumberToCurrency = (num) => {
	return formatter.format(num);
};
