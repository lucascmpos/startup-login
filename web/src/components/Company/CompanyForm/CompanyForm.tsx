import type { EditCompanyById, UpdateCompanyInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormCompany = NonNullable<EditCompanyById['company']>

interface CompanyFormProps {
  company?: EditCompanyById['company']
  onSave: (data: UpdateCompanyInput, id?: FormCompany['id']) => void
  error: RWGqlError
  loading: boolean
}

const CompanyForm = (props: CompanyFormProps) => {
  const onSubmit = (data: FormCompany) => {
    props.onSave(data, props?.company?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCompany> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.company?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.company?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="website"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Website
        </Label>

        <TextField
          name="website"
          defaultValue={props.company?.website}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="website" className="rw-field-error" />

        <Label
          name="businessModel"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Business model
        </Label>

        <TextField
          name="businessModel"
          defaultValue={props.company?.businessModel}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="businessModel" className="rw-field-error" />

        <Label
          name="metricArrRaw"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Metric arr raw
        </Label>

        <TextField
          name="metricArrRaw"
          defaultValue={props.company?.metricArrRaw}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="metricArrRaw" className="rw-field-error" />

        <Label
          name="metricArrNet"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Metric arr net
        </Label>

        <TextField
          name="metricArrNet"
          defaultValue={props.company?.metricArrNet}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="metricArrNet" className="rw-field-error" />

        <Label
          name="foundation"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Foundation
        </Label>

        <DatetimeLocalField
          name="foundation"
          defaultValue={formatDatetime(props.company?.foundation)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="foundation" className="rw-field-error" />

        <Label
          name="team_size"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Team size
        </Label>

        <NumberField
          name="team_size"
          defaultValue={props.company?.team_size}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="team_size" className="rw-field-error" />

        <Label
          name="opportunities"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Opportunities
        </Label>

        <TextField
          name="opportunities"
          defaultValue={props.company?.opportunities}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="opportunities" className="rw-field-error" />

        <Label
          name="valuation"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Valuation
        </Label>

        <TextField
          name="valuation"
          defaultValue={props.company?.valuation}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="valuation" className="rw-field-error" />

        <Label
          name="openings"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Openings
        </Label>

        <TextField
          name="openings"
          defaultValue={props.company?.openings}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="openings" className="rw-field-error" />

        <Label
          name="reasoningOpening"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reasoning opening
        </Label>

        <TextField
          name="reasoningOpening"
          defaultValue={props.company?.reasoningOpening}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="reasoningOpening" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <TextField
          name="userId"
          defaultValue={props.company?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="userId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CompanyForm
