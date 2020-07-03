import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { currencyExchange } from './src/currency-exchanger.js';

async function getExchangedCurrency() {
  const currencyResponse = await currencyExchange();
  if (currencyResponse === false) {
    $("#exchanged-currency").text("Something went wrong with your request") // This will become a notification that displays the specific error
  }
  else {
    $("#exchange-currency").text(currencyResponse.`${targetCurrency}`)
  }
}

$(document).ready(function() {
  $(#"currency-form").click(function() {
    const targetCurrency = //target-currency-radio-button.val()

    
  })
})