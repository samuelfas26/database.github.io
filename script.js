document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let militares = JSON.parse(localStorage.getItem('militares')) || [];

    const novoMilitar = {
        posto: document.getElementById('posto').value,
        nome: document.getElementById('nome').value,
        secao: document.getElementById('secao').value,
        om: document.getElementById('om').value
    };

    militares.push(novoMilitar);
    localStorage.setItem('militares', JSON.stringify(militares));

    // Limpar o formulário após o cadastro
    this.reset();

    // Redirecionar para a página da lista após o cadastro
    window.location.href = 'list.html';
});
