

to make a new model
 
 sequelize model:generate --name TideTime --attributes location:string,height:double,hilo:string,time:date

--but if you need to make nullable cols, run command and hand craft it...

sequelize model:generate --name RiverLevel --attributes river:string allowNull:false,locationID:integer,value:double,min:double,max:double,mean:double,recordedAt:date

to run it into the db

sequelize db:migrate

to lay down seed data ( Need to call each file once)

sequelize db:seed --seed 20210121211744-riverLocations.js
sequelize db:seed --seed 20210312211744-riverLocations.js
sequelize db:seed --seed 20210314211744-riverLocations.js
sequelize db:seed --seed 20210314211747-lowercaselee.js
sequelize db:seed --seed 20210314211799-riverLocations.js