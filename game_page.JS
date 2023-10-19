player1Name=localStorage.getItem("player1Name")
player2Name=localStorage.getItem("player2Name")
player1Score=0
player2Score=0
document.getElementById("player1Name").innerHTML=player1Name+":"
document.getElementById("player2Name").innerHTML=player2Name+":"

document.getElementById("player1Score").innerHTML=player1Score
document.getElementById("player2Score").innerHTML=player2Score

document.getElementById("playerQuestion").innerHTML= "turno de pergunta:"+player1Name
document.getElementById("playerAnswer").innerHTML= "turno de resposta:"+player2Name

function send(){
getword=document.getElementById("word").value
word=getword.toLowerCase()
charat1=word.charAt(1)
divide=Math.floor(word.length/2)
charat2=word.charAt(divide)
menus1=word.length-1
charat3=word.charAt(menus1)
remove1=word.replace(charat1, "*")
remove2=remove1.replace(charat2, "*")
remove3=remove2.replace(charat3, "*")
question_word = "<h4 id='wordDisplay'> P. "+remove3+"</h4>";
inputbox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
row=question_word + inputbox + checkButton
document.getElementById("output").innerHTML=row
document.getElementById("word").value="" 
}
 questionturn="player1"
 answerturn="player2"
 function check(){
getanswer=document.getElementById("inputCheckBox").value
answer=getanswer.toLowerCase()
if(answer==word) {
if  (answerturn=="player1"){
    player1Score=player1Score+1
    document.getElementById("player1Score").innerHTML=player1Score
    
}
else{
    player2Score=player2Score+1
    document.getElementById("player1Score").innerHTML=player2Score
}
}
if  (questionturn=="player1"){
    questionturn="player2"
     document.getElementById("playerQuestion").innerHTML= "turno de pergunta:"+player2Name
     
 }
 else{
     questionturn="player1"
     document.getElementById("playerQuestion").innerHTML= "turno de pergunta:"+player1Name
 }
if  (answerturn=="player1"){
   answerturn="player2"
    document.getElementById("playerAnswer").innerHTML= "turno de resposta:"+player2Name
    
}
else{
    answerturn="player1"
    document.getElementById("playerAnswer").innerHTML= "turno de resposta:"+player1Name
}

 document.getElementById("output").innerHTML=""
 }
