// Business Logic
export async function currencyExchange() {
  try{
    let exchangedAmount = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
    let exchangedResponse;
    if (exchangedAmount.ok && exchangedAmount.status == 200) {
    exchangedResponse = {status: exchangedAmount.status, content: await exchangedAmount.json()};
    console.log(exchangedResponse.result);
    } else {
      exchangedResponse = {status: exchangedAmount.status};
    }
    return exchangedResponse;
  } catch(error) {
    return {status: -1};
  }
}