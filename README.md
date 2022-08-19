# 5ccs2ins

A simple node.js web service for week 4 of 5CCS2INS


## To run on Heroku

```
heroku login
git push heroku main
heroku ps:scale web=1
```

To see logs:
```
heroku logs
```


## To run locally

```
node http-server-week4-local.js 
```


## Running with https or http

The file `http-server-week4.js` is designed to run the service over Heroku, with HTTPS, with the default port 443, whereas the file `http-server-week4-local.js` is used to run the service locally, with HTTP and a specific port.




