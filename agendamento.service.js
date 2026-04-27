async function listarAgendamentos(servico) {
    try {
        if (servico !== undefined) {
            const response = await fetch(`${AGENDAMENTOS}?servico=eq.${servico}&select=*`, { headers: HEADERS })
            const data = await response.json()
            console.log(data)
        } else {
            const response = await fetch(`${AGENDAMENTOS}?select=*`, { headers: HEADERS })
            const data = await response.json()
            console.log(data)
        }
    } catch (error) {
        console.error(`Não foi possível realizar esta ação:`, error)
    }
}

async function criarAgendamento(cliente_id, servico, dataAgendamento) {
    try {
        const response = await fetch(`${CLIENTES}?id=eq.${cliente_id}`, { headers: HEADERS })
        const data = await response.json()

        if (data[0]?.id != undefined) {
            const agendamentoResponse = await fetch(`${AGENDAMENTOS}`, {
                method: 'POST',
                headers: { ...HEADERS, 'Prefer': 'return=representation' },
                body: JSON.stringify({
                    cliente_id: data[0]?.id,
                    servico: servico,
                    data: dataAgendamento
                })
            })

            const data2 = await agendamentoResponse.json()
            console.log(`Agendamento realizado com sucesso:`, data2)
        } else {
            console.log(`Usuário não encontrado:`, data)
        }
    } catch (error) {
        console.error(`Não foi possível realizar esta ação:`, error)
    }
}

async function deletarAgendamentos(id_agendamento) {
    try {
        const response = await fetch(`${AGENDAMENTOS}?id=eq.${id_agendamento}&select=*`,{
            method: 'DELETE',
            headers: { ...HEADERS, 'Prefer': 'return=representation' }
        })

        const data = await response.json();

        console.log(`Agendamento deletado com sucesso:`, data)
    } catch (error) {
        console.error(`Não foi possível realizar esta ação:`, error)
    }
}
