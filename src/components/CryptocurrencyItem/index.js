// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {eachData} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = eachData
  return (
    <li>
      <div className="listItemContainer">
        <div className="logoAndName">
          <img
            src={currencyLogo}
            alt={currencyName}
            className="currencyLogoImage"
          />
          <p>{currencyName}</p>
        </div>
        <div className="usdAndEuroValue">
          <p className="euroValue">{usdValue}</p>
          <p>{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
