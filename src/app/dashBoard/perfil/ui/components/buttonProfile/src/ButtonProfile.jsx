'use client'
import '../styles/main.scss'
import Button from '../../../../../../cross/ui/components/button/src/Button'

const defaultButton = 'button-profile'

const ButtonProfile = () => {
  return (
    <div className={defaultButton}>
      <Button
        size="button-arrow"
        label="Gestioná los medios de pago"
        color="green"
      />
    </div>
  )
}

export default ButtonProfile
