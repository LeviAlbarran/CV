import React from 'react';

const Navigator = (props) => {
	const items = 
	(
		<div className="list">
			{props.navigator.map((item)=>
				<div key={item.src} className="">
					<h2>{item.title}</h2>
				</div>
			)}

		</div>
		)
}