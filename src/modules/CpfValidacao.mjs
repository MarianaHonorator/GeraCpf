export default class ValidarCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this,'cpfLimpo',{
            value: cpfEnviado.replace(/\D+/g, ''),
            configurable: false,
            enumerable: true
            
        })

    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        
        const cpfArray = [...this.cpfLimpo];
        if(this.isSequencia(this.cpfLimpo)) return false;
        const cpfSemDigitos = cpfArray.slice(0,9);
        // parametros: (cpfSemDigitos,(cpfArray.slice(0,9)) + 1)
        const digito1 = ValidarCPF.calculoTotal(cpfSemDigitos,1);
        // parametros: (cpfSemDigitos,(cpfArray.slice(0,9)) + 2)
        const digito2 = ValidarCPF.calculoTotal(cpfSemDigitos,2);

        return digito1 === Number(this.cpfLimpo[9]) && digito2 === Number(this.cpfLimpo[10])
        ?  "Cpf válido" : "Cpf inválido";


       
         


   
       
    }

    static calculoDigito(total){
        const digito = 11 - (total % 11);
        if(digito > 9) return 0;
        return digito;

    }

   static calculoTotal(cpfArray,length){
        
        const total = cpfArray.map((valor,index) => {
            let ac = (cpfArray.length + length) - index;
            valor = Number(valor) * ac;
            return valor;
        }).reduce((ac,valor) => ac += valor);
         
          return ValidarCPF.calculoDigito(total);

            
         }

    isSequencia(cpfLimpo){
        const sequencia = cpfLimpo[0].repeat(cpfLimpo.length);
        return (sequencia === cpfLimpo);

    }
         
            
        }
