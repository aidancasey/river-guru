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
--owenboy
sequelize db:seed --seed 20210314211799-riverLocations.js
--lee waterworks
sequelize db:seed --seed 20210316211799-riverLocations.js
--ballyduff
sequelize db:seed --seed 20210318211799-riverLocations.js

--anglers rest lat & long
sequelize db:seed --seed 20210323100000-anglers-rest-riverLocations.js

-- to roll back a seed..
sequelize db:seed:undo --seed
