import type {
  QueryResolvers,
  MutationResolvers,
  UserRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany()
}

export const user: QueryResolvers['user'] = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser: MutationResolvers['createUser'] = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

// No arquivo users.ts

// Importe a função de login adequada

export const loginUser: MutationResolvers['loginUser'] = async ({ email }) => {
  try {
    // Procurar o usuário pelo email fornecido
    const user = await db.user.findUnique({ where: { email } })

    // Se o usuário não existir, lança um erro
    if (!user) {
      throw new Error('Usuário não encontrado')
    }

    // Neste exemplo, o token pode ser gerado aleatoriamente ou obtido de outra forma
    const token = 'TOKEN_AQUI'

    // Retorna um objeto que inclui o token e os dados do usuário
    return {
      token,
      user,
    }
  } catch (error) {
    // Lidar com erros
    throw new Error('Falha ao fazer login: ' + error.message)
  }
}

export const deleteUser: MutationResolvers['deleteUser'] = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User: UserRelationResolvers = {
  Company: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).Company()
  },
}
