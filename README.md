
# River-Guru

Visualise water levels, tides and other interesting info for fishermen on the river lee in Cork, Ireland.


### TO DO

Visualise Average Hourly Flow At Inniscarra Dam

- every hour automatically download latest ESB headrace dam readings from here 
 http://esbhydro.ie/Lee/02-Inniscarra-Headrace.pdf
- extrate the data from the pdf and get in into machine readable format (csv)
- dump it to mongodb
- visualise it in

Visualise Tide Times for next 48 hours

Visualise Current Temaperature at the kingsley wier

Visualise weather forecast for next 48 hours

Analytics to predict good times to go fishing ...


Push Notifications to tell me to go fishing when the stars align !


### Installing

Mongodb
```
brew install mongodb-community
```

Run mongod as a service

```
brew services start mongodb-community
```

MEAN stack inspired from https://github.com/linnovate/mean
                                                