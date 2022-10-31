// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem/index'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const responseApi = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const responseData = await responseApi.json()
    const updatedData = responseData.map(eachData => ({
      id: eachData.id,
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
      currencyLogo: eachData.currency_logo,
    }))
    this.setState({cryptoData: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, cryptoData} = this.state

    return (
      <div>
        {isLoading ? (
          <div>
            <Loader
              type="TailSpin"
              className="loadClass"
              color="#00BFFF"
              height={50}
              width={50}
            />
          </div>
        ) : (
          <div className="mainContainer">
            <h1 className="headerName">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="cryptoImage"
            />
            <ul className="unorderList">
              <li className="table-header">
                <p className="table-header-cell">Coin Type</p>
                <div className="tableUSDAndEuro">
                  <p className="table-header-cell">USD</p>
                  <p className="table-header-cell">EURO</p>
                </div>
              </li>
              {cryptoData.map(eachData => (
                <CryptocurrencyItem key={eachData.id} eachData={eachData} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
