"use strict";

// settings to use with local storage
let settings = {
  darkMode: false,
  open: null,
  comment: "",
};

let mode = document.getElementsByClassName("mode");
let details = document.getElementsByTagName("details");
console.log(details);
let commentBox = document.getElementById("commentBox");
let openDetail = null;

function enterDarkMode() {
  let body = document.body;
  let welcome = document.getElementById("welcome");
  let button = document.getElementById("darkButton");
  body.classList.remove("light");
  welcome.classList.remove("light");
  body.classList.add("dark");
  welcome.classList.add("dark");
  button.setAttribute("checked", "checked");

  // the datta we want to save round to round
  settings.darkMode = true;

  // update value in localStorage:
  saveSettings()
}

function enterLightMode() {
  let body = document.body;
  let welcome = document.getElementById("welcome");
  let button = document.getElementById("lightButton");
  body.classList.remove("dark");
  welcome.classList.remove("dark");
  body.classList.add("light");
  welcome.classList.add("light");
  button.setAttribute("checked", "checked");

  // data to save in local storage:
  settings.darkMode = false;

  // update value in localStorage:
  saveSettings();
}

// put something into localStorage
function saveSettings() {
  console.log(settings);

  // pack it: turn the data into a string
  let stringify = JSON.stringify(settings);
  console.log(stringify)

  // label it (AKA key). Our is "settings"
  // store it
  localStorage.setItem('settings', stringify);
}

// function applySettings() {
//   // we get it using the key we picked (in this case 'settings');
//   let getSettings = localStorage.getItem('settings');
//   // unpack the data (change it back into JavaScript, not a string)
//   let parsedData = JSON.parse(getSettings);
//   console.log(parsedData);

//   // update the value of the global varriable setting
//   // with these new values
//   settings = parsedData;
// }

// get the data from localStorage
function pageLoad() {
  // we get it using the key we picked (in this case 'settings');
  let getSettings = localStorage.getItem('settings');

  // confirm that data was data was returned from localStorage
  if (getSettings) {
    console.log(getSettings);
    // applySettings();

    // unpack the data (change it back into JavaScript, not a string)
    let parsedData = JSON.parse(getSettings);
    console.log(parsedData);

    // update the value of the global varriable setting
    // with these new values
    settings = parsedData;

    if (settings.darkMode) {
      enterDarkMode();
    } else {
      enterLightMode();
    }
    if (settings.open !== null) {
      details[settings.open].setAttribute('open', 'open');
    }
    commentBox.value = settings.comment;
  } else {
    // if there is no data in localStorage, exist the function
    return;
  }

}

// add event listener to dark mode form
for (let i = 0; i < mode.length; i++) {
  mode[i].addEventListener("click", function () {
    // change styling of background and text color
    if (this.value === "dark") {
      enterDarkMode();
    }
    if (this.value === "light") {
      enterLightMode();
    }
  });
}

// add event listener to all details
for (let i = 0; i < details.length; i++) {
  details[i].addEventListener("click", function () {
    // store the open detail in localStorage
    if (settings.open === 1) {
      // guard clasue so that ddettails thtat get closed stay closed
      settings.open = null;
      saveSettings();
      return;
    }
    openDetail = i;
    settings.open = i
    saveSettings();
    // remove the 'open' attribute from other details
    for (let j = 0; j < details.length; j++) {
      if (j !== openDetail) {
        details[j].removeAttribute("open");
      }
    }
  });
}

commentBox.addEventListener('input', function () {
  settings.comment = commentBox.value;
  saveSettings();
});

// load the page with the saved settings
pageLoad();
