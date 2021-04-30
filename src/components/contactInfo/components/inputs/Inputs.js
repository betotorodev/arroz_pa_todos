import { Formik } from 'formik'

const initialValues = {
  name: '',
  lastName: '',
  enterprise: '',
  email: '',
  matter: '',
  message: '',
}

export const Inputs = () => {

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onSubmit(values)}
    >
      {
        ({handleChange, handleSubmit, isSubmitting}) => (
          <form onSubmit={handleSubmit}>
            <input name='name' onChange={handleChange} type="text"/>
            <input name='lastName' onChange={handleChange} type="text"/>
            <button className="btn" disabled={isSubmitting}>enviar</button>
          </form>
        )
      }
    </Formik>
  )
}
