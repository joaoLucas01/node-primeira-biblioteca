export default function trataErros(erro) {
    if (erro.code === 'ENONT') {
        throw new Error('Arquivo não encontrado');
    } else {
        return 'erro na aplicação';
    }
}
