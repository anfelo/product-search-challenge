export function loadImage(src) {
	return new Promise((fulfil, reject) => {
		const img = new Image();
		img.onload = () => fulfil(img);
		img.onerror = () => reject;
		img.src = src;
	});
}
