const express = require('express')
const app = express()
const bodyParser = require('body-parser')

/* O body-parser é importante porque ele vai pegar o corpo (body) da requisição, 
 * vai interpretar o formato url-encoded e transformará aquilo em um objeto que 
 * poderá ser facilmente manipulado no Node.js
 */
app.use(bodyParser.urlencoded({ extended: true }))

/* - Caso você opte por utilizar o método GET para submeter o seu formulário, os valores
 * inseridos nos campos serão enviados através da URL. Por um lado isso é bom, pois é
 * possível replicar a requisição sem a necessidade de preencher novamente os campos do
 * formulário.
 * 
 * - No caso de formulários onde são digitadas informações sensíveis, como senhas, evite
 * utilizar o método GET, caso contrário a senha será passada através da URL, podendo ser
 * facilmente recuperada no histórico do Browser. Procure então utilizar o método POST
 * para que os valores do formulário sejam enviados através do body da requisição e junto
 * disso o HTTPS, que criptografa o body da requisição, impossibilitando que farrejadores
 * de pacotes consigam capturar as suas requisições, ler o body e roubar suas informações.
 */
app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Incluído!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Alterado!</h1>')
})

app.listen(3003)