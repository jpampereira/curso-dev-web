/* - Uma aplicação em Node é estrutura em pastas e arquivos, onde cada arquivo
 * é um módulo. 
 *
 * - A priori, tudo o que é escrito em um módulo fica restrito a ele, mas podemos
 * utilizar o sistema de módulos para exportar e tornar o que quisermos dele público 
 * para ser que seja possível acessar de outros arquivos.
 * 
 * - Qualquer outra coisa que criemos e não coloquemos dentro de 'this', 'exports' ou
 * 'module.exports' será visível apenas dentro daquele arquivo.
 */

this.ola = 'Fala Pessoal'
exports.bemVindo = 'Bem vindo ao node!'
module.exports.ateLogo = 'Até próximo exemplo'