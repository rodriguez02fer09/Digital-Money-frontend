import '../styles/main.scss'
import Button from '@domains/cross/ui/components/button/src/Button'
import Input from '@domains/cross/ui/components/input/index'

const Account = ({size, color}) => {
  const defaultAccount = 'account'
  return (
    <div className={`${defaultAccount}`}>
      <div className={`${defaultAccount}--text-input`}>
        <h1>¿Cuánto querés ingresar a la cuenta?</h1>
        <input type="number" placeholder="$0" />
      </div>
      <div className={`${defaultAccount}--button-account`}>
        <Button size="large" color="green" label="Continuar" />
      </div>
      <div className={`${defaultAccount}--button-mobile`}>
        <Button size="large" color="green" label="Continuar" />
      </div>
    </div>
  )
}
export default Account
