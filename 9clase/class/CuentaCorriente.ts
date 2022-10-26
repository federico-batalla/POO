import { Cliente } from "./Cliente";
import { Cuenta } from "./Cuenta";

export class CuentaCorriente extends Cuenta{

    constructor(cliente:Cliente){
        super(cliente);
        
    }

    retirar(monto: number):string {
        if(this.getSaldo() >= monto){
        let aux:number= 0;
        aux = this.getSaldo()-monto;
        this.setSaldo(aux);
        return "se retiro con exito"
        }else{
            return "Saldo Insuficiente"
        }
    }

    

    actualizarSaldo(): void {
        let interes :number = 0;
        let aux:number = 0;
        interes = (this.getSaldo()* 1.5)/100;
        aux = this.getSaldo() + interes;
        this.setSaldo(aux);

    }
       
    toString():string{
        return  "Cuenta Corriente"+"\n"+
                "Cliente: "+this.cliente.toString() +"\n"+
                "N° de Cuenta: "+this.getNumeroCuenta()+"\n"+
                "Saldo: "+this.getSaldo()+"\n";
    }



}