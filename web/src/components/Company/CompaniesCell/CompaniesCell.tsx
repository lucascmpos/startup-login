import type { FindCompanies, FindCompaniesVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Companies from 'src/components/Company/Companies'

export const QUERY: TypedDocumentNode<
  FindCompanies,
  FindCompaniesVariables
> = gql`
  query FindCompanies {
    companies {
      id
      name
      description
      website
      businessModel
      metricArrRaw
      metricArrNet
      foundation
      team_size
      opportunities
      valuation
      openings
      reasoningOpening
      userId
    }
  }
`

export const Loading = () => <div className="min-h-screen">Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No companies yet. '}
      <Link to={routes.newCompany()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindCompanies>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  companies,
}: CellSuccessProps<FindCompanies, FindCompaniesVariables>) => {
  return <Companies companies={companies} />
}
