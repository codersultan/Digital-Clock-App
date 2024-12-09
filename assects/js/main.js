// get all data
const time = document.querySelector(".time");
const ampm = document.querySelector(".ampm");
const sound = document.querySelector(".sound");

// Digital clock function
const digitalClock = () => {
  clockInit = setInterval(() => {
    sound.play();

    // get current time
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    //Dynamic AM PM
    ampm.innerHTML = "AM";

    if (h > 12) {
      h = h - 12;
      ampm.innerHTML = "PM";
    } else if (h >= 12) {
      ampm.innerHTML = "PM";
    } else {
      ampm.innerHTML = "AM";
    }

    time.innerHTML = `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${
      s < 10 ? "0" + s : s
    }`;
  }, 1000);
};

digitalClock();

// Dark Mode
const darkBtn = document.querySelector(".dark-light");
const container = document.querySelector(".digital-clock");

darkBtn.onclick = () => {
  container.classList.toggle("dark");
};
