'use client'
import '../styles/main.scss'
import Button from '@domains/cross/ui/components/button/src/Button'

const Buttons = () => {
  const handleInicio = () => {
    window.location.href = '/dashBoard/home'
  }
  return (
    <div className="buttons">
      <Button
        size="large"
        color="black"
        label="Ir al inicio"
        onClick={handleInicio}
      />
      <Button size="large" color="green" label="Descargar comprobante" />
    </div>
  )
}
export default Buttons
