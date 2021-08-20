var atonement = {name : "어톤먼트", genre: "로맨스/드라마"};
var one = {name : "1917", genre: "전쟁" };
var lotr = {name: "반지의제왕", genre: "판타지"};
var list = document.getElementsByTagName('li');

function a(){
    list[0].innerHTML = atonement.name;
    list[1].innerHTML = atonement.genre;

}

function b(){
    list[0].innerHTML = one.name;
    list[1].innerHTML = one.genre;
}

function c(){
    list[0].innerHTML = lotr.name;
    list[1].innerHTML = lotr.genre;
}