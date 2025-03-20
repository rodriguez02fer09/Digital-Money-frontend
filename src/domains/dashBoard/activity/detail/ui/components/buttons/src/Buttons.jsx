'use client'
import '../styles/main.scss'
import Button from '@domains/cross/ui/components/button/src/Button'

const Buttons = () => {
  const defaultButtons = 'detail-buttons'

  const handleHome = () => {
    window.location.href = '/dashBoard/home'
  }

  return (
    <div className={`${defaultButtons}`}>
      <div className={`${defaultButtons}__contain-buttons`}>
        <Button
          size="large"
          label="Ir al inicio"
          color="black"
          type="button"
          onClick={handleHome}
        />
        <Button
          size="large"
          label="Descargar comprobante"
          color="green"
          type="submit"
        />
      </div>
    </div>
  )
}
export default Buttons
