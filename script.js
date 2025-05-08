function calcular() {
   
    const homens = parseInt(document.getElementById('homens').value) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;

    
    const consumo = {
        homens: {
            carne: 500,
            frango: 200,
            linguica: 200,
            refrigerante: 300,
            cerveja: 800
        },
        mulheres: {
            carne: 300,
            frango: 200,
            linguica: 200,
            refrigerante: 400,
            cerveja: 500
        },
        criancas: {
            carne: 200,
            frango: 100,
            linguica: 200,
            refrigerante: 200,
            cerveja: 0
        }
    };

    let totalCarne = (homens * consumo.homens.carne) + (mulheres * consumo.mulheres.carne) + (criancas * consumo.criancas.carne);
    let totalFrango = (homens * consumo.homens.frango) + (mulheres * consumo.mulheres.frango) + (criancas * consumo.criancas.frango);
    let totalLinguica = (homens * consumo.homens.linguica) + (mulheres * consumo.mulheres.linguica) + (criancas * consumo.criancas.linguica);
    let totalRefrigerante = (homens * consumo.homens.refrigerante) + (mulheres * consumo.mulheres.refrigerante) + (criancas * consumo.criancas.refrigerante);
    let totalCerveja = (homens * consumo.homens.cerveja) + (mulheres * consumo.mulheres.cerveja) + (criancas * consumo.criancas.cerveja);

   
    const carneKg = (totalCarne / 1000).toFixed(2);
    const frangoKg = (totalFrango / 1000).toFixed(2);
    const linguicaKg = (totalLinguica / 1000).toFixed(2);
    const refrigeranteLitros = (totalRefrigerante / 1000).toFixed(2);
    const cervejaLitros = (totalCerveja / 1000).toFixed(2);


    document.getElementById('carne').textContent = `Carne bovina: ${carneKg} kg`;
    document.getElementById('frango').textContent = `Frango: ${frangoKg} kg`;
    document.getElementById('linguica').textContent = `Linguiça: ${linguicaKg} kg`;
    document.getElementById('refrigerante').textContent = `Refrigerante: ${refrigeranteLitros} litros`;
    document.getElementById('cerveja').textContent = `Cerveja: ${cervejaLitros} litros`;

    document.getElementById('resultado').style.display = 'block';
}