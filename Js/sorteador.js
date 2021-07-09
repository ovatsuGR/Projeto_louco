const submeterFormulario = () => {
    const rangeInicial = document.getElementById("RangeInicial").value;
    const rangeFinal = document.getElementById("RangeFinal").value;
    const MinhaAposta = document.getElementById("MinhaAposta").value;

    realizarsorteio(+rangeInicial, +rangeFinal, +MinhaAposta);
}
const realizarsorteio = (rangeInicial, rangeFinal, MinhaAposta) =>{

    if (!rangeInicial){
        alert('Informe o range inicial!');
        return;
    }

    if (!rangeFinal){
        alert('Informe o range final!');
        return;
    }

    if (!MinhaAposta){
        alert('Informe a sua aposta!');
        return;

    }

    const numerosorteado = novosorteio(rangeInicial, rangeFinal);
    if(numerosorteado === MinhaAposta){
        alert('Parabéns! Você acertou.');
        return;
    }


    alert(`Errou! O número sorteado foi ${numerosorteado}`);
}

const novosorteio = (rangeInicial, rangeFinal) => {
    return (Math.floor(Math.random() *(rangeFinal - rangeInicial + 1)) + rangeInicial);
}