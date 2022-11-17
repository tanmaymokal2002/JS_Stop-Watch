let [mili, sec, mini, hrs] = [0, 0, 0, 0];
let num = null;

//Start Timer:
document.getElementById('startTimer').addEventListener('click',() => {
    if(num!==null){
        clearInterval(num);
    }
    num = setInterval(displayTimer, 10);
})

//Pause Timer:
document.getElementById('pauseTimer').addEventListener('click',() => {
    clearInterval(num);
})

//Stop Timer:
document.getElementById('stopTimer').addEventListener('click',() => {
    clearInterval(num);
    [mili, sec, mini, hrs] = [0, 0, 0, 0];
    document.getElementById('time').innerHTML = '00 : 00 : 00 : 000';
})


// Main Display Timer Function:
function displayTimer() {
    mili += 10;
    if(mili === 1000){
        mili = 0;
        sec++;
        if(sec === 60){
            sec = 0;
            mini++;
            if(mini === 60){
                mini = 0;
                hrs++;
            }
        }
    }

    // /Setting zeroes before Nums:

    let h = hrs < 10 ? "0" + hrs : hrs;
    let m = mini < 10 ? "0" + mini : mini;
    let s = sec < 10 ? "0" + sec : sec;
    let ms = mili < 10 ? "00" + mili : mili < 100 ? "0" + mili : mili;

    document.getElementById('time').innerHTML = `${h} : ${m} : ${s} : ${ms}`;

}