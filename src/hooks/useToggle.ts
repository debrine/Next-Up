import { useState } from 'react';

export function useToggle(initialValue: false) {
	const [state, setState] = useState<boolean>(initialValue);

	function toggle() {
		setState(!state);
	}

	return [state, toggle];
}
