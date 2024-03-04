function calcular() {
    const alturaFrente = parseFloat(document.getElementById('alturaFrente').value);
    const alturaVerso = parseFloat(document.getElementById('alturaVerso').value);
    const larguraFrente = parseFloat(document.getElementById('larguraFrente').value);
    const larguraVerso = parseFloat(document.getElementById('larguraVerso').value);

    if (!isNaN(alturaFrente)) {
        const result = 150 - alturaFrente;
        const division = result / 2;
        document.getElementById('acimaFrente').innerText = division + ' mm';
        document.getElementById('meioFrente').innerText = alturaFrente + ' mm';
        document.getElementById('abaixoFrente').innerText = division + ' mm';
        document.getElementById('frenteLargura').innerText = larguraFrente + ' mm';
    } else {
        alert('Valor inválido');
    }

    if (!isNaN(alturaVerso)) {
        const result = 150 - alturaVerso;
        const division = result / 2;
        document.getElementById('acimaVerso').innerText = division + ' mm';
        document.getElementById('meioVerso').innerText = alturaVerso + ' mm';
        document.getElementById('abaixoVerso').innerText = division + ' mm';
        document.getElementById('versoLargura').innerText = larguraVerso + ' mm';
    } else {
        alert('Valor inválido');
    }
}