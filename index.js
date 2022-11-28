let homeScore = 0
let guestScore = 0

let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")

homeEl.textContent = homeScore
guestEl.textContent = guestScore

function plus(team, pointValue) {
    if (team === 'home') {
        homeScore += pointValue
        homeEl.textContent = homeScore
    } else if ( team === 'guest') {
        guestScore += pointValue
        guestEl.textContent = guestScore
    }
}
