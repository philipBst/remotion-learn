import {interpolate, useCurrentFrame, Sequence} from 'remotion';

const Title: React.FC<{title: string}> = ({title}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 20], [0, 1], {
		extrapolateRight: 'clamp',
	});
	return <div style={{opacity}}>{title}</div>;
};

const Scene: React.FC = () => {
	return (
		<div
			style={{
				flex: 1,
				textAlign: 'center',
				fontSize: '7em',
				backgroundColor: '#fff',
			}}
		>
			<Sequence from={0} durationInFrames={40}>
				<Title title="Konichiwa sekai!" />
			</Sequence>
			<Sequence from={40}>
				<Title title="Konichiwa sekai nidaime!" />
			</Sequence>
		</div>
	);
};

export default Scene;
