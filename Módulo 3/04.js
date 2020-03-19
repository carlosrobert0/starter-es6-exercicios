import axios from 'axios'

const buscaUsuario = async usuario => {
  try {
  const response = await axios.get(`https://api.github.com/users/${usuario}`)

  console.log(response.data)
  } catch(err) {
    console.warn('Usuario nao existe')
  }
}

buscaUsuario('diego3g')
buscaUsuario('diego3g124123')