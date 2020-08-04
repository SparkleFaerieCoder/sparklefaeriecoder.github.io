import React, { useLayoutEffect, useState } from 'react';
import '../scss/shapes.scss';

// calculate width of screen
//get width of dot
//divide to get number of dots to render

const multiplier = () => {
	const { innerWidth: screenWidth, innerHeight: screenHeight } = window;
	const dot = document.getElementsByClassName('dot').item(0);

	return (
		Math.floor(screenWidth / dot.clientWidth) *
		Math.floor(screenHeight / dot.clientWidth)
	);
};

const debounce = (fn, ms) => {
	let timer;
	return (_) => {
		clearTimeout(timer);
		timer = setTimeout((_) => {
			timer = null;
			fn.apply(this);
		}, ms);
	};
};

// Hook
function calcDots() {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [dots, setDotsCount] = useState(1);

	useLayoutEffect(() => {
		// Handler to call on window resize
		const handleDots = () => {
			setDotsCount(multiplier());
		};
		const debounceDotCount = debounce(handleDots, 100);

		// Add event listener
		window.addEventListener('resize', debounceDotCount);

		// // Call handler right away so state gets updated with initial window size
		handleDots();

		// Remove event listener on cleanup
		return () => window.removeEventListener('resize', debounceDotCount);
	}, []); // Empty array ensures that effect is only run on mount

	return dots;
}

const Dots = () => {
	const dots = calcDots();

	return (
		<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
			{Array.from({ length: dots }, (_, k) => {
				return <div className='dot' key={k} />;
			})}
		</div>
	);
};

export default Dots;
