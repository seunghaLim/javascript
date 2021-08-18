var t = document.getElementsByClassName('time');

var sec = 0;
var min = 0;
var h = 0;
var timer;

function time(){

  sec++;

  if (sec >= 60){
      sec = 0;
      ++min;
  }

  if (min >=60){
      min = 0;
      ++h;
  }

  console.log("asdf");
  t[0].innerHTML = (h > 9 ? h : "0" + h) + ":" + (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec );

  start();

}

function start(){
    timer = setTimeout(time, 1000);   // time()이라는 함수를 1초 뒤에 실행
}


function stop(){
    clearTimeout(timer);    //timer 변수 초기화
}

function clearTime(){

    t[0].innerHTML = "00:00:00";

    sec = 0;
    min = 0;
    h = 0;
    
}
