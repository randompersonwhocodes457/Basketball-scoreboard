const homeScore = document.getElementById('home-score')
const guestScore = document.getElementById('guest-score')
let homescore = 0
let guestscore = 0
homeScore.textContent = homescore
guestScore.textContent = guestscore

function addhOne(){
    homescore++
    homeScore.textContent = homescore
    if(homescore > 99){
        homeScore.style.fontSize = '75px'
    }
    if(homescore > guestscore){
        homeScore.style.color = '#F94F6D'
        guestScore.style.color = '#fff'
    } else{
        guestScore.style.color = '#F94F6D'
        homeScore.style.color = '#fff'
    }
}

function addhTwo(){
    homescore = homescore + 2
    homeScore.textContent = homescore
    if(homescore > 99){
        homeScore.style.fontSize = '75px'
    }
    if(homescore > guestscore){
        homeScore.style.color = '#F94F6D'
        guestScore.style.color = '#fff'
    } else{
        guestScore.style.color = '#F94F6D'
        homeScore.style.color = '#fff'
    }
}

function addhThree(){
    homescore = homescore + 3
    homeScore.textContent = homescore
    if(homescore > 99){
        homeScore.style.fontSize = '75px'
    }
    if(homescore > guestscore){
        homeScore.style.color = '#F94F6D'
        guestScore.style.color = '#fff'
    } else{
        guestScore.style.color = '#F94F6D'
        homeScore.style.color = '#fff'
    }
}

function addgOne(){
    guestscore++
    guestScore.textContent = guestscore
    if(guestscore > 99){
        guestScore.style.fontSize = '75px'
    }
    if(homescore > guestscore){
        homeScore.style.color = '#F94F6D'
        guestScore.style.color = '#fff'
    } else{
        guestScore.style.color = '#F94F6D'
        homeScore.style.color = '#fff'
    }
}

function addgTwo(){
    guestscore = guestscore + 2
    guestScore.textContent = guestscore
    if(guestscore > 99){
        guestScore.style.fontSize = '75px'
    }
    if(homescore > guestscore){
        homeScore.style.color = '#F94F6D'
        guestScore.style.color = '#fff'
    } else{
        guestScore.style.color = '#F94F6D'
        homeScore.style.color = '#fff'
    }
}

function addgThree(){
    guestscore = guestscore + 3
    guestScore.textContent = guestscore
    if(guestscore > 99){
        guestScore.style.fontSize = '75px'
    }
    if(homescore > guestscore){
        homeScore.style.color = '#F94F6D'
        guestScore.style.color = '#fff'
    } else{
        guestScore.style.color = '#F94F6D'
        homeScore.style.color = '#fff'
    }
}