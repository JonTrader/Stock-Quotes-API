## Stock Quotes Project
https://project-dos-stocks.herokuapp.com/

API from https://www.alphavantage.co/documentation/

Bootstrap 4 Installed (stylization)
Plotly.js installed (graphs)

Deployed with Heroku

This project consists of gathering Stock Market data from the API offered by https://www.alphavantage.co

The home page allows the user to see the 3 month and 1 year performance of different sectors that take part within the stock market.

The second page (/quotes) will allow the user to check the 1 year/Daily chart for their desired symbol/stock. If the symbol is not found, the user will be notified that the symbol is invalid.
Also, the API has a limit of 5 calls per minute. If the user tries to gather information or have the API be called 5 times in 1 minute, they will also be notifies and be asked to be patient while API is back up for availability.



