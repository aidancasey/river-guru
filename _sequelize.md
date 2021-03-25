### To autogenerate a new data model

sequelize model:generate --name TideTime --attributes location:string,height:double,hilo:string,time:date

--but if you need to make nullable cols, run command and hand craft it...

sequelize model:generate --name RiverLevel --attributes river:string allowNull:false,locationID:integer,value:double,min:double,max:double,mean:double,recordedAt:date

### to run it into the db

sequelize db:migrate

to lay down seed data ( Need to call each file once)
sequelize db:seed --seed 20210325100001-riverLocations.js

-- to roll back a seed..
sequelize db:seed:undo --seed 20210325100001-riverLocations.js
