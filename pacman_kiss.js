$play = document.getElementById("button");
$ghost = document.getElementById("ghost");
$pacman = document.getElementById("mouth");
$joue_d = document.getElementById("joue_right");
$joue_g = document.getElementById("joue_left");
$love = document.getElementById("love");

$play.onclick = action;

function action() {
  $ghost.classList.add("action");
  $pacman.classList.add("action_pacman");
  $joue_d.classList.add("action_joue_right");
  $joue_g.classList.add("action_joue_left");
  $love.classList.add("action_love");
}
