import '../styles/desktop.scss'

const InfoService = ({titleService, titleDescription}) => {
  const defaultContain = 'contain-service'
  return (
    <div className={`${defaultContain}`}>
      <div className={`${defaultContain}--containTitle`}>
        <p className={`${defaultContain}__title`}>{titleService}</p>
      </div>
      <div className={`${defaultContain}--containDescription`}>
        <p className={`${defaultContain}__description`}>{titleDescription}</p>
      </div>
    </div>
  )
}
export default InfoService
