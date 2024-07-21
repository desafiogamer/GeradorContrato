document.getElementById('downloadPdf').addEventListener('click', function () {
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

    // Inserir os valores no conteúdo do PDF
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
    document.getElementById('fichaNomeTwo').textContent = nome

    var contentDiv = document.getElementById('content');
    var contentTwoDiv = document.getElementById('contentTwo');
    contentDiv.classList.remove('hidden');
    contentTwoDiv.classList.remove('hidden');

    // Gerar e baixar o PDF - Contrato
    var element = contentDiv;
    html2pdf().from(element).set({
        html2canvas: { scale: 1 }, // Aumentar a escala para melhorar a qualidade
        image: { type: 'png' } // Garantir alta qualidade da imagem
    }).toPdf().get('pdf').then(function (pdf) {
        pdf.save('Contrato.pdf');

        // Gerar e baixar o PDF - Ficha
        var elementTwo = contentTwoDiv;
        html2pdf().from(elementTwo).set({
            html2canvas: { scale: 1 },
            image: { type: 'png' } // Garantir alta qualidade da imagem
        }).toPdf().get('pdf').then(function (pdf) {
            pdf.save('Ficha.pdf');

            // Limpar os campos de entrada após gerar o PDF
            var inputs = document.querySelectorAll('.inputs input');
            inputs.forEach(function(input) {
                input.value = '';
            });

            // Tornar as divs invisíveis novamente
            contentDiv.classList.add('hidden');
            contentTwoDiv.classList.add('hidden');
        });
    });
});