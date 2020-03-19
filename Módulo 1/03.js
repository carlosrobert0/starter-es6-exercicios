// 3.1
const arr = [1, 2, 3, 4, 5];
var mapa = arr.map(item => item + 10)
console.log(mapa)

// 3.2// Dica: Utilize uma constante pra function 
const usuario = { nome: 'Diego', idade: 23 }
const idadeUser = usuario => usuario.idade
console.log(idadeUser(usuario))

// 3.3
// Dica: Utilize uma constante pra function
const nome = 'Diego';
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ 
  nome,
  idade 
})

console.log(mostraUsuario(nome, idade))
console.log(mostraUsuario(nome))

// 3.4
const promise = new Promise((resolve, reject) => resolve())