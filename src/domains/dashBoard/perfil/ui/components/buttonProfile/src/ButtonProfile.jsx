'use client'
import '../styles/main.scss'
import Button from '@domains/cross/ui/components/button/src/Button'
import Link from 'next/link'

const defaultButton = 'button-profile'

const ButtonProfile = () => {
  return (
    <div className={defaultButton}>
      <Link href="/dashBoard/cards">
        <Button
          size="button-arrow"
          label="Gestioná los medios de pago"
          color="green"
        />
      </Link>
    </div>
  )
}

export default ButtonProfile
