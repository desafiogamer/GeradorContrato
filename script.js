document.getElementById('downloadFicha').addEventListener('click', function () {
    // Pegar os valores de cada input
    var nome = document.getElementById('nome').value;
    var cidade = document.getElementById('cidade').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var rg = document.getElementById('rg').value;
    var cpf = document.getElementById('cpf').value;
    var telefoneFixo = document.getElementById('telefoneFixo').value;
    var telefone = document.getElementById('telefone').value;
    var cep = document.getElementById('cp').value;
    var rua = document.getElementById('rua').value;
    var bairro = document.getElementById('bairro').value;
    var numeroCasa = document.getElementById('numeroCasa').value;
    var email = document.getElementById('email').value;
    var dataEmissao = document.getElementById('emissao').value;
    var curso = document.getElementById('curso').value;

    // Inserir os valores no conteúdo do PDF da Ficha
    document.getElementById('fichaCurso').textContent = curso;
    document.getElementById('fichaNome').textContent = nome;
    document.getElementById('fichaNascimento').textContent = dataNascimento;
    document.getElementById('fichaCpf').textContent = cpf;
    document.getElementById('fichaCep').textContent = cep;
    document.getElementById('fichaEndereço').textContent = rua;
    document.getElementById('fichaNumeroCasa').textContent = numeroCasa;
    document.getElementById('fichaBairro').textContent = bairro;
    document.getElementById('fichaCidade').textContent = cidade;
    document.getElementById('fichaEmail').textContent = email;
    document.getElementById('fichaTelefone').textContent = telefone;
    document.getElementById('fichaTelefoneFixo').textContent = telefoneFixo;
    document.getElementById('fichaNomeTwo').textContent = nome;

    var contentTwoDiv = document.getElementById('contentTwo');
    contentTwoDiv.classList.remove('hidden');

    var opt = {
        filename: 'Ficha.pdf',
        image: { type: 'jpeg', quality: 0.75 }, // Reduzir a qualidade da imagem
        html2canvas: { scale: 1 }, // Reduzir a escala
    };

    html2pdf().from(contentTwoDiv).set(opt).save().then(() => {
        contentTwoDiv.classList.add('hidden');
    });
});

document.getElementById('downloadContrato').addEventListener('click', function () {
    // Pegar os valores de cada input
    var nome = document.getElementById('nome').value;
    var cidade = document.getElementById('cidade').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var rg = document.getElementById('rg').value;
    var cpf = document.getElementById('cpf').value;
    var telefoneFixo = document.getElementById('telefoneFixo').value;
    var telefone = document.getElementById('telefone').value;
    var cep = document.getElementById('cp').value;
    var rua = document.getElementById('rua').value;
    var bairro = document.getElementById('bairro').value;
    var numeroCasa = document.getElementById('numeroCasa').value;
    var email = document.getElementById('email').value;
    var dataEmissao = document.getElementById('emissao').value;

    // Inserir os valores no conteúdo do PDF do Contrato
    document.getElementById('pdf-nome').textContent = nome;
    document.getElementById('pdf-nomeTwo').textContent = nome;
    document.getElementById('pdf-cidade').textContent = cidade;
    document.getElementById('pdf-dataNascimento').textContent = dataNascimento;
    document.getElementById('pdf-rg').textContent = rg;
    document.getElementById('pdf-cpf').textContent = cpf;
    document.getElementById('pdf-telefoneFixo').textContent = telefoneFixo;
    document.getElementById('pdf-telefone').textContent = telefone;
    document.getElementById('pdf-cp').textContent = cep;
    document.getElementById('pdf-rua').textContent = rua;
    document.getElementById('pdf-bairro').textContent = bairro;
    document.getElementById('pdf-numeroCasa').textContent = numeroCasa;
    document.getElementById('pdf-email').textContent = email;
    document.getElementById('pdfEmissao').textContent = dataEmissao;

    var contentDiv = document.getElementById('content');
    contentDiv.classList.remove('hidden');

    var opt = {
        filename: 'Contrato.pdf',
        image: { type: 'jpeg', quality: 0.50 }, // Reduzir a qualidade da imagem
        html2canvas: { scale: 1 }, // Reduzir a escala
    };

    html2pdf().from(contentDiv).set(opt).save().then(() => {
        contentDiv.classList.add('hidden');
    });
});
