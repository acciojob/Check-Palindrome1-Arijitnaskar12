// complete the given function

function palindrome(str){
str=atr.toLowerCase();
	let i=0,j=str.length-1;
	while(i<=j)
		{
			if(s[i]!=s[j])
			{
				return false;
			}
			i++;j--;
		}
	return true;
}
module.exports = palindrome
