import App from './App.svelte';
import People from "./peopleGenerator.js"


const app = new App({
	target: document.body,
	props: {
		people: People
	}
});

export default app;