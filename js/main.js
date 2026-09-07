//TX pls do this part Lol
const btn = document.getElementById("btn");
const display = document.getElementById("display");
const sc = document.getElementById("score");
let score = 0
btn.onclick = clicked
function clicked() {
    score ++;
    sc.textContent = `${suffix(score)}`
    console.log(score);

}
//this is a part for the sc display
let time = 0;
function animate_sc(){
    time += 0.1
    const deg = Math.sin(time) * 2;
    //const y = Math.sin(time *0.2);
    const x = Math.sin(time * 0.5);
    //sc.style.top = `${15 +y}%`
    display.style.left = `${50 +x}%`
    display.style.transform = `translate(${-50}%, ${-50}%) rotate(${deg}deg)`

    requestAnimationFrame(animate_sc);
}
animate_sc();
function suffix(n){
    if(n < 1000){
        return String(n);
    }
    const suffixes = ["k", "m", "b", "t"];
    let index = -1;
    while(n >= 1000){
        n /= 1000;
        index ++;
    }
    return `${n.toFixed(2)}${suffixes[index]}`
}