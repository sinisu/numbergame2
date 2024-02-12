let computerNum=0
let game=false
let playButton=document.getElementById("play-button")
let userInput=document.getElementById("user-input")
let resultArea=document.getElementById("result-area")
let resetButton=document.getElementById("reset-button")
let history=[]
let chances=5
let chanceArea=document.getElementById("chance-area")

playButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus",function(){
    userInput.value=""
})

function pickNum(){
    computerNum=Math.floor(Math.random()*100)+1
    console.log("정답",computerNum)
}

function play(){
    let userValue=userInput.value
    if(userValue<1 || userValue>100){
        resultArea.textContent="너 바보야?"
        userInput.value=""
        return
    }

    if(history.includes(userValue)){
        resultArea.textContent="너 바보야?"
        return
    }

    chances --
    chanceArea.textContent=`이제 기회는 ${chances}번 뿐이야`

    if(userValue<computerNum){
        resultArea.textContent="UP"
    } else if(userValue>computerNum){
        resultArea.textContent="DOWN"
    } else{
        userInput.disabled=true
        resultArea.textContent="SUCCESS"
        chanceArea.textContent="축하해!"
        return
    }

    history.push(userValue)
    console.log(history)

    if(chances<1){
        game=true
        if(game==true){
            userInput.disabled=true
            chanceArea.textContent="저런.."
            resultArea.textContent="넌 끝났어!"
            return
        }
    }
}

function reset(){
    userInput.value=""
    chances=5
    history=[]
    pickNum()
    userInput.disabled=false
    chanceArea.textContent="넌 몇 번만에 맞출 수 있을 것 같아?"
    resultArea.textContent="할 수 있지?"
}


pickNum()