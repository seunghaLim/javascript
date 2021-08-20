var h4 = document.getElementsByTagName('h4');
var h5 = document.getElementsByTagName('h5');

function call(){
    h4[0].innerHTML = "푸린";
    h5[0].innerHTML = "010-1234-5678";
}

function cb(){
    time = setTimeout(call, 2000);
}

document.getElementById('callme').addEventListener('click', cb);

