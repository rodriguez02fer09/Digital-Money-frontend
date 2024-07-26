import '../styles/desktop.scss'
import Input from '../../input/src/Input'
import Button from '../../button/src/Button'

const FormCreateAcount = () => {
  const defaultClass = 'containForm-cuenta'
  return (
    <div className={`${defaultClass}`}>
      <p className={`${defaultClass}--InfoTitle`}>Crear cuenta</p>
      <div className={`${defaultClass}--containInfo`}>
        <Input type={'large-Input-black'} placeholder={'Nombre*'} />
        <Input type={'large-Input-black'} placeholder={'Apellido*'} />
        <Input type={'large-Input-black'} placeholder={'DNI*'} />
        <Input type={'large-Input-black'} placeholder={'Correo electronico*'} />
      </div>
      <p className={`${defaultClass}--InfoPassword`}>
        Usa entre 6 y 20 carácteres (debe contener al menos al menos 1 carácter
        especial, una mayúscula y un número
      </p>
      <div className={`${defaultClass}--containPassword`}>
        <Input type={'large-Input-black'} placeholder={'Contraseña*'} />
        <Input
          type={'large-Input-black'}
          placeholder={'Confirmar contraseña*'}
        />
        <Input type={'large-Input-black'} placeholder={'Telefono*'} />
        <Button type={'large-green'} label="Crear cuenta" />
      </div>
    </div>
  )
}

export default FormCreateAcount
