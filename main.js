var hourEl = document.getElementById("clock");
var minuteEl = document.getElementById("minute");
var secondEl = document.getElementById("second");
var pmamEl = document.getElementById("pmam");

function updateHour() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let pmam = "AM";

  if (h > 12) {
    h = h - 12;
    pmam = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  pmamEl.innerText = pmam;

  setTimeout(() => {
    updateHour();
  }, 1000);
}

updateHour();
