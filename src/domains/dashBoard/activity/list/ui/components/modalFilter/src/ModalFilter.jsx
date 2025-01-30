import '../styles/main.scss'
import {useState} from 'react'
import Button from '@domains/cross/ui/components/button/src/Button'
import Image from 'next/image'

const ModalFilter = ({isOpen, toggleModal}) => {
  const defaulFilter = 'modal-filter'

  const [selectedPeriod, setSelectedPeriod] = useState('hoy')

  const handlePeriodChange = e => {
    setSelectedPeriod(e.target.value)
  }

  if (!isOpen) return null

  return (
    <main className={`${defaulFilter}`}>
      <div className={`${defaulFilter}--header-modal`}>
        <p>Período</p>
        <p>Borrar filtros</p>
      </div>
      <div className={`${defaulFilter}--list-options`}>
        <div>
          <label>Hoy</label>
          <input
            type="radio"
            id="hoy"
            name="period"
            value="hoy"
            checked={selectedPeriod === 'hoy'}
            onChange={handlePeriodChange}
          />
        </div>

        <div>
          <label htmlFor="Ayer">Ayer</label>
          <input
            type="radio"
            id="Ayer"
            name="period"
            value="Ayer"
            checked={selectedPeriod === 'Ayer'}
            onChange={handlePeriodChange}
          />
        </div>

        <div>
          <label htmlFor="Ultima semana">Ultima semana</label>
          <input
            type="radio"
            id="Ultima semana"
            name="period"
            value="Ultima semana"
            checked={selectedPeriod === 'Ultima semana'}
            onChange={handlePeriodChange}
          />
        </div>
        <div>
          <label htmlFor="Ultimos 15 dias">Ultimos 15 dias </label>
          <input
            type="radio"
            id="Ultimos 15 dias"
            name="period"
            value="Ultimos 15 dias"
            checked={selectedPeriod === 'Ultimos 15 dias'}
            onChange={handlePeriodChange}
          />
        </div>

        <div>
          <label htmlFor="Último mes">Último mes</label>
          <input
            type="radio"
            id="Último mes"
            name="period"
            value="Último mes"
            checked={selectedPeriod === 'Último mes'}
            onChange={handlePeriodChange}
          />
        </div>

        <div>
          <label htmlFor="Último año">Último año</label>
          <input
            type="radio"
            id="Último año"
            name="period"
            value="Último año"
            checked={selectedPeriod === 'Último año'}
            onChange={handlePeriodChange}
          />
        </div>
      </div>
      <div className={`${defaulFilter}--other-option-button`}>
        <div>
          <p>Otro período</p>

          <Image
            src="/images/butonFilter.svg"
            width={10}
            height={20}
            alt="Ícono"
          />
        </div>
        <div className={`${defaulFilter}--button`}>
          <Button size="large" color="green" label="Filtrar" />
        </div>
      </div>
    </main>
  )
}
export default ModalFilter
