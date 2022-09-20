var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.getBase = function () {
        return this.base;
    };
    Rectangulo.prototype.setBase = function (base) {
        this.base = base;
    };
    Rectangulo.prototype.getAltura = function () {
        return this.altura;
    };
    Rectangulo.prototype.setAltura = function (altura) {
        this.altura = altura;
    };
    Rectangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    Rectangulo.prototype.compararRectangulo = function (rectangulo2) {
        var areaRectangulo1 = this.base * this.altura;
        var areaRectangulo2 = rectangulo2.calcularArea();
        if (areaRectangulo1 > areaRectangulo2) {
            return 1;
        }
        else {
            if (areaRectangulo1 < areaRectangulo2) {
                return -1;
            }
            else {
                return 0;
            }
        }
    };
    Rectangulo.prototype.esCuadrado = function () {
        if (this.altura == this.base) {
            return true;
        }
        else {
            return false;
        }
    };
    Rectangulo.prototype.estaAcostado = function () {
        if (this.altura > this.base) {
            return false;
        }
        else {
            return true;
        }
    };
    return Rectangulo;
}());
var rectangulo1 = new Rectangulo(2, 3);
var rectangulo2 = new Rectangulo(3, 1);
var rectangulo3 = new Rectangulo(2, 3);
var rectangulo4 = new Rectangulo(3, 3);
console.log("area de rectangulo 1: " + rectangulo1.calcularArea());
console.log("area de rectangulo 2: " + rectangulo2.calcularArea());
console.log("area de rectangulo 3: " + rectangulo3.calcularArea());
console.log("area de rectangulo 4: " + rectangulo4.calcularArea());
console.log("compara rcetangulo 1 con rectangulo 2 : " + rectangulo1.compararRectangulo(rectangulo2));
console.log("compara rcetangulo 1 con rectangulo 3 : " + rectangulo1.compararRectangulo(rectangulo3));
console.log("compara rcetangulo 1 con rectangulo 4 : " + rectangulo1.compararRectangulo(rectangulo4));
console.log("rcetangulo 4 es cuadrado? : " + rectangulo4.esCuadrado());
console.log("rectangulo 1 es cuadrado? : " + rectangulo1.esCuadrado());
console.log("rectangulo 2 esta acostado? : " + rectangulo2.estaAcostado());
console.log("rcetangulo 1 esta Acostado?" + rectangulo1.estaAcostado());
