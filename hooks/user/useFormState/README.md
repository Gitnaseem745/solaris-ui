# useFormState

A custom React hook for managing form values, validation, and submission logic.

---

## ✅ Features

- Fully typed
- Built-in error handling
- Works with any input field

---

## 📦 Usage

```
const { values, errors, handleChange, handleSubmit } = useFormState({
  initialValues: { name: '', email: '' },
  validate: (values) => {
    const errors: any = {}
    if (!values.email.includes('@')) errors.email = 'Invalid email'
    return errors
  },
  onSubmit: (values) => console.log(values)
})
```
