import axios from 'axios'

const login = async ({ name, pass }: { name: string; pass: string }) => {
  // do something with axios
  // return the user information

  return { name: 'Victor' }
}

export const authAPI = { login }
