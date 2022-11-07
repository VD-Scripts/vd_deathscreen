function secondsTommss(totalSeconds) {
  var hours = Math.floor(totalSeconds / 3600);
  var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
  var seconds = totalSeconds - (hours * 3600) - (minutes * 60);
  seconds = Math.round(seconds * 100) / 100

  return (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
}

$(document).ready(function(){
    $(".timer").hide();
    $(".buton2").hide();
    $("#discordcopy").hide();
});

let tare
window.addEventListener("message", function(event){
  let data = event.data
  if (data.type === "open") {
    document.getElementById("container").style.display = "block";
    if(data.killer === 0) {
      document.getElementById("killer").innerHTML = "CHIAR TU";
    } else {
      document.getElementById("killer").innerHTML = data.killer;
    }
    $(".buton2").hide();
    $(".timer").show();
    let bar = document.querySelector('#bar');
    let timeLimit = "180s";

    bar.style.animationDuration = timeLimit;
    let timerElement = document.getElementById("timer"), time = 180;
    tare = setInterval(function() {
      timerElement.innerHTML = secondsTommss(time);
      time--;
      if (time < 0) {
        window.clearInterval(tare);
        timerElement.innerHTML = '!';
        $(".timer").fadeOut("300ms");
        $(".text3").fadeOut("300ms");
        $(".buton2").show("300ms");
      }
    }, 1000);
    
  }
  if (data.type === "hide") {
    let timerElement = document.getElementById("timer");
    clearInterval(tare);
    timerElement.innerHTML = '!';

    document.getElementById("container").style.display = "none";
    $(".timer").hide();
    $(".buton2").hide();
    $("#discordcopy").hide();
  }
  if (data.type === "updateName") {
    document.getElementById("killer").innerHTML = data.killernervos;
  }
});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

function CallAdmin() {
  $.post('http://VDScripts_DeathScreen/calladmin', JSON.stringify({}));
}
function Respawn() {
  $.post('http://VDScripts_DeathScreen/respawn', JSON.stringify({}));
}