let scoreHome = 0
let scoreGuest = 0

function addScore(team,points){
    if (team == "home"){
        scoreHome+=points
        document.getElementById("score-home").textContent=scoreHome
    } else if (team == "guest"){
        scoreGuest+=points
        document.getElementById("score-guest").textContent=scoreGuest
    }    
}