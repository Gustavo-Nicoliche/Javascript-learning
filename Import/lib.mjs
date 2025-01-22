export const saudacao = () => {
    let data = new Date().toLocaleDateString()
    return `olá, seja muito bem-vindo. Hoje é ${data}`
}

export function getEnderecobyCEP(cep) {
    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
}

// linkado a Dynamic_import.html