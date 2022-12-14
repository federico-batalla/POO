import { Cliente } from "./Cliente";
import { Cuenta } from "./Cuenta";

export class CuentaAhorro extends Cuenta{
    
    private porcentajeInteres:number;

    constructor(cliente:Cliente,porcentajeInteresInicial:number){
        super(cliente);
        this.porcentajeInteres= porcentajeInteresInicial;
        

    }

    private getPorcentajeInteres():number{
        return this.porcentajeInteres;
    }

    private setPorcentajeInteres(porcentaje:number){
        this.porcentajeInteres = porcentaje;
    }

    
    
    private retiro(monto: number): void {
            let aux:number= 0;
            aux = this.getSaldo()-monto;
            this.setSaldo(aux);
    
    }

    retirar(monto: number):string {
        if(this.getSaldo()>monto){
            this.retiro(monto);
            return "retiro Exitoso"
        }else{
            return"Exede el monto maximo de retiro"
        }
    }

    actualizarSaldo(porcentaje:number): void {
    let aux:number = 0;
    let interes:number =0;
    interes = (this.getSaldo()*porcentaje )/100;
    aux = this.getSaldo() + interes;
    this.setSaldo(aux);
    this.setPorcentajeInteres(porcentaje);


    }

    toString():string{
        return  "Cuenta Ahorro"+"\n"+
                "Cliente: "+this.cliente.toString() +"\n"+
                "N° de Cuenta: "+this.getNumeroCuenta()+"\n"+
                "Saldo: "+this.getSaldo()+"\n"+
                "Interes: "+this.getPorcentajeInteres()+"%"+"\n";
    }


}