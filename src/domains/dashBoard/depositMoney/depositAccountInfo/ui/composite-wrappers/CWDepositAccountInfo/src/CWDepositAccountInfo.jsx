import '../styles/main.scss'
import TransferenciaProfile from '@domains/dashBoard/perfil/ui/components/transferenciaProfile'
import MobileHeader from '@domains/cross/ui/components/MobileHeader/src/MobileHeader'

const CWDepositAccountInfo = ({title}) => {
  return (
    <>
      <MobileHeader title="Cargar dinero" />
      <TransferenciaProfile />
    </>
  )
}

export default CWDepositAccountInfo
