class Rectangulo {
    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;

    }

    getBase(): number {
        return this.base;
    }

    setBase(base: number): void {
        this.base = base;
    }

    getAltura(): number {
        return this.altura;
    }

    setAltura(altura: number): void {
        this.altura = altura;
    }

    public calcularArea(): number {
        return this.base * this.altura;
    }

    public compararRectangulo(rectangulo2: Rectangulo): number {
        let areaRectangulo1 = this.base * this.altura;
        let areaRectangulo2 = rectangulo2.calcularArea();
        if (areaRectangulo1 > areaRectangulo2) {
            return 1;
        } else {
            if (areaRectangulo1 < areaRectangulo2) {
                return -1;
            } else {
                return 0;
            }
        }
    }

    public esCuadrado():boolean{
        if(this.altura == this.base){
            return true;
        }else{
            return false;
        }
    }

    public estaAcostado():boolean{
        if(this.altura > this.base){
            return false;
        }else{
            return true;
        }
    }

}

let rectangulo1 = new Rectangulo(2, 3);
let rectangulo2 = new Rectangulo(3, 1);
let rectangulo3 = new Rectangulo(2, 3);
let rectangulo4 = new Rectangulo(3,3);


console.log("area de rectangulo 1: "+rectangulo1.calcularArea());
console.log("area de rectangulo 2: "+rectangulo2.calcularArea());
console.log("area de rectangulo 3: "+rectangulo3.calcularArea());
console.log("area de rectangulo 4: "+rectangulo4.calcularArea());


console.log("compara rcetangulo 1 con rectangulo 2 : "+rectangulo1.compararRectangulo(rectangulo2));
console.log("compara rcetangulo 1 con rectangulo 3 : "+rectangulo1.compararRectangulo(rectangulo3));
console.log("compara rcetangulo 1 con rectangulo 4 : "+rectangulo1.compararRectangulo(rectangulo4));

console.log( "rectangulo 4 es cuadrado? : "+rectangulo4.esCuadrado());
console.log( "rectangulo 1 es cuadrado? : "+rectangulo1.esCuadrado());

console.log ("rectangulo 2 esta acostado? : "+rectangulo2.estaAcostado());
console.log ("rcetangulo 1 esta Acostado? :"+rectangulo1.estaAcostado());