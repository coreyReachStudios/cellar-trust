interface IGqlFetch {
	query: string;
	variables?: any;
	next?: NextFetchRequestConfig;
}

export default async function gqlFetch({ query, variables, next }: IGqlFetch) {
	const response = await fetch("https://busy-kepler.85-118-238-200.plesk.page/graphql", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ query, variables }),
		next,
	});
	const jsonData = await response.json();
	return jsonData.data;
}
