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

export const loginUser: MutationResolvers['loginUser'] = async ({ email }) => {
  try {
    const user = await db.user.findUnique({ where: { email } })

    if (!user) {
      throw new Error('Usuário não encontrado')
    }

    const token = 'TOKEN_AQUI'

    return {
      token,
      user,
    }
  } catch (error) {
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
