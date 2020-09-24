# Microservices Example
Example project for Node.js microservices! Send JSON via POST request and receive the results from a sample third party API. In this case we use this endpoint:
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

<br />
<br />


_______________________________________

<br />
<br />


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


You can define your database name inside of your config file (**./admin/config.json**). 
<br /><br />
We use the **Authorization Header** at the POST request for our Auth Token! Create in your database a collection called **auth** and insert your token like this:
```javascript
{
    "token": "hhJKJ669779889hHjjhhnnkTTrge44TTbbbf"
}
```
