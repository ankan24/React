import { useForm } from "react-hook-form"
import './App.css'

//? Basic form handling ---
//! 1. create
//! 2. field register
//! 3. onSubmit
//! 4. validation
//! 5. error handling
//! 6. styling error
//! 7. multiple submission prevent
function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    //! API call simulate
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name: </label>
          {/* //! register input boxes with form   ,    add  validation */}
          <input type="text" className={errors.firstName ? 'input-error' : ""} {...register('firstName', {
            required: true,
            minLength: { value: 3, message: "First Name must be at least 3 characters" },
            maxLength: 10,
          })} />
          {
            errors.firstName && <p className="error-msg">{errors.firstName.message}</p>
          }
        </div><br />
        <div>
          <label>Last Name: </label>
          <input type="text" className="input-error" {...register('lastName', {
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Last Name must be alphabets"
            }
          })} />
          {
            errors.lastName && <p className="error-msg">{errors.lastName.message}</p>
          }
        </div>
        <br />
        <input type="submit" disabled={isSubmitting}
          value={isSubmitting ? "Submitting" : "Submit"} />
      </form>
    </>
  )
}

export default App