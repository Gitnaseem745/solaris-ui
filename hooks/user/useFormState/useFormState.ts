import { useState } from 'react'

export function useFormState<T>(initialValues: T) {
  const [values, setValues] = useState(initialValues)

  const handleChange = (field: keyof T) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues(prev => ({ ...prev, [field]: e.target.value }))
  }

  const reset = () => setValues(initialValues)

  return {
    values,
    handleChange,
    reset,
  }
}
