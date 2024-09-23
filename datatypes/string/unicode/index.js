console.log('\xA9');

console.log('\u00A9');
console.log('\u044f');
console.log('\u2191');

console.log('\u{20331}');
console.log('\u{1F60D}');

// charCodeAt не учитывает суррогатные пары, поэтому он выдает коды для 1-й части 𝒳:

console.log('𝒳'.charCodeAt(0).toString(16)); // d835

// codePointAt учитывает суррогатные пары
console.log('𝒳'.codePointAt(0).toString(16)); // 1d4b3, считывает обе части суррогатной пары

console.log('S\u0306');

