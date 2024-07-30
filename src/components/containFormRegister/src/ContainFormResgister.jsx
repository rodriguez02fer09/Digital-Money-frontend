// src/components/ContainFormResgister/ContainFormResgister.js
import Link from 'next/link'
import Input from '../../../components/input/src/Input'
import Button from '../../../components/button/src/Button'
import '../styles/desktop.scss' // Import styles

const ContainFormResgister = ({
  greetingText,
  inputType,
  inputPlaceholder,
  buttonType,
  buttonLabel,
  buttonHref,
}) => {
  const defaulClass = 'mainContainForm-register'
  return (
    <main className={`${defaulClass} `}>
      <div className={`${defaulClass}--containFrom `}>
        <div className={`${defaulClass}--containtex`}>
          <p>{greetingText}</p>
        </div>
        <div className={`${defaulClass}--containForm`}>
          <Input type={inputType} placeholder={inputPlaceholder} />
          <Button type={buttonType} label={buttonLabel} href={buttonHref} />
        </div>
      </div>
    </main>
  )
}

export default ContainFormResgister
