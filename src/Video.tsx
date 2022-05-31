import {Composition} from 'remotion';
import {MyComposition} from './Composition';
// Import Scene from './numbers/Scene';
// import Scene from './sequence/Scene';

export const RemotionVideo: React.FC = () => {
	return (
		<Composition
			id="demo"
			component={MyComposition}
			durationInFrames={120}
			fps={15}
			width={1080}
			height={1920}
		/>
	);
};
