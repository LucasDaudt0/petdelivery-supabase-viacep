async function cadastrarClienteComEndereco(nome, telefone, cep) {
    try {

        const cepData = await obterDadosPorCep(cep)
        if (cepData?.localidade !== 'Macaé') {
            console.log(`Nossos serviços só estão disponíveis na localidade de Macaé`)
        } else {
            const response = await fetch(`${CLIENTES}`, {
                method: 'POST',
                headers: { ...HEADERS, 'Prefer': 'return=representation' },
                body: JSON.stringify({
                    nome: nome,
                    telefone: telefone
                })
            })

            const data = await response.json()
            const clienteId = data[0].id

            const responseEndereco = await fetch(`${ENDERECOS}`, {
                method: 'POST',
                headers: { ...HEADERS, 'Prefer': 'return=representation' },
                body: JSON.stringify({
                    cliente_id: clienteId,
                    cep: cepData?.cep,
                    rua: cepData?.logradouro,
                    bairro: cepData?.bairro,
                    cidade: cepData?.localidade
                })
            })

            const data2 = await responseEndereco.json()
            console.log(`Cadastro realizado com sucesso:`, data, data2)
        }
    } catch (error) {
        console.error(`Não foi possível realizar esta função:`, error)
    }
}