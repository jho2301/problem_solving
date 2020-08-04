function isPalindrome(s: string): boolean {
	if (s.length <= 1) return (true);
	s = s.toUpperCase();
	let k: number = s.length - 1;
	for (let i = 0; i < (s.length); i++) {
		while (i < s.length && /[^A-Z0-9]/.test(s[i])) i++;
		while (0 <= k && /[^A-Z0-9]/.test(s[k])) k--;
		if (s[i] !== s[k]) return (false);
		k--;
	}
	return (true);
};
