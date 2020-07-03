// Business Logic
export async function currencyExchange() {
  try{
    let exchangedAmount = await fetch(`https://pro.exchangerate-api.com/v6/{process.env.API_Key}/pair/USD/{targetCurrency}`);
    let exchangedResponse;
    if (exchangedAmount.ok && exchangedAmount.status == 200) {
      exchangedResponse = await exchangedAmount.json();
    } else {
      exchangedResponse = false;
    }
    return exchangedResponse;
  } catch(error) {
    return false;
  }
}