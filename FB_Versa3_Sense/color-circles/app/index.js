/*
 * MIT License
 *
 * Copyright (c) 2026 Joshua Horvath
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import clock from "clock";
import * as document from "document";
import * as simpleSettings from "./simple/device-settings";

// Tick every second
clock.granularity = "seconds";

// Get a handle on GUI label elements
let hourHand = document.getElementById("hourHand");
let hourHandShadow = document.getElementById("hourHandShadow");
let minuteHand = document.getElementById("minuteHand");
let minuteHandShadow = document.getElementById("minuteHandShadow");
let secondHand = document.getElementById("secondHand");
let secondHandShadow = document.getElementById("secondHandShadow");
let circle_1hr = document.getElementById("circle_1hr");
let circle_2hr = document.getElementById("circle_2hr");
let circle_3hr = document.getElementById("circle_3hr");
let circle_4hr = document.getElementById("circle_4hr");
let circle_5hr = document.getElementById("circle_5hr");
let circle_6hr = document.getElementById("circle_6hr");
let circle_7hr = document.getElementById("circle_7hr");
let circle_8hr = document.getElementById("circle_8hr");
let circle_9hr = document.getElementById("circle_9hr");
let circle_10hr = document.getElementById("circle_10hr");
let circle_11hr = document.getElementById("circle_11hr");
let circle_12hr = document.getElementById("circle_12hr");
let oneLabel = document.getElementById("oneLabel");
let twoLabel = document.getElementById("twoLabel");
let threeLabel = document.getElementById("threeLabel");
let fourLabel = document.getElementById("fourLabel");
let fiveLabel = document.getElementById("fiveLabel");
let sixLabel = document.getElementById("sixLabel");
let sevenLabel = document.getElementById("sevenLabel");
let eightLabel = document.getElementById("eightLabel");
let nineLabel = document.getElementById("nineLabel");
let tenLabel = document.getElementById("tenLabel");
let elevenLabel = document.getElementById("elevenLabel");
let twelveLabel = document.getElementById("twelveLabel");
let monthLabel = document.getElementById("monthLabel");
let dayLabel = document.getElementById("dayLabel");

let showDate = false;

/**
 * Rotates the clock hands to show the curent time.
 */
function updateClock() {
  let today = new Date();
  let hours = today.getHours() % 12;
  let mins = today.getMinutes();
  let secs = today.getSeconds();

  hourHand.groupTransform.rotate.angle = hoursToAngle(hours, mins);
  hourHandShadow.groupTransform.rotate.angle = hoursToAngle(hours, mins);
  minuteHand.groupTransform.rotate.angle = minutesToAngle(mins);
  minuteHandShadow.groupTransform.rotate.angle = minutesToAngle(mins);
  secondHand.groupTransform.rotate.angle = secondsToAngle(secs);
  secondHandShadow.groupTransform.rotate.angle = secondsToAngle(secs);

  updateDate(today);
}

// Update the clock every tick event
clock.addEventListener("tick", updateClock);

/**
 * Returns an angle (0-360) for the current hour in the day.
 * Also adjust the hour hand for minutes past the hour.
 * @param {*} hours
 * @param {*} minutes
 * @returns
 */
function hoursToAngle(hours, minutes) {
  let hourAngle = (360 / 12) * hours;
  let minAngle = (360 / 12 / 60) * minutes;
  return hourAngle + minAngle;
}

/**
 * Returns an angle (0-360) for minutes
 * @param {*} minutes
 * @returns
 */
function minutesToAngle(minutes) {
  return (360 / 60) * minutes;
}

/**
 * Returns an angle (0-360) for seconds
 * @param {*} seconds
 * @returns
 */
function secondsToAngle(seconds) {
  return (360 / 60) * seconds;
}

/**
 * Updates date information displayed. 
 * @param {*} todayDate 
 */
function updateDate(todayDate) {

  if (!showDate) {
    monthLabel.text = "";
    dayLabel.text = "";
    return;
  }

  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const month = monthNames[todayDate.getMonth()];
  const dayOfMonth = todayDate.getDate();

  monthLabel.text = month;
  dayLabel.text = dayOfMonth;
}

/**
 * Get and process settings changes.
 * @param {*} data 
 * @returns 
 */
function settingsCallback(data) {
  if (!data) {
    return;
  }

  if (data.colorSelection !== undefined && data.colorSelection !== null) {
    console.log(data);
    console.log(data.colorSelection);
    console.log(data.showDate);

    switch (data.colorSelection) {
      case "Color Set 1":
        setColorSetOne();
        break;
      case "Color Set 2":
        setColorSetTwo();
        break;
      case "Color Set 3":
        setColorSetThree();
        break;
      case "Color Set 4":
        setColorSetFour();
        break;
      default:
        console.log("Unexpected value: " + data.colorSelection);
    }

    if (data.showDate !== undefined && data.showDate !== null) {
      showDate = data.showDate;
    }
    
  }
}
simpleSettings.initialize(settingsCallback);

