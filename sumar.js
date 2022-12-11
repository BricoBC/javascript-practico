const btnCalcular = document.getElementById('btnCalcular');
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');

const p = document.getElementById('res');

function btnOnClic(){
    let res = Number(n1.value) + Number(n2.value);
    n1.innerText = "";
    n2.innerText = "";
    p.innerHTML ="Resultado " + String(res);
    console.log("Listo");
}
