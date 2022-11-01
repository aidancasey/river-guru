# River-Guru

Visualise water levels, tides and other interesting data for fishermen on the river lee in Cork, Ireland.

### TO DO

#### Visualise Average Hourly Flow At Inniscarra Dam

- [x] automatically download latest ESB headrace dam readings from here
      http://esbhydro.ie/Lee/04-Inniscarra-Flow.pdf
- [x] extrate the data from the pdf and get in into machine readable format
- [x] store it to postgres
- [x] API to return latest 24 hours worth of readings
- [x] build skeleton vue.js app
- [x] pipelines to deploy app / Heroku
- [x] CRON task / schedulled API to refresh data twice an hour

#### TO do List

- [x] custom domain hosting
- [x] cloudflare SSL certs
- [ ] bundle optimisations - add WebPack
- [X] migrate from Heroku to AWS Beanstalk
- [ ] serve static webapp from S3
- [ ] treeshake express app to reduce AMI size to run npm install
- [ ] upgrade to Vuetify 3
- [ ] find a decent API for moon cycles in Ireland
- [ ] push notifications when dam is on at inniscarra


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
