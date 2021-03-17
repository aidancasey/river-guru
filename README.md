
# River-Guru

Visualise water levels, tides and other interesting data for fishermen on the river lee in Cork, Ireland.

### TO DO

#### Visualise Average Hourly Flow At Inniscarra Dam
- [X] automatically download latest ESB headrace dam readings from here 
 http://esbhydro.ie/Lee/04-Inniscarra-Flow.pdf
- [X] extrate the data from the pdf and get in into machine readable format
- [X] store it to postgres
- [X] API to return latest 24 hours worth of readings
- [X] build skeleton vue.js app
- [X] pipelines to deploy app  / Heroku
- [X] CRON task / schedulled API to refresh data twice an hour

#### Deployments
- [X] custom domain hosting
- [X] cloudflare SSL certs
- [] bundle optimisations - add WebPack


#### Visualise Tide Info for next 48 hours
- [X] find a decent API to consume this info (npm tide-times fork)
- [ ] find a decent API for moon cycles in Ireland

#### Visualise Current Temaperature at the kingsley wier

https://waterlevel.ie/0000019102/0002/summary/


#### Visualise weather forecast for next 48 hours

#### Analytics to predict good times to go fishing ...


#### Push Notifications to tell me to go fishing when the stars align !


### Installing Locally

DB schema
```
npm install --save-dev sequelize-cli
sequelize db:migrate  
sequelize db:seed:all   

```

Running the app
```
npm run start
```



### Deploying DB schema and seed data via Heroku CLI

```
heroku addons:create heroku-postgresql:hobby-dev
npm install -g sequelize-cli
heroku run bash
sequelize db:migrate  
sequelize db:seed:all  
heroku restart

```
                                                