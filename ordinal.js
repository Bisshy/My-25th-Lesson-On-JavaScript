/* ordinal 1.0.2: https://github.com/dcousens/ordinal/

Copyright (c) 2016, Daniel Cousens

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE. */


  //Common JS Method Using module.exports to export code

  // function indicator (i) {
  //   var cent = i % 100
  //   if (cent >= 10 && cent <= 20) return 'th'
  //   var dec = i % 10
  //   if (dec === 1) return 'st'
  //   if (dec === 2) return 'nd'
  //   if (dec === 3) return 'rd'
  //   return 'th'
  // }
  
  // function ordinal (i) {
  //   if (typeof i !== 'number') throw new TypeError('Expected Number, got ' + (typeof i) + ' ' + i)
  //   return i + indicator(i)
  // }
  
  // ordinal.indicator = indicator
  // module.exports = ordinal;
  //module.export allows me to export just one function or one value rather than exporting many properties
  
  //ES Module - using export or export default to export a single function.

  // function indicator (i) {
  //   var cent = i % 100
  //   if (cent >= 10 && cent <= 20) return 'th'
  //   var dec = i % 10
  //   if (dec === 1) return 'st'
  //   if (dec === 2) return 'nd'
  //   if (dec === 3) return 'rd'
  //   return 'th'
  // }
  // function ordinal  (i) {
  //   if (typeof i !== 'number') throw new TypeError('Expected Number, got ' + (typeof i) + ' ' + i)
  //   return i + indicator(i)
  // }
  
  // ordinal.indicator = indicator
  
  // export default ordinal;