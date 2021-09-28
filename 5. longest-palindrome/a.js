const map = new Map();

function isPalindrome(str) {
  // console.log('isPalindrome -> str', str);
  const len = str.length;
  if (len <= 1) {
    return true;
  }

  if (!map.has(str)) {
    map.set(
      str,
      str[0] === str[len - 1] && isPalindrome(str.slice(1, len - 1))
    );
  }

  return map.get(str);
}

/**
 * 最长回文子串
 */
function longestPalindrome(str) {
  if (str.length <= 1) {
    return str;
  }

  let result = '';

  for (let i = 0; i < str.length; i += 1) {
    let temp = '';
    for (let j = i; j < str.length; j += 1) {
      temp += str[j];
      if (temp.length > result.length && isPalindrome(temp)) {
        result = temp;
        console.log('longestPalindrome -> result', result);
      }
    }
  }
  return result;
}

console.log(
  longestPalindrome(
    'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'
  )
);
