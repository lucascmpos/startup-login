import type {
  DeleteCompanyMutation,
  DeleteCompanyMutationVariables,
  FindCompanyById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_COMPANY_MUTATION: TypedDocumentNode<
  DeleteCompanyMutation,
  DeleteCompanyMutationVariables
> = gql`
  mutation DeleteCompanyMutation($id: String!) {
    deleteCompany(id: $id) {
      id
    }
  }
`

interface Props {
  company: NonNullable<FindCompanyById['company']>
}

const Company = ({ company }: Props) => {
  const [deleteCompany] = useMutation(DELETE_COMPANY_MUTATION, {
    onCompleted: () => {
      toast.success('Company deleted')
      navigate(routes.companies())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteCompanyMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete company ' + id + '?')) {
      deleteCompany({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Company {company.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{company.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{company.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{company.description}</td>
            </tr>
            <tr>
              <th>Website</th>
              <td>{company.website}</td>
            </tr>
            <tr>
              <th>Business model</th>
              <td>{company.businessModel}</td>
            </tr>
            <tr>
              <th>Metric arr raw</th>
              <td>{company.metricArrRaw}</td>
            </tr>
            <tr>
              <th>Metric arr net</th>
              <td>{company.metricArrNet}</td>
            </tr>
            <tr>
              <th>Foundation</th>
              <td>{timeTag(company.foundation)}</td>
            </tr>
            <tr>
              <th>Team size</th>
              <td>{company.team_size}</td>
            </tr>
            <tr>
              <th>Opportunities</th>
              <td>{company.opportunities}</td>
            </tr>
            <tr>
              <th>Valuation</th>
              <td>{company.valuation}</td>
            </tr>
            <tr>
              <th>Openings</th>
              <td>{company.openings}</td>
            </tr>
            <tr>
              <th>Reasoning opening</th>
              <td>{company.reasoningOpening}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{company.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCompany({ id: company.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(company.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Company
