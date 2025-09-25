// Seleciona os elementos do formulário e do botão
const formulario = document.getElementById('formulario');
const botaoEnviar = document.getElementById('btn-enviar');

// Adiciona um ouvinte de evento para o envio do formulário
 formulario.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Evita o envio padrão do formulário

        // Verifica se todos os campos obrigatórios estão preenchidos
        if (formulario.checkValidity()) {
            // Se a validação passar, adiciona a classe para iniciar a animação
            botaoEnviar.classList.add('botao-animado');

            // Após a animação, remove a classe, limpa o formulário e o envia
            setTimeout(() => {
                botaoEnviar.classList.remove('botao-animado');
                formulario.reset(); // Limpa os campos do formulário
                // Aqui você pode adicionar a lógica de envio real, se necessário
                // formulario.submit(); 
            }, 1000); // O tempo aqui deve ser igual à duração da sua animação

        } else {
            // Se a validação falhar, a validação nativa do navegador mostrará os erros
            console.log('Validação falhou. Animação não iniciada.');
        }
    });

const campos = formulario.querySelectorAll('[required]');
const verificarCampos = () => {
    let todosPreenchidos = true;
    campos.forEach(campo => {
        if (!campo.value.trim() === "") {
            todosPreenchidos = false;
        }
    });
    return todosPreenchidos;
};

const alternarBotao = () => {
    botaoEnviar.disabled = !verificarCampos();
};

campos.forEach((campo) => {
    campo.addEventListener('input', alternarBotao);
});

alternarBotao(); // Verifica o estado inicial dos campos