function setColorSetOne() {
  oneLabel.style.fill = "white";
  twoLabel.style.fill = "white";
  threeLabel.style.fill = "white";
  fourLabel.style.fill = "white";
  fiveLabel.style.fill = "white";
  sixLabel.style.fill = "white";
  sevenLabel.style.fill = "white";
  eightLabel.style.fill = "white";
  nineLabel.style.fill = "white";
  tenLabel.style.fill = "white";
  elevenLabel.style.fill = "white";
  twelveLabel.style.fill = "white";

  circle_1hr.style.fill = "#053979";
  circle_2hr.style.fill = "#277397";
  circle_3hr.style.fill = "#439eb1";
  circle_4hr.style.fill = "#904247";
  circle_5hr.style.fill = "#dc8184";
  circle_6hr.style.fill = "#053979";
  circle_7hr.style.fill = "#277397";
  circle_8hr.style.fill = "#439eb1";
  circle_9hr.style.fill = "#904247";
  circle_10hr.style.fill = "#dc8184";
  circle_11hr.style.fill = "#277397";
  circle_12hr.style.fill = "#277397";
}

function setColorSetTwo() {
  oneLabel.style.fill = "black";
  twoLabel.style.fill = "black";
  threeLabel.style.fill = "black";
  fourLabel.style.fill = "black";
  fiveLabel.style.fill = "black";
  sixLabel.style.fill = "black";
  sevenLabel.style.fill = "black";
  eightLabel.style.fill = "black";
  nineLabel.style.fill = "black";
  tenLabel.style.fill = "black";
  elevenLabel.style.fill = "black";
  twelveLabel.style.fill = "black";

  circle_1hr.style.fill = "#01befe";
  circle_2hr.style.fill = "#ffdd00";
  circle_3hr.style.fill = "#ff7d00";
  circle_4hr.style.fill = "#ff006d";
  circle_5hr.style.fill = "#adff02";
  circle_6hr.style.fill = "#8f00ff";
  circle_7hr.style.fill = "#01befe";
  circle_8hr.style.fill = "#ffdd00";
  circle_9hr.style.fill = "#ff7d00";
  circle_10hr.style.fill = "#ff006d";
  circle_11hr.style.fill = "#adff02";
  circle_12hr.style.fill = "#8f00ff";
}

function setColorSetThree() {
  oneLabel.style.fill = "black";
  twoLabel.style.fill = "black";
  threeLabel.style.fill = "black";
  fourLabel.style.fill = "black";
  fiveLabel.style.fill = "black";
  sixLabel.style.fill = "black";
  sevenLabel.style.fill = "black";
  eightLabel.style.fill = "black";
  nineLabel.style.fill = "black";
  tenLabel.style.fill = "black";
  elevenLabel.style.fill = "black";
  twelveLabel.style.fill = "black";

  circle_1hr.style.fill = "#ff99c8";
  circle_2hr.style.fill = "#fec8c3";
  circle_3hr.style.fill = "#fcf6bd";
  circle_4hr.style.fill = "#d0f4de";
  circle_5hr.style.fill = "#a9def9";
  circle_6hr.style.fill = "#e4c1f9";
  circle_7hr.style.fill = "#ff99c8";
  circle_8hr.style.fill = "#ff99c8";
  circle_9hr.style.fill = "#fcf6bd";
  circle_10hr.style.fill = "#d0f4de";
  circle_11hr.style.fill = "#a9def9";
  circle_12hr.style.fill = "#e4c1f9";
}

function setColorSetFour() {
  oneLabel.style.fill = "black";
  twoLabel.style.fill = "black";
  threeLabel.style.fill = "black";
  fourLabel.style.fill = "black";
  fiveLabel.style.fill = "black";
  sixLabel.style.fill = "black";
  sevenLabel.style.fill = "black";
  eightLabel.style.fill = "black";
  nineLabel.style.fill = "black";
  tenLabel.style.fill = "black";
  elevenLabel.style.fill = "black";
  twelveLabel.style.fill = "black";

  circle_1hr.style.fill = "#0cb2af";
  circle_2hr.style.fill = "#a1c65d";
  circle_3hr.style.fill = "#fac723";
  circle_4hr.style.fill = "#f29222";
  circle_5hr.style.fill = "#e95e50";
  circle_6hr.style.fill = "#936fac";
  circle_7hr.style.fill = "#a1c65d";
  circle_8hr.style.fill = "#fac723";
  circle_9hr.style.fill = "#f29222";
  circle_10hr.style.fill = "#e95e50";
  circle_11hr.style.fill = "#e95e50";
  circle_12hr.style.fill = "#936fac";
}