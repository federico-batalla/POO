"use strict";
exports.__esModule = true;
var Jugador_1 = require("./class/Jugador");
var delantero = new Jugador_1.Jugador("Enzo", "Perez", 34334935, "01/01/1989", "Delantero");
var defensor = new Jugador_1.Jugador("Matias ", "Maidana", 35162369, "04/01/1995", "Defensor");
var arquero = new Jugador_1.Jugador("Franco", "Armani", 57487229, "01/08/1988", "Arquero");
console.log(delantero.toString());
console.log(defensor.toString());
console.log(arquero.toString());
