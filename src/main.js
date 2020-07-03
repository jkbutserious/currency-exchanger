import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { currencyExchange } from './currency-exchanger.js';

async function getExchangedCurrency(_currencyCode, originCurrency) {
  const currencyResponse = await currencyExchange();
  if (currencyResponse === false) {
    $("#exchanged-currency").text("Something went wrong with your request"); // This will become a notification that displays the specific error
  }
  else {
    const exchangeRate = parseFloat(currencyResponse.conversion_rates._currencyCode);
    
    $("#exchange-rate").text(`The current exchange rate from US Dollars is: ${exchangeRate}`);
    console.log(exchangeRate.conversion_rates._currencyCode);
    console.log(currencyResponse.conversion_rates.CAD);

    $("#exchange-rate").text(`The current exchange rate from US Dollars is: ${exchangeRate}`);
    $("#exchange-currency").text(`The exchanged amount is: ${originCurrency * exchangeRate}`);
  }
}

$(document).ready(function() {
  $("#currency-form").submit(function(event) {
    event.preventDefault();
    const usdAmount = parseFloat($("#usd-amount").val());
    let targetCurrencyCode = $("#currency").val();

    getExchangedCurrency(targetCurrencyCode, usdAmount);
  });
});