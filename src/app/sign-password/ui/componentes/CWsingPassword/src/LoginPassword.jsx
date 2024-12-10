'use client'
import '../styles/desktop.scss'

import {useForm} from 'react-hook-form'
import {useAuthStore} from '../../../../../sign-email/core/hoocks/UseAuthStore'
import {useRouter} from 'next/navigation'
import {passwordForm} from '../../../../data/forms/default'
import Form from '../../../../../cross/ui/composite-wrappers/loguinPasswordForm'
import {requestSignPassword} from '../../../../core/uses-cases/request-signPassword'
import Input from '../../../../../cross/ui/components/input/index'
import Button from '../../../../../cross/ui/components/button'
import {useEffect} from 'react'

const LoginPassword = () => {
  const {email, setEmail} = useAuthStore()
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()
  const router = useRouter()

useEffect(() => {
  if (!email) {
    const storeEmail = localStorage.getItem('email');
    if (storeEmail) {
      console.log('Correo recuperado del localStorage:', storeEmail);
      setEmail(storeEmail);
    } else {
      console.log('No se encontró correo, redirigiendo a /sign-email');
      router.push('/sign-email'); // Redirigir si no hay correo
    }
  } else {
    console.log('Correo en el estado:', email);
  }
}, [email, setEmail]);


  const rq = (response) => {
    console.log('Respuesta de la API:', response);
  };

  const onSubmit = (data) => {
    console.log('Datos enviados al servidor:', {
      email,
      password: data.password,
    });
  
    requestSignPassword(
      {
        email,
        password: data.password,
      },
      (result) => {
        console.log('Resultado recibido del servidor:', result);
        if (result.success) {
          console.log('Autenticación exitosa. Redirigiendo...');
          router.push('/home');
        } else {
          console.error('Error de autenticación:', result.error);
          alert('Contraseña incorrecta o problema en el servidor.');
        }
      }
    );
  };
  

  const defaultClass = 'mainContainForm-password'

  return (
    <main className={`${defaultClass}`}>
      <div className={`${defaultClass}--containFrom`}>
        <div className={`${defaultClass}--containtex`}>
          <p>{'Ingresá tu contraseña'}</p>
        </div>
        <Form
  callBackOnSubmit={handleSubmit(onSubmit)} // Usamos handleSubmit aquí
  inputs={passwordForm}
  name="loginPassword"
  className={`${defaultClass}--loginPassword`}
/>

      </div>
    </main>
  )
}
LoginPassword.displayName = 'LoginPassword'
export default LoginPassword
