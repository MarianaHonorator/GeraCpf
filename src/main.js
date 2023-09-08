// para rodar em navegadores mais antigos
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import GerarCPF from './modules/GeraCpf.mjs';
import './assets/css/style.css';

const botaoGerar = document.querySelector('.botao-gerar')
const cpfGerado = document.querySelector('.cpf-gerado');
cpfGerado.innerHTML = "000.000.000-00"

botaoGerar.addEventListener('click',(e)=>{

const gera = new GerarCPF();
 cpfGerado.innerHTML = gera.geraNovoCpf();

});
