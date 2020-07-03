// Business Logic
export async function currencyExchange() {
  try{
    let exchangedAmount = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_Key}/latest/USD`);
    let exchangedResponse;
    let errorCode;
    if (exchangedAmount.ok && exchangedAmount.status == 200) {
      exchangedResponse = await exchangedAmount.json();
      
    } else {
      exchangedResponse = false; //This will become the error code returned
    }
    return exchangedResponse;
  } catch(error) {
    return false;
  }
}