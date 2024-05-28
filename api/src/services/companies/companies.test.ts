import type { Company } from '@prisma/client'

import {
  companies,
  company,
  createCompany,
  updateCompany,
  deleteCompany,
} from './companies'
import type { StandardScenario } from './companies.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('companies', () => {
  scenario('returns all companies', async (scenario: StandardScenario) => {
    const result = await companies()

    expect(result.length).toEqual(Object.keys(scenario.company).length)
  })

  scenario('returns a single company', async (scenario: StandardScenario) => {
    const result = await company({ id: scenario.company.one.id })

    expect(result).toEqual(scenario.company.one)
  })

  scenario('creates a company', async (scenario: StandardScenario) => {
    const result = await createCompany({
      input: {
        name: 'String',
        description: 'String',
        businessModel: 'String',
        foundation: '2024-05-28T03:06:39.426Z',
        team_size: 6255013,
        opportunities: 'String',
        openings: 'String',
        userId: scenario.company.two.userId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.businessModel).toEqual('String')
    expect(result.foundation).toEqual(new Date('2024-05-28T03:06:39.426Z'))
    expect(result.team_size).toEqual(6255013)
    expect(result.opportunities).toEqual('String')
    expect(result.openings).toEqual('String')
    expect(result.userId).toEqual(scenario.company.two.userId)
  })

  scenario('updates a company', async (scenario: StandardScenario) => {
    const original = (await company({ id: scenario.company.one.id })) as Company
    const result = await updateCompany({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a company', async (scenario: StandardScenario) => {
    const original = (await deleteCompany({
      id: scenario.company.one.id,
    })) as Company
    const result = await company({ id: original.id })

    expect(result).toEqual(null)
  })
})
