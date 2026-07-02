const campos = [
    { input: 'nome-input', curriculo: 'nome-curriculo' },
    { input: 'sobrenome-input', curriculo: 'sobrenome-curriculo' },
    { input: 'endereco-input', curriculo: 'endereco-curriculo' },
    { input: 'cidade-input', curriculo: 'cidade-curriculo' },
    { input: 'estado-input', curriculo: 'estado-curriculo' },
    { input: 'cep-input', curriculo: 'cep-curriculo' },
    { input: 'telefone', curriculo: 'telefone-curriculo' },
    { input: 'email', curriculo: 'email-curriculo' },
];
campos.forEach(({ input, curriculo }) => {
    const inputEl = document.getElementById(input);
    const curriculoEl = document.getElementById(curriculo);
    if (inputEl && curriculoEl) {
        inputEl.addEventListener('input', () => {
            curriculoEl.textContent = inputEl.value;
        });
    }
});
// Foto: atualiza o preview do currículo quando o usuário escolhe um arquivo
const fotoInput = document.getElementById('foto');
const fotoCurriculo = document.getElementById('foto-curriculo');
const fotoRosto = document.querySelector('#rosto img');
fotoInput.addEventListener('change', () => {
    const arquivo = fotoInput.files[0];
    if (arquivo) {
        const url = URL.createObjectURL(arquivo);
        fotoRosto.src = url;
        fotoCurriculo.src = url;
    }
});
