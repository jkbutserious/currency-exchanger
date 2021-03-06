# Currency Exchanger

#### Asynchrony and API Call Project for Epicodus, 7.3.2020

#### By Jeff Kim

## Description

Planning a trip? Frequent flyer? Investing in foreign markets? Just like looking at pretty-colored bills?

It's never a bad idea to know how your cash assets measure up in other nations, especially if you plan on visiting or purchasing goods there anytime soon. Keep up-to-date on the strength of the dollar with this handy Currency Exchanger!

This project uses the ExchangeRate-API to get data on the latest exchange rate for the US Dollar for 50 international currencies. Simply enter a value in USD and click the **Convert** button!

## Specs

1. Program should allow users to select a type of currency from a drop-down list (of at least 5 different currencies) to target for exchange
Sample Input: User clicks a drop-down list to select South Korean Won
Sample Output: Site exchanges US dollars to South Korean won

2. Program should allow users to enter a specific amount of currency to exchange from US dollars
Sample Input: User enters $22
Sample Output: Program sends $22 to exchange to won

3. Program should make an API call to ExchangeRate-API to convert the specified amount from US dollars to the selected currency
Sample Input: User clicks the "Exchange" button
Sample Output: $22 = 26411.88 won

4. Program should return a notification if the API call results in any error that states what the error is
Sample Input: 404 error during API call
Sample Output: Notification: Error 404!

5. Program should notify users if their selected currency does not exist
Sample Input: User (somehow) selects US Won
Sample Output: Notification: That currency does not exist.

## Setup/Installation Requirements

To contribute to this project, you will need to perform the following instructions in order:

### Obtain an API Key
1. Open your preferred browser.
2. Navigate to https://www.exchangerate-api.com/.
3. In the **Your Email Address** field, enter your email address and click the **Get Free Key** button.
4. Check your email for a message from ExchangeRate-API and click the link in the email body to confirm your email address.
5. In your [dashboard](https://www.exchangerate-api.com/app/dashboard), you can see your API key. Do not do anything with your API key, yet - see the [Create .env and .gitignore files](### Create .env and .gitignore files) section, below.

### Fork and download the repository
1. Open your preferred browser.
2. Navigate to https://github.com/jkbutserious/currency-exchanger.
3. Log into or sign up for your GitHub account.
4. Click the **Fork** button to copy the repository and all source code.
5. From your forked repository, you can download or clone the repository, by clicking the **Clone or download** button.
   * To clone the repository in GitHub Desktop, click the **Open in Desktop** option
   * To download the repository, click the **Download ZIP** option, save the archive to your computer, and extract it to the folder of your choice
6. Use your preferred code editor to edit `index.html`, `styles.css`, `currency-exchanger.js` and/or `main.js`.

**Note**: you should not attempt to edit other files in the repository unless you are familiar with webpack and nodeJS, as these are essential includes and can cause issues.

### Create .env and .gitignore files
1. In the root directory of your forked repository, create a blank file called `.env` and a blank file called `.gitignore`.
2. Open both files in your preferred code editor.
3. In your `.env` file, copy your API key using this format: `API_KEY = YOUR_API_KEY_HERE`. 
**IMPORTANT**: Do not enter your API key in any other file or code block in this repository. Doing so will expose your API key (and possibly other sensitive information) to any user who can view your GitHub repository or the final web page.
4. In your `.gitignore` file, add the following lines:

    ```gitignore
    node_modules/
    .DS_Store
    dist/
    .env
    ```

### Prepare code to push
1. Clean, refactor, and scrub your code of any sensitive information (such as any instances of your API key anywhere other than your .env file).
2. Save any changes you make in your code editor and use your preferred git solution to commit your changes.
3. Push your changes to your forked repository.

## Known Bugs

**Initial Release**
* No known bugs

## Support and contact details

To report any issues with this page or to contribute to this project, contact Jeff Kim at kim2jy@hotmail.com.

## Technologies Used

This page was created using the following technologies:

* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery
* Webpack

## License

Copyright © 2020 Jeffrey Kim

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.