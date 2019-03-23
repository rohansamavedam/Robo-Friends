import React from 'react';

const Card = ({name, email, id}) => {
	const urllink = 'https://robohash.org/' + id + '?size=200x200';
	return(
		<div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc '>
			<img alt='fcaeId' src ={urllink}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}

export default Card;