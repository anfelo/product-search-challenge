import React from 'react';

import './MediaBox.scss';

const MediaBox = (props) => {
	return (
		<article className='media'>
			<figure className='media-left'>
				<div className='image is-180x180'>
					<img src={props.imgUrl} alt={props.imgAlt} />
				</div>
			</figure>
			<div className='media-content'>
				<div className='content'>{props.children}</div>
			</div>
			<div className='media-right'>
				<p>
					<small>{props.mediaLeft}</small>
				</p>
			</div>
		</article>
	);
};

export default MediaBox;
