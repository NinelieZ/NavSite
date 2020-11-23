// JavaScript source code
function GithubIcon() {

    window.location.href = 'https://github.com/NinelieZ';

}
function WeiboIcon() {

    window.location.href = 'https://weibo.com/u/5301091211';

}
function ones() {
    document.getElementById('result').value += "1";
}
function twos() {
    document.getElementById("result").value += "2";
}
function threes() {
    document.getElementById("result").value += "3";
}
function fours() {
    document.getElementById("result").value += "4";
}
function fives() {
    document.getElementById("result").value += "5";
}
function sixs() {
    document.getElementById("result").value += "6";
}
function sevens() {
    document.getElementById("result").value += "7";
}
function eights() {
    document.getElementById("result").value += "8";
}

function nines() {
    document.getElementById("result").value += "9";
}
function zeros() {
    document.getElementById("result").value += "0";
}

function dots() {
    document.getElementById("result").value += ".";
}
function divides() {
    document.getElementById("result").value += "/";
}
function multiplys() {
    document.getElementById("result").value += "*";
}
function right() {
    document.getElementById("result").value += "(";
}
function left() {
    document.getElementById("result").value += ")";
}
function clears() {
    document.getElementById("temp").value = "";
    document.getElementById("result").value = "";
}
function adds() {
    document.getElementById("result").value += "+";
}
function substracts() {
    document.getElementById("result").value += "-";
}
function backspaces() {
    s = document.getElementById("result").value;
    s = s.substr(0, s.length - 1);
    document.getElementById("result").value = s;
}
function equals() {
    str = document.getElementById("result").value;
    document.getElementById("temp").value = str;
    eval("str="+ str);
    document.getElementById("result").value = str;
}

function bin() {
    y = document.getElementById("bin_input").value;
    x = parseInt(y, 2);
    document.getElementById("hex_input").value = x.toString(16);
    document.getElementById("dec_input").value = x.toString(10);
    document.getElementById("oct_input").value = x.toString(8);
    document.getElementById("thr_input").value = x.toString(32);
}
function oct() {
    y = document.getElementById("oct_input").value;
    x = parseInt(y, 8);
    document.getElementById("bin_input").value = x.toString(2);
    document.getElementById("hex_input").value = x.toString(16);
    document.getElementById("thr_input").value = x.toString(32);
    document.getElementById("dec_input").value = x.toString(10);
}
function dec() {
    y = document.getElementById("dec_input").value;
    x = parseInt(y, 10);
    document.getElementById("bin_input").value = x.toString(2);
    document.getElementById("hex_input").value = x.toString(16);
    document.getElementById("oct_input").value = x.toString(8);
    document.getElementById("thr_input").value = x.toString(32);
}
function hex() {
    y = document.getElementById("hex_input").value;
    x = parseInt(y, 16);
    document.getElementById("bin_input").value = x.toString(2);
    document.getElementById("dec_input").value = x.toString(10);
    document.getElementById("oct_input").value = x.toString(8);
    document.getElementById("thr_input").value = x.toString(32);
}
function thr() {
    y = document.getElementById("thr_input").value;
    x = parseInt(y, 32);
    document.getElementById("hex_input").value = x.toString(16);
    document.getElementById("dec_input").value = x.toString(10);
    document.getElementById("bin_input").value = x.toString(2);
}