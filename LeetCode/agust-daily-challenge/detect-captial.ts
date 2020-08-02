function detectCapitalUse(word: string): boolean {
	let sliced: string = word.substr(1);
	return (word === word.toUpperCase() ||
					sliced === sliced.toLowerCase())
};
