// class game {
//   constructor(userInput, num) {
//     this.userInput = userInput;
//     this.num = num;
//   }
//   computerPlay() {
//     let num = Math.floor(Math.random() * 10);
//     if (num <= 3) {
//       console.log("rock");
//       document.getElementById("result").innerHTML = "Rock";
//     } else if (num > 4 && num < 7) {
//       console.log("scissors");
//       document.getElementById("result").innerHTML = "Scissors";
//     } else {
//       console.log("paper");
//       document.getElementById("result").innerHTML = "Paper";
//     }
//   }
// }
// let go = new game(8);
// console.log(go);

function computerPlay(e) {
  e.preventDefault();
  let num = Math.floor(Math.random() * 10);

  if (num <= 3) {
    document.getElementById("result").innerHTML = "Rock";
    document.getElementById(
      "box"
    ).innerHTML = ` <img src="/img/rock.png" id="img" class="card-img-top border" alt="pic" height="300px" width="320px">`;
  } else if (num > 4 && num < 7) {
    document.getElementById("result").innerHTML = "Scissors";
    document.getElementById(
      "box"
    ).innerHTML = ` <img src="/img/scissors.png" id="img" class="card-img-top border" alt="pic" height="300px" width="320px">`;
  } else {
    document.getElementById("result").innerHTML = "Paper";
    document.getElementById(
      "box"
    ).innerHTML = ` <img src="/img/paper.png" id="img" class="card-img-top border" alt="pic" height="300px" width="320px">`;
  }
}

let btn = document.getElementById("btn");
btn.addEventListener("click", computerPlay);
let Inputnum = document.getElementById("Inputnum");
Inputnum.addEventListener("input", () => {
  if (Inputnum.value > 10) {
    document.getElementById("error").innerHTML = "Error";
  } else {
    document.getElementById("error").innerHTML = "";
  }

  if (Inputnum.value <= 3) {
  }
});
