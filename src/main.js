import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { currencyExchange } from './currency-exchanger.js';

async function getExchangedCurrency(currencyCode, originCurrency) {
  const currencyResponse = await currencyExchange();
  if (currencyResponse === false) {
    $("#exchanged-currency").text("Something went wrong with your request"); // This will become a notification that displays the specific error
  }
  else {
    const exchangeRate = currencyResponse.conversion_rates[currencyCode];
    
    $("#exchange-rate").text(`The current exchange rate from US Dollars is: ${exchangeRate}`);

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