function getSum(asc_code, sum) {
	let sum_real = sum % 26 == 0 ? sum : sum % 26;
	let tot = asc_code + sum_real;

	return tot > 122 ? tot - 26 : tot;
}

/**
 * Encrypt Phrases using Cesar Encrypt
 * @constructor
 * @param {string} input - Phrase
 * @param {string} uni_sum - sum unit
 */
function encrypt(input, uni_sum) {
	input = input.toLowerCase();
	let newString = '';

	for(let i = 0; i < input.length; i++) {
		let asc_code = input.charCodeAt(i);

		if(asc_code >= 97 && asc_code <= 122) 
			newString += String.fromCharCode(getSum(asc_code, uni_sum));
		else 
			newString += input.charAt(i);
	}

	return newString;
}

module.exports = encrypt;
