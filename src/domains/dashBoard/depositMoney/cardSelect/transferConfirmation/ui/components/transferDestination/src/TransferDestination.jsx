import '../styles/main.scss'
import Button from '@domains/cross/ui/components/button/src/Button'

const TransferDestination = () => {
  const defaultDestination = 'transfer-destination'
  return (
    <div className={`${defaultDestination}`}>
      <div className={`${defaultDestination}--destination`}>
        <p>Para</p>
        <p>Cuenta propia</p>
      </div>
      <div className={`${defaultDestination}--account`}>
        <div className={`${defaultDestination}__info`}>
          <p>Brubank</p>
          <p>CVU: 0000002100075990000000</p>
        </div>
        <div className={`${defaultDestination}__button`}>
          <Button size="large" color="green" label="Continuar" />
        </div>
      </div>
    </div>
  )
}
export default TransferDestination
