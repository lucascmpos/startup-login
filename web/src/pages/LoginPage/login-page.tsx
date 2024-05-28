import { useState } from 'react'

import { useMutation, gql } from '@apollo/client'
import { Play } from 'lucide-react'

import { Form, InputField } from '@redwoodjs/forms'
import { navigate } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/dist/toast'

const LOGIN_MUTATION = gql`
  mutation Login($email: String!) {
    loginUser(email: $email) {
      token
      user {
        id
        email
        first_name
        last_name
      }
    }
  }
`
const LoginPage = ({ setLoggedInUser }) => {
  const [email, setEmail] = useState('')
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION)

  const handleLogin = async () => {
    try {
      const { data } = await login({ variables: { email } })
      const token = data.loginUser.token
      localStorage.setItem('token', token)
      setLoggedInUser(data.loginUser.user)
      toast.success('Login bem-sucedido!')
      navigate('/')
    } catch (error) {
      console.error('Erro ao fazer login:', error)
      toast.error('Email não encontrado ou incorreto.')
    }
  }

  return (
    <div className="min-h-screen w-full px-28 py-16">
      <div className="flex flex-col items-center justify-center gap-10 rounded-2xl border p-5">
        <div className="flex flex-row items-center gap-2">
          <Play size={16} className="fill-[#DDE1ED] text-[#DDE1ED]" />
          <h1 className="text-2xl font-bold">MercadoStartup</h1>
        </div>
        <span className="font-semibold">Login de usuário</span>

        <Form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <InputField
            className="rounded-xl border p-2"
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />

          <button
            className="rounded-2xl bg-[#1C202C] px-4 py-2 font-medium text-white"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Carregando...' : 'Login'}
          </button>
          {error && <p>Erro ao fazer login. Por favor, tente novamente.</p>}
        </Form>
      </div>
    </div>
  )
}

export default LoginPage
