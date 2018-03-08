"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alumno = /** @class */ (function () {
    function Alumno() {
        this.arreglo = Array();
    }
    Alumno.prototype.createAlunmno = function (nc, n, a, p, g, f, act) {
        var arreglo2;
        arreglo2 = {
            noControl: nc,
            nombre: n,
            apellido: a,
            promedio: p,
            genero: g,
            fechaNacimiento: f,
            activo: act
        };
        this.arreglo.push(arreglo2);
        this.ver();
    };
    Alumno.prototype.ver = function () {
        for (var i = 0; i < this.arreglo.length; i++) {
            console.log(this.arreglo[i]);
        }
    };
    Alumno.prototype.deleteAlumno = function (nc) {
        for (var i = 0; i < this.arreglo.length; i++) {
            if (this.arreglo[i].noControl == nc) {
                this.arreglo.splice(i, 1);
            }
        }
        this.ver();
    };
    Alumno.prototype.updateAlumno = function (nc, n, a, p, g, f, act) {
        var arreglo3;
        arreglo3 = { noControl: nc,
            nombre: n,
            apellido: a,
            promedio: p,
            genero: g,
            fechaNacimiento: f,
            activo: act };
        for (var i = 0; i < this.arreglo.length; i++) {
            if (this.arreglo[i].noControl == nc) {
                this.arreglo[i] = arreglo3;
            }
        }
        this.ver();
    };
    return Alumno;
}());
exports.Alumno = Alumno;
