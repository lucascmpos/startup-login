import type {
  EditCompanyById,
  UpdateCompanyInput,
  UpdateCompanyMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CompanyForm from 'src/components/Company/CompanyForm'

export const QUERY: TypedDocumentNode<EditCompanyById> = gql`
  query EditCompanyById($id: String!) {
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

const UPDATE_COMPANY_MUTATION: TypedDocumentNode<
  EditCompanyById,
  UpdateCompanyMutationVariables
> = gql`
  mutation UpdateCompanyMutation($id: String!, $input: UpdateCompanyInput!) {
    updateCompany(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ company }: CellSuccessProps<EditCompanyById>) => {
  const [updateCompany, { loading, error }] = useMutation(
    UPDATE_COMPANY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Company updated')
        navigate(routes.companies())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateCompanyInput,
    id: EditCompanyById['company']['id']
  ) => {
    updateCompany({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Company {company?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CompanyForm
          company={company}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
