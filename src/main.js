import GerarCPF from './modules/GeraCpf.mjs';
import './assets/css/style.css';

const botaoGerar = document.querySelector('.botao-gerar')

botaoGerar.addEventListener('click',(e)=>{

const gera = new GerarCPF();
const cpfGerado = document.querySelector('.cpf-gerado');
cpfGerado.innerHTML = gera.geraNovoCpf();

});
