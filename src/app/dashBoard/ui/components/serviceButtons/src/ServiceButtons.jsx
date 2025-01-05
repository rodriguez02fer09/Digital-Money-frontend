import '../index.scss'
import Button from '../../../../../../domains/cross/ui/components/button'

const ServiceButtons = () => {
  const defaultClass = 'service-buttons'
  return (
    <div className={defaultClass}>
      <Button size="button-activity" label="Cargar dinero" color="green" />
      <Button size="button-activity" label="Pago de servicios" color="green" />
    </div>
  )
}
export default ServiceButtons
