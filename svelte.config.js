import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		host: "my-custom-domain-as-host.com",
		target: '#svelte'
	}
};

export default config;
