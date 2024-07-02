  
  // Küçük harflere çevir, alfanumerik olmayan karakterleri sil ve ters çevirip kontrol et
  export function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  
  // Sadece ters çevirip kontrol et
  export function isPurePalindrome(str) {
    return str === str.split('').reverse().join('');
  }
  