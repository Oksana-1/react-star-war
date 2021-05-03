export const getResource = async (url) => {
	const response = await fetch(url);
	if (!response.ok) throw new Error(`Could not fetch ${url}. Got ${response.status}!`);
	return await response.json();
}