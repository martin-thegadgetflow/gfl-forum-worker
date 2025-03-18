export default {
	/**
	 * @param {Request} request
	 * @param {Env} env
	 * @param {ExecutionContext} ctx
	 * @returns {Promise<Response>}
	 */
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		console.log(`Hello ${navigator.userAgent} at path ${url.pathname}!`);

		if (url.pathname.startsWith("/forum")) {
			const fetchResponse = await fetch('https://wordpress-1357831-5184672.cloudwaysapps.com' + url.pathname + url.search);
			return new Response(fetchResponse.body);
		}
		return new Response(request);
	},
};
