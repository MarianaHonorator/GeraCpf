import  ValidarCPF from "./CpfValidacao.mjs";

export default class GerarCPF{
    rand(min = 100000000, max = 999999999){
        return String(Math.ceil(Math.random() * (max - min) + min));
    }

    formatado(cpf){
        return(
        cpf.slice(0,3) + '.' +
        cpf.slice(3,6) + '.' +
        cpf.slice(6,9) + '-' +
        cpf.slice(9,11)
        );

    }

    
    geraNovoCpf(){
        const cpfSemDigitos = this.rand();
        const cpfSemDigitosArray = [...cpfSemDigitos];
        const digito1 = ValidarCPF.calculoTotal(cpfSemDigitosArray,1);
        cpfSemDigitosArray.push(digito1);
        const digito2 = ValidarCPF.calculoTotal(cpfSemDigitosArray,1);
        const cpfGerado = cpfSemDigitos + digito1 + digito2;
        return this.formatado(cpfGerado);
        

    }

}