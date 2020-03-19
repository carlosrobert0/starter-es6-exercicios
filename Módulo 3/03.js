import axios from 'axios'

class Github {
  static async getRepositories(repo) {
    try{
    const response = await axios.get(`https://api.github.com/repos/${repo}`)
    console.log(response.data)
    } catch(err) {
      console.warn('repositorio nao existe')
    }
  }
}

Github.getRepositories('carlosrobert0/Semana-Omnistack10')
Github.getRepositories('carlosrobert0/usuarioLogado')