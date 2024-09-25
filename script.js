let input=document.getElementById('input');
let btn=document.getElementById('btn');
let wrng=document.querySelector('.wrng');
let gusses=document.getElementById('gusses');
let ans=Math.floor(Math.random()*100)+1
console.log(ans)
let numGusses=0;
btn.addEventListener('click',()=>{
    gussesNumber();
})
function gussesNumber()
{
    if(input.value<1 || input.value>100 || isNaN(input.value)){
        wrng.innerHTML="Enter between 1 to 100";
        input.value="";
    }else{
        numGusses++;
        gusses.innerHTML="No.of Guess :"+numGusses;
        if(input.value>ans){
            wrng.innerHTML="You guesses too high!";
            input.value="";
        }else if(input.value<ans){
            wrng.innerHTML="You guesses too low!";
            input.value="";
        }else {
            wrng.innerHTML="congratulation🔥You guessed the correct answer"
            setTimeout(()=>{
                resetGame();
            },3000)
        }
    }
    
}
function resetGame()
{
    numGusses=0;
    ans=Math.floor(Math.random()*100)+1;
    input.value="";
    gusses.innerHTML="No. of Guess: 0";
    wrng.innerHTML="";
}