import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { currencyExchange } from './src/currency-exchanger.js';

async function getExchangedCurrency(currency) {
  const currencyResponse = await currencyExchange();
  if (currencyResponse === false) {
    $("#exchanged-currency").text("Something went wrong with your request") // This will become a notification that displays the specific error
  }
  else {
    $("#exchange-rate").text(`The current exchange rate from US Dollars is: ${currencyResponse.}${currency}`) //explore ability to nest template literal expressions
    $("#exchange-currency").text(`The exchanged amount is: ${}`)
  }
}

$(document).ready(function() {
  $(#"currency-form").submit(function(event) {
    event.preventDefault();
    const originCurrency = parseInt($("#usd-amount").val());
    let targetCurrencyCode = $("#currency").val();

    getExchangedCurrency(targetCurrency);
  })
})