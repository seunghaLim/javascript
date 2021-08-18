var t = document.getElementsByClassName('time');

var sec = 0;
var min = 0;
var h = 0;
var timer;

function time(){

  // 1초씩 증가
  sec++;

  // 60초가 넘어가면 +1분으로 바뀜
  if (sec >= 60){
      sec = 0;
      ++min;
  }

   // 60분이 넘어가면 +1시간으로 바뀜
  if (min >=60){
      min = 0;
      ++h;
  }

  //두자릿수부터는 그대로 써주고, 한자릿수에는 01 이렇게 표시  
  t[0].innerHTML = (h > 9 ? h : "0" + h) + ":" + (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec );

  //다시 start 함수 호출해서 1초 뒤에 time 함수가 가동되도록 함
  start();

}

function start(){
    timer = setTimeout(time, 1000);   // 시작 버튼을 누르면 time()이라는 함수를 1초 뒤에 실행
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
