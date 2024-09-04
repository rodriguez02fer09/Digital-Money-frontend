import Image from 'next/image'
import './page.scss'
import InfoHome from '../components/home/infoHome/src/InfoHome.jsx'
import InfoService from 'app/components/home/infoService'

export default function Home({titleService, titleDescription}) {
  const defaultHome = 'home'
  return (
    <main className={`${defaultHome}`}>
      <div className={`${defaultHome}--contain-home`}>
        <InfoHome />
      </div>
      <div className={`${defaultHome}--section`}></div>
      <div className={`${defaultHome}--containInfo`}>
        <InfoService
          titleService="Transferí dinero"
          titleDescription="Desde Digital Money House vas a poder transferir dinero a otras cuentas, asi como también recibir transferencias y nuclear tu capital en nuestra billetera virtual."
        />
        <InfoService
          titleService="Pago de servicios"
          titleDescription="Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido y conveniente. Olvidate de las facturas en papel."
        />
      </div>
    </main>
  )
}
