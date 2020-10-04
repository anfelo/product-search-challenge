import React from 'react';

import './ProductDetail.scss';

const ProductDetail = () => {
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
								{item.condition} - {item.sold_quantity} vendidos
							</small>
							<div className='row'>
								<p className='is-size-2'>
									<strong>{item.title}</strong>
								</p>
							</div>
							<div className='row'>
								<p className='is-size-1'>$ {item.price.amount}</p>
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

const item = {
	id: 'MLA866041474',
	title: 'Notebook Lenovo Cloudbook Ip S150 Amd A4 4gb Ssd 64gb Win10 ',
	price: { currency: 'COP', amount: 43999.12, decimals: 0.12 },
	picture: 'http://http2.mlstatic.com/D_955412-MLA42473216214_072020-O.jpg',
	condition: 'new',
	free_shipping: true,
	author: 'Capital Federal',
	sold_quantity: 20,
	description:
		'LRPC ELECTRONICA Notebook Lenovo Cloudbook Ip S150 Amd A4 4gb Ssd 64gb Win10 • Serie: Ideapad Cloudbook • Modelo: S150 81VS000GAR • Procesador: AMD A4 9120E 1.5G 2C • Memoria: 4 GB SO-DIMM 2400 MHz • Gráficos: AMD Radeon R4 series • Almacenamiento: 64 GB SSD eMMC • Pantalla: 14" 1366 x 768 (HD) TN • Sistema Operativo: Windows 10 Home • Conectividad: Wi-fi 1 802.11 - Bluetooth 4.2 • Puertos: 2 x USB 3.1 1 x Hdmi 1 x combo auricular/micrófono • Dimensiones: 327.1 x 235 x 20.9 mm • Peso: 1.4 Kg • Color: Light Blue EMITIMOS FACTURA A ó B'
};
