import '../styles/main.scss'
import Image from 'next/image'
import Button from '@domains/cross/ui/components/button/src/Button'

const ButtonAddCard = () => {
  const defaultButtonAdd = 'button-add-card'
  return (
    <div className={`${defaultButtonAdd}`}>
      <div className={`${defaultButtonAdd}--img-title`}>
        <Image src="/images/add.svg" width={24} height={24} alt="Ícono" />
        <p>Nueva tarjeta</p>
      </div>
      <div className={`${defaultButtonAdd}--button`}>
        <Button size="large" color="green" label="Continuar" />
      </div>
    </div>
  )
}
export default ButtonAddCard
