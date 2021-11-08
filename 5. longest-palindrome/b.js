/**
 * 最长回文子串
 */
function longestPalindrome(str) {
  const len = str.length;
  if (len <= 1) {
    return str;
  }

  let result = '';

  for (let i = 0; i < len; i += 1) {
    let j = i - 1;
    let k = i + 1;
    let temp = str[i];
    while (j >= 0 && k <= len - 1 && str[j] === str[k]) {
      temp = str[j] + temp + str[k];
      j -= 1;
      k += 1;
    }
    if (temp.length > result.length) {
      result = temp;
    }
  }

  for (let i = 1; i < len; i += 1) {
    let j = i - 1;
    let k = i;
    let temp = '';
    while (j >= 0 && k <= len - 1 && str[j] === str[k]) {
      temp = str[j] + temp + str[k];
      j -= 1;
      k += 1;
    }
    if (temp.length > result.length) {
      result = temp;
    }
  }

  return result;
}

console.log(
  longestPalindrome(
    'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'
    // 'aacabdkacaa'
  )
);
