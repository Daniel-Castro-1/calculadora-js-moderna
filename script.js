const principal = document.querySelector('.principal')
const secundario = document.querySelector('.secundario')
const operaçao = document.querySelector('select')
const paragrafo = document.querySelector('.resultado')



function resolva() {

    const n1 = Number(principal.value)
    const n2 = Number(secundario.value)
    const op = operaçao.value
    const p = paragrafo


    if (op == 'divisao' && n2 == 0) {
        alert('Não da para dividir por 0')


    } else {
        p.innerHTML =  n1 / n2





    if (op == 'adiçao') {

       p.innerHTML =  n1 + n2

    }

    if (op == 'subtraçao') {
         p.innerHTML = n1 - n2
    }

    if (op == 'multiplicaçao') { p.innerHTML = n1 * n2 }

    

    }


}

operaçao.addEventListener('change',resolva);
principal.addEventListener('input',resolva)
secundario.addEventListener('input',resolva)
