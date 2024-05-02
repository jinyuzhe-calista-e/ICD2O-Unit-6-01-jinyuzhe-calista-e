// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Calista.E
// Created on: May 2024
// This file contains the JS functions for index.html
"use strict"

function calculate() {
  const age = parseInt(document.getElementById("age").value)
  const day = parseInt(document.getElementById("day").value)

  if ( (day == "Saturday" || day == "Sunday") || age > 12 && age < 21 ) {
    document.getElementById("answer").innerHTML =
      "You're get the student pricing!"
  } else {
    document.getElementById("answer").innerHTML =
      "You myst pay regular price."
  }
}