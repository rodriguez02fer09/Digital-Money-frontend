'use client'
import '../styles/main.scss'
import {useState} from 'react'
import Button from '@domains/cross/ui/components/button/src/Button'
import Image from 'next/image'

const ModalFilter = ({isOpen, handleFilter}) => {
  const defaulFilter = 'modal-filter'
  const [selectedPeriod, setSelectedPeriod] = useState('')

  const handlePeriodChange = e => {
    setSelectedPeriod(e.target.value)
  }

  if (!isOpen) return null

  return (
    <main className={`${defaulFilter}`}>
      <div className={`${defaulFilter}--header-modal`}>
        <p>Período</p>
        <p onClick={() => setSelectedPeriod('')}>Borrar filtros</p>
      </div>
      <div className={`${defaulFilter}--list-options`}>
        <div>
          <label>Hoy</label>
          <input
            type="radio"
            id="today"
            name="period"
            value="today"
            checked={selectedPeriod === 'today'}
            onChange={handlePeriodChange}
          />
        </div>
        <div>
          <label htmlFor="yesterday">Ayer</label>
          <input
            type="radio"
            id="yesterday"
            name="period"
            value="yesterday"
            checked={selectedPeriod === 'yesterday'}
            onChange={handlePeriodChange}
          />
        </div>
        <div>
          <label htmlFor="lastWeek">Ultima semana</label>
          <input
            type="radio"
            id="lastWeek"
            name="period"
            value="lastWeek"
            checked={selectedPeriod === 'lastWeek'}
            onChange={handlePeriodChange}
          />
        </div>
        <div>
          <label htmlFor="last15Days">Ultimos 15 dias</label>
          <input
            type="radio"
            id="last15Days"
            name="period"
            value="last15Days"
            checked={selectedPeriod === 'last15Days'}
            onChange={handlePeriodChange}
          />
        </div>
        <div>
          <label htmlFor="lastMonth">Último mes</label>
          <input
            type="radio"
            id="lastMonth"
            name="period"
            value="lastMonth"
            checked={selectedPeriod === 'lastMonth'}
            onChange={handlePeriodChange}
          />
        </div>
        <div>
          <label htmlFor="lastYear">Último año</label>
          <input
            type="radio"
            id="lastYear"
            name="period"
            value="lastYear"
            checked={selectedPeriod === 'lastYear'}
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
          <Button
            size="large"
            color="green"
            label="Filtrar"
            onClick={() => handleFilter(selectedPeriod)}
          />
        </div>
      </div>
    </main>
  )
}

export default ModalFilter
