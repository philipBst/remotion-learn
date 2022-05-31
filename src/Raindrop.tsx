import {useVideoConfig} from 'remotion';
import {spring} from 'remotion';
import {interpolate, useCurrentFrame} from 'remotion';

const RainDrop: React.FC<{
	delay: number;
	x: string;
	size: number;
}> = ({delay, size, x}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const drop = spring({
		fps,
		frame: frame - delay,
		config: {
			damping: 1000,
		},
	});
	const top = interpolate(drop, [0, 1], [-0.2, 1.1]);
	return (
		<>
			<svg
				version="1.1"
				id="Layer_1"
				x="0px"
				y="0px"
				viewBox="0 0 512 512"
				style={{
					position: 'absolute',
					width: 100,
					left: x,
					top: top * 100 + '%',
					transform: `scale(${size})`,
				}}
			>
				<path
					style={{fill: '#98C8ED'}}
					d="M256,512c-29.229,0-57.067-5.947-82.373-16.699C68.517,450.643,32.298,319.574,97.79,226.014L256,0
	l158.21,226.014c65.491,93.56,29.274,224.629-75.837,269.286C313.067,506.053,285.229,512,256,512z"
				/>
				<path
					style={{fill: '#7AB9E8'}}
					d="M414.21,226.014L256,0v512c29.229,0,57.067-5.947,82.373-16.699
	C443.483,450.643,479.702,319.574,414.21,226.014z"
				/>
			</svg>
		</>
	);
};

export default RainDrop;
