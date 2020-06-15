import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from 'react-redux'

test("renders juke play list", () => {
	let store = {
		getState : () => {
			return {
				musicQueue: [],
				songList: [{ "id": 24, "artist": "Bon Jovi", "songTitle": "Bad Medicine", "url": "Bad_Medicine.mp3" }]	
			};
		},
		subscribe: () => {},
		dispatch: () => {}
	}
	const { getByText } = render(<Provider store={store}><App /></Provider>);
	const linkElement = getByText(/Bad Medicine/i);
	expect(linkElement).toBeInTheDocument();
});
