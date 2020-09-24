# Microservices Example
Example project for Node.js microservices! Send JSON via POST request and recieve the results from third party API. In this case we use this endpoint:
- https://openweathermap.org/api/one-call-api

<br />
<br />



Database: **MongoDB**
<br /> Framework: **Express.js**

<br />
<br />

## Features
- LIMIT requests
- Auth via Token


## Sample POST request
```bash
curl --location --request POST 'http://localhost:1337/weatheraio' \
--header 'Authorization: hhJKJ669779889hHjjhhnnkTTrge44TTbbbf' \
--header 'Content-Type: application/json' \
--data-raw '{
    "lat": 33.441792,
    "lon": -94.037689, 
    "appid": "openweather-api-key-here",
    "exclude": "hourly,daily"
}'
```
