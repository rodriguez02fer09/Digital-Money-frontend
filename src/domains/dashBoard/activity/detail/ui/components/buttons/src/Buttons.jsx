import '../styles/main.scss'
import Button from '@domains/cross/ui/components/button/src/Button'

const Buttons = () => {
  const defaultButtons = 'detail-buttons'

  return (
    <div className={`${defaultButtons}`}>
      <div className={`${defaultButtons}__contain-buttons`}>
        <Button size="large" label="Ir al inicio" color="black" type="button" />
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
