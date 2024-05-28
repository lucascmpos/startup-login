import { useMutation, gql } from '@apollo/client'
import { Play } from 'lucide-react'

import { Form, InputField } from '@redwoodjs/forms'
import { navigate } from '@redwoodjs/router'

const SIGNUP_MUTATION = gql`
  mutation Signup($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      email
      first_name
      last_name
    }
  }
`

const SignupPage = () => {
  const [signup, { loading, error }] = useMutation(SIGNUP_MUTATION)

  const handleSignup = async (data) => {
    const { email, first_name, last_name, dedication } = data

    console.log('Form Data:', {
      email,
      first_name,
      last_name,
      dedication,
    })

    try {
      const { data: userData } = await signup({
        variables: {
          input: {
            email,
            first_name,
            last_name,
            dedication,
          },
        },
      })

      console.log('Signup response:', userData)
      navigate('/login')
    } catch (error) {
      console.error('Error signing up:', error)
    }
  }
  return (
    <div className="min-h-screen w-full px-28 py-16">
      <div className=" flex flex-col items-center justify-center gap-10 rounded-2xl border p-5">
        <div className="flex flex-row items-center gap-2">
          <Play size={16} className="fill-[#DDE1ED] text-[#DDE1ED]" />
          <h1 className="text-2xl font-bold">MercadoStartup</h1>
        </div>
        <span className="font-semibold">Cadastro de usuário</span>

        <Form className="flex flex-col gap-4" onSubmit={handleSignup}>
          <InputField
            className="rounded-xl border p-2"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <InputField
            className="rounded-xl border p-2"
            type="text"
            name="first_name"
            placeholder="Nome"
            required
          />
          <InputField
            className="rounded-xl border p-2"
            type="text"
            name="last_name"
            placeholder="Sobrenome"
            required
          />
          <InputField
            className="rounded-xl border p-2"
            type="text"
            name="dedication"
            placeholder="Dedicação"
            required
          />
          <button
            className="rounded-2xl bg-[#1C202C] px-4 py-2 font-medium text-white"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Carregando...' : 'Cadastrar'}
          </button>
          {error && (
            <p>Erro ao cadastrar usuário. Por favor, tente novamente.</p>
          )}
        </Form>
      </div>
    </div>
  )
}

export default SignupPage
