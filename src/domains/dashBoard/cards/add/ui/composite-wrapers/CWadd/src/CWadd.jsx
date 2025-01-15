'use client'

import MobileHeader from '@domains/cross/ui/components/MobileHeader/src/MobileHeader'

import AddCard from '@domains/dashBoard/cards/add/ui/composite-wrapers/addCard/src/AddCard'

const CWadd = ({title}) => {
  return (
    <>
      <MobileHeader title="Tarjetas" />

      <AddCard />
    </>
  )
}

export default CWadd
