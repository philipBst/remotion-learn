import {Nepal} from './Nepal';

import Rain from './Rain';

export const MyComposition = () => {
	return (
		<div
			style={{
				flex: 1,
				textAlign: 'center',
				fontSize: '7em',
				background: 'black',
				color: 'red',
				fontFamily: "'Dank Mono'",
			}}
		>
			Konichiwa sekai!
			<Nepal />
			<Rain />
		</div>
	);
};
