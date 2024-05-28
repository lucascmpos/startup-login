import type { Prisma, Company } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CompanyCreateArgs>({
  company: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        businessModel: 'String',
        foundation: '2024-05-28T03:06:39.444Z',
        team_size: 2484611,
        opportunities: 'String',
        openings: 'String',
        user: {
          create: {
            email: 'String4032742',
            first_name: 'String',
            last_name: 'String',
            dedication: 'String',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        description: 'String',
        businessModel: 'String',
        foundation: '2024-05-28T03:06:39.444Z',
        team_size: 6235569,
        opportunities: 'String',
        openings: 'String',
        user: {
          create: {
            email: 'String3578707',
            first_name: 'String',
            last_name: 'String',
            dedication: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Company, 'company'>
