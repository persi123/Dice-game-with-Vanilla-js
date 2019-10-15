var scores = [0, 0],
  dice_data = [0, 0],
  score,
  limit = 0,
  roundscore,
  gameplaying;
activeplayer = 0;

function init() {
  score = 0;
  roundscore = 0;
  gameplaying = true;
  activeplayer = 0;
  document.querySelector(".player-0").textContent = "player 1";
  document.querySelector(".player-1").textContent = "player 2";
  document.querySelector(".player_score-0").textContent = "0";
  document.querySelector(".player_score-1").textContent = "0";
  document.querySelector(".current_score-0").textContent = "0";
  document.querySelector(".current_score-1").textContent = "0";
  document.querySelector(".player0").classList.remove("active");
  document.querySelector(".player1").classList.remove("active");
  document.querySelector(".player0").classList.add("active");
  document.querySelector(".player1").classList.remove("active");
  document.querySelector(".dice_img").style.display = "none";
  document.querySelector(".limit").value = "0";
}

init();
document.querySelector(".limit").value = "0";
document.querySelector(".submit").addEventListener("click", function() {
  limit = document.querySelector(".limit").value;
});
document.querySelector(".roll").addEventListener("click", function() {
  if (gameplaying) {
    document.querySelector(".dice_img").style.display = "block";
    var Dice = Math.floor(Math.random() * 6) + 1;
    for (i = 0; i < dice_data.length; i++) {
      dice_data[i] = Dice;
    }

    var img_dom = document.querySelector(".dice_img");
    img_dom.src = "dice" + Dice + ".jpg";

    if (Dice !== 1 && (dice_data[0] !== 6 && dice_data[1]) !== 6) {
      roundscore += Dice;
      document.querySelector(
        ".current_score-" + activeplayer
      ).textContent = roundscore;
    } else {
      NextPlayer();
    }
  }
});

document.querySelector(".hold").addEventListener("click", function() {
  document.querySelector(".dice_img").style.display = "none";
  scores[activeplayer] += roundscore;
  if (gameplaying) {
    // scores[activeplayer] += roundscore;
    if (scores[activeplayer] >= limit) {
      document.querySelector(".player-" + activeplayer).textContent = "Winner!";
      document.querySelector(".player" + activeplayer).classList.add("winner");
      document.querySelector(".player0").classList.remove("active");
      document.querySelector(".player1").classList.remove("active");
      gameplaying = false;
    } else {
      document.querySelector(".player_score-" + activeplayer).textContent =
        scores[activeplayer];
      NextPlayer();
    }
  }
});

function NextPlayer() {
  roundscore = 0;
  activeplayer === 1 ? (activeplayer = 0) : (activeplayer = 1);
  document.querySelector(".player0").classList.toggle("active");
  document.querySelector(".player1").classList.toggle("active");
  document.querySelector(".current_score-0").textContent = "0";
  document.querySelector(".current_score-1").textContent = "0";
}

document.querySelector(".newgame").addEventListener("click", init);
