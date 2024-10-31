var minute=0;
var second=0;
var millisecond=0;


var getmin=document.getElementById('min')
var getsecond=document.getElementById('sec')
var getmillisecond=document.getElementById('msec');
var setInterval;
function start(){
 interval =setInterval(function(){
    millisecond++
    getmillisecond.innerHTML=millisecond
    if(millisecond<=100){
        second++
        getsecond.innerHTML=second
        millisecond=0;
    }else if(second>=5){
         minute++
         getmin.innerHTML=minute
         second=0;
    }
},10)

document.getElementById('sss').ariaDisabled=true;
}

function stop(){

    clearInterval(interval)
    document.getElementById('sss').ariaDisabled=false;
}


function reset(){
    minute=0;
    millisecond =0;
    second=0;
    getmillisecond.innerHTML=minute
    getmillisecond.innerHTML=second
    getmillisecond.innerHTML=millisecond

}








var minute = 0; // Minute ka initial value 0 set karte hain.
var second = 0; // Second ka initial value 0 set karte hain.
var millisecond = 0; // Millisecond ka initial value 0 set karte hain.

var getmin = document.getElementById('min'); // 'min' ID se minute element ko lete hain.
var getsecond = document.getElementById('sec'); // 'sec' ID se second element ko lete hain.
var getmillisecond = document.getElementById('msec'); // 'msec' ID se millisecond element ko lete hain.
var interval; // Interval variable declare karte hain.

function start() { // Start function define karte hain.
    interval = setInterval(function() { // Interval set karte hain jo har 10 milliseconds mein chalega.
        millisecond++; // Millisecond ko 1 se badhate hain.
        getmillisecond.innerHTML = millisecond; // Millisecond ko display karte hain.

        if (millisecond >= 100) { // Agar millisecond 100 ho jaye:
            second++; // Second ko 1 se badhate hain.
            getsecond.innerHTML = second; // Second ko display karte hain.
            millisecond = 0; // Millisecond ko reset karte hain.
        }

        if (second >= 5) { // Agar second 5 ya zyada ho jaye:
            minute++; // Minute ko 1 se badhate hain.
            getmin.innerHTML = minute; // Minute ko display karte hain.
            second = 0; // Second ko reset karte hain.
        }
    }, 10); // Ye sab 10 milliseconds ke baad hota hai.

    document.getElementById('sss').disabled = true; // Start button ko disable karte hain.
}

function stop() { // Stop function define karte hain.
    clearInterval(interval); // Interval ko clear karte hain.
    document.getElementById('sss').disabled = false; // Start button ko enable karte hain.
}

function reset() { // Reset function define karte hain.
    minute = 0; // Minute ko reset karte hain.
    second = 0; // Second ko reset karte hain.
    millisecond = 0; // Millisecond ko reset karte hain.
    getmin.innerHTML = minute; // Reset minute ko display karte hain.
    getsecond.innerHTML = second; // Reset second ko display karte hain.
    getmillisecond.innerHTML = millisecond; // Reset millisecond ko display karte hain.
}
