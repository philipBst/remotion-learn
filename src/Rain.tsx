import RainDrop from './Raindrop';
import {random, AbsoluteFill} from 'remotion';
import {useMemo} from 'react';

const arr = Array(300).fill(true);

const Rain = () => {
	const drops = useMemo(
		() =>
			arr.map((_, i) => {
				const x = random('x' + i) * 100 + '%';
				const delay = random('delay' + i) * 60;
				const size = random('size' + i) + 0.3;
				return {x, delay, size};
			}),
		[]
	);
	return (
		<AbsoluteFill>
			{drops.map((drop) => (
				<RainDrop {...drop} />
			))}
		</AbsoluteFill>
	);
};

export default Rain;
