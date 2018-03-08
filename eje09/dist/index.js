"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alumno_1 = require("./alumno");
var prueba = new alumno_1.Alumno();
prueba.createAlunmno("14400916", "Francisco Emanuel", "Cardenas Ramos", 89, "H", "1995-12-12", true);
prueba.updateAlumno("14400916", "Francisco Emanuel ", "Cardenas", 90, "H", "1995-12-11", true);
prueba.deleteAlumno("14400916");
