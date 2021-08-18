const string = "닉네임푸린출력";
const arr = string.split('');
var h = document.getElementsByTagName('h3');
var count = 0;

function clickme(){
  h[count].innerHTML = arr[count];
  count++;
}
