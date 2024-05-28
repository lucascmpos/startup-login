import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String7492996',
        first_name: 'String',
        last_name: 'String',
        dedication: 'String',
      },
    },
    two: {
      data: {
        email: 'String283692',
        first_name: 'String',
        last_name: 'String',
        dedication: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
