import {AbsoluteFill, useCurrentFrame} from 'remotion';

const Scene: React.FC = () => {
	const frame = useCurrentFrame();
	return (
		<div style={{backgroundColor: '#000', width: '100%'}}>
			<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center'}}>
				<h1 style={{color: '#fff', fontSize: '14em'}}>{frame + 1}</h1>
			</AbsoluteFill>
		</div>
	);
};

export default Scene;
