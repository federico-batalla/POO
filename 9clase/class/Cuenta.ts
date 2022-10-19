import { Cliente } from "./Cliente";

export abstract class cuenta{
    protected numeroCuenta:number;
    protected saldo:number;
    protected cliente:Cliente;

    constructor(cliente:Cliente){
        this.numeroCuenta = cliente.getDni();
        this.saldo = 0;
        this.cliente = cliente;
    }

    getNumeroCuenta():number{
        return this.numeroCuenta;
    }

    getSaldo():number{
        return this.saldo;
    }

    
    getcliente():Cliente{
        return this.cliente;
    }

    private setNumeroCuenta(numeroCuenta:number):void{
        this.numeroCuenta = numeroCuenta;
    }

    private setSaldo(saldo:number):void{
        this.saldo = saldo;
    }

    setCliente(nombre:string,apellido:string,dni:number):void{
        this.cliente.setApellido(apellido);
        this.cliente.setNombre(nombre);
        this.cliente.setDni(dni);
        this.setNumeroCuenta(dni);
        
    }

    ingresar(monto:number):void{
        let aux:number=0;
        aux = this.getSaldo() + monto;
        this.setSaldo(aux);

    }

    abstract retirar(monto:number):void;

    abstract actualizarSaldo():void;

    


}



