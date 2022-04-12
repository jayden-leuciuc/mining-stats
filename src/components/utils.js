export function shortHash(num) {
  if (Math.abs(num) < 1000) {
    return num;
  }

  var shortNumber;
  var exponent;
  var size;
  var sign = num < 0 ? '-' : '';
  var suffixes = {
    'Kh/s': 3,
    'Mh/s': 6,
    'Gh/s': 9,
    'Th/s': 12,
    'Ph/s': 16,
    'Eh/s': 19,
  };

  num = Math.abs(num);
  size = Math.floor(num).toString().length;

  exponent = size % 3 === 0 ? size - 3 : size - (size % 3);
  shortNumber = Math.round(10 * (num / Math.pow(10, exponent))) / 10;

  for (var suffix in suffixes) {
    if (exponent < suffixes[suffix]) {
      shortNumber += suffix;
      break;
    }
  }

  return sign + shortNumber;
}
