const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
]

var mapIdade = usuarios.map( item => item.idade)
console.log(mapIdade)

var filterTrabalhador = usuarios.filter(item => item.empresa === 'Rocketseat' && item.idade > 18)
console.log(filterTrabalhador)

var findEmpresa = usuarios.find(item => item.empresa === 'Googgle')
console.log(findEmpresa)

var calculaIdade = usuarios
  .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter(usuario => idade <= 50)
console.log(calculaIdade)