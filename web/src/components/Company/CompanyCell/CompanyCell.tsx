import type { FindCompanyById, FindCompanyByIdVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Company from 'src/components/Company/Company'

export const QUERY: TypedDocumentNode<
  FindCompanyById,
  FindCompanyByIdVariables
> = gql`
  query FindCompanyById($id: String!) {
    company: company(id: $id) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Company not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindCompanyByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  company,
}: CellSuccessProps<FindCompanyById, FindCompanyByIdVariables>) => {
  return <Company company={company} />
}
