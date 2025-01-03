import Image from 'next/image'
import {useState, useRef, useEffect} from 'react'

import '../styles/main.scss'

const InputEdit = ({value, placeholder, label, type, onBlur, name}) => {
  const defaultClass = 'input-form-edit'
  const inputRef = useRef(null)
  const [edit, setEdit] = useState(false)
  const [inputValue, setInputValue] = useState(value)

  const customClassEdit = type ? 'edit' : 'not-edit'

  const toggleEdit = () => {
    setEdit(true)
  }

  const handleBlur = e => {
    setEdit(false)
    if (onBlur) onBlur(e)
  }

  const handleKeyDown = e => {
    if (name === 'phone' && !/[0-9]/.test(e.key) && e.key !== 'Backspace') {
      e.preventDefault()
    }

    if (name === 'dni' && !/[0-9]/.test(e.key) && e.key !== 'Backspace') {
      e.preventDefault()
    }

    if (e.key === 'Enter') {
      setEdit(false)
      if (onBlur) onBlur(e)
    }
  }

  const handleChange = e => {
    let newValue = e.target.value

    // Si el campo está vacío, se permite escribir sin restricciones
    if (newValue === '') {
      setInputValue(newValue)
      inputRef.current.value = newValue
      return
    }

    // Validación para asegurar que solo hay un nombre y un apellido (2 palabras separadas por un único espacio)
    if (name === 'name') {
      // Eliminar cualquier carácter no alfabético y permitir solo letras y un único espacio entre las palabras
      newValue = newValue.replace(/[^a-zA-Z\s]/g, '') // Solo letras y espacios
      // Solo se hará el reemplazo de espacios si hay más de una palabra
      if (newValue.split(' ').length > 2) {
        newValue = newValue.replace(/\s+/g, ' ').trim() // Asegura un solo espacio entre palabras y elimina espacios extra
      }

      // Verificar que haya exactamente 1 o 2 palabras (nombre o nombre y apellido)
      const words = newValue.split(' ')
      if (words.length > 2) {
        return // No permitir más de 2 palabras
      }

      // Si hay números en el nombre, se previene la actualización
      if (/\d/.test(newValue)) {
        return // No permitir números
      }
    }

    // Si es un teléfono, quitar caracteres no numéricos
    if (type === 'phone') {
      newValue = newValue.replace(/\D/g, '')
    }

    // Actualizar el valor en el estado y en el input
    setInputValue(newValue)
    inputRef.current.value = newValue
  }

  useEffect(() => {
    setInputValue(value)
  }, [value])

  useEffect(() => {
    if (edit && inputRef.current) {
      inputRef.current.focus()
    }
  }, [edit])

  return (
    <div className={defaultClass}>
      <div className={`${defaultClass}__label`}>
        <label>{label}</label>
      </div>
      <div className={`${defaultClass}__wrapper`}>
        {edit ? (
          <input
            className={`${defaultClass}__input--${customClassEdit}`}
            ref={inputRef}
            name={name}
            type={type}
            value={inputValue}
            placeholder={placeholder}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
          />
        ) : (
          <>
            <p className={`${defaultClass}__input`}>
              {type === 'password' ? '••••••' : inputValue}
            </p>
            {type !== 'email' && name !== 'dni' && (
              <span className={`${defaultClass}__icon`}>
                <Image
                  src="/images/pencil.svg"
                  alt="Edit Icon"
                  width={22}
                  height={22}
                  onClick={toggleEdit}
                />
              </span>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default InputEdit
