import '../styles/main.scss'
import Button from '@domains/cross/ui/components/button/src/Button'

const Buttons = () => {
  return (
    <div className="buttons">
      <Button size="large" color="black" label="Ir al inicio" />
      <Button size="large" color="green" label="Descargar comprobante" />
    </div>
  )
}
export default Buttons
