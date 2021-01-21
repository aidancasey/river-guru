
# River-Guru

Visualise water levels, tides and other interesting info for fishermen on the river lee in Cork, Ireland.




river , location 

### TO DO

#### Visualise Average Hourly Flow At Inniscarra Dam
- [X] automatically download latest ESB headrace dam readings from here 
 http://esbhydro.ie/Lee/04-Inniscarra-Flow.pdf
- [X] extrate the data from the pdf and get in into machine readable format
- [X] store it to mongodb
- [X] API to return latest 24 hours worth of readings
- [ ] build skeleton vue.js app
- [ ] pipelines to deploy app to Vercel / Heroku
- [ ] CRON task / schedulled API to refresh data twice an hour

#### Visualise Tide Info for next 48 hours
- [ ] find a decent API to consume this info (weather underground??)
- [ ] find a decent API for moon cycles in Ireland

#### Visualise Current Temaperature at the kingsley wier

#### Visualise weather forecast for next 48 hours

#### Analytics to predict good times to go fishing ...


#### Push Notifications to tell me to go fishing when the stars align !


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
                                                