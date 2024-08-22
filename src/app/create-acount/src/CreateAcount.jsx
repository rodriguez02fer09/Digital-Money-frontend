import '../styles/desktop.scss'
import Input from '../../../components/input/src/Input'
import Button from '../../../components/button/src/Button'

const CreateAcount = () => {
  const defaultClass = 'mainForm-cuenta'
  return (
    <main className={`${defaultClass}`}>
      <div className={`${defaultClass}--container`}>
        <p className={`${defaultClass}__InfoTitle`}>Crear cuenta</p>
        <div className={`${defaultClass}--containInfo`}>
          <Input size={'large'} color={'black'} placeholder={'Nombre'} />
          <Input size={'large'} color={'black'} placeholder={'Apellido*'} />
          <Input size={'large'} color={'black'} placeholder={'DNI*'} />
          <Input
            size={'large'}
            color={'black'}
            placeholder={'Correo electronico*'}
          />
        </div>
        <p className={`${defaultClass}--InfoPassword`}>
          Usa entre 6 y 20 carácteres (debe contener al menos al menos 1
          carácter especial, una mayúscula y un número).{' '}
        </p>
        <div className={`${defaultClass}--containPassword`}>
          <Input size={'large'} color={'black'} placeholder={'Contraseña*'} />
          <Input
            size={'large'}
            color={'black'}
            placeholder={'Confirmar contraseña*'}
          />
          <Input size={'large'} color={'black'} placeholder={'Telefono*'} />
          <Button size={'large'} label={'Crear cuenta'} color={'green'} />
        </div>
      </div>
    </main>
  )
}

export default CreateAcount
