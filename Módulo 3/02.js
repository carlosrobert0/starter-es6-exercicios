import axios from 'axios'

async function getUserFromGithub(user) {
  try {
  const response = await axios.get(`https://api.github.com/users/${user}`)
   
  console.log(response.data)
  } catch(err) {
    console.warn('erro na API')
  }
}

getUserFromGithub('carlosrobert0')
getUserFromGithub('carlsofadj')