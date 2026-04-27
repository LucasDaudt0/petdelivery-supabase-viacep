const SUPABASE_URL = 'SUA_URL_AQUI';
const SUPABASE_KEY = 'SUA_CHAVE_AQUI';

const AGENDAMENTOS = `${SUPABASE_URL}/rest/v1/agendamentos`;
const CLIENTES = `${SUPABASE_URL}/rest/v1/clientes`;
const ENDERECOS = `${SUPABASE_URL}/rest/v1/enderecos_clientes`;

const HEADERS = {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json'
};
