/*
 * fuzzy_match.js - template for implementation
 *                  of fuzzy matching strings.
 *
 * Copyright (C) 2022 Fenze Agency <contact@fenze.dev>
 *
 * Distributed under terms of the MIT license.
 */

/**
 * Fuzzy matching two strings.
 * @param {string} First string
 * @param {string} Second string
 * @return {bool} True if matching,
 *                False if not
 */
((first, second) => {
	let fir = first.replaceAll(' ', '')
	let sec = second.replaceAll(' ', '')

	let i
	for (char of fir)
		if ((i = sec.indexOf(char)) == -1)
			return false
		sec = sec.substr(i)

	return true
})
