import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { currencyExchange } from './currency-exchanger.js';

async function getExchangedCurrency(currencyCode, originCurrency) {
  const currencyResponse = await currencyExchange();
  if (currencyResponse.status !== 200) {
    $("#exchange-currency").text(`Sorry, something went wrong (Error code: ${currencyResponse.status})`); // This will become a notification that displays the specific error
  }
  else if (currencyResponse.content.conversion_rates.length === 0 || !currencyResponse.content.conversion_rates[currencyCode]) {
    $("#exchange-currency").text("The currency " + currencyCode + " doesn't exist.")
  }
  else {
    const exchangeRate = currencyResponse.content.conversion_rates[currencyCode];
    
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