

Steps to build a bastion server / jump box to run sequelize scripts
these are the commands to bootstrap a bare bones AWS Linux AMI with enough dev tools to run Sequilize commands
directly on the db 


++++++++++++++++++++++++++++++++++++
(1) Install Postgres, Git Node ...
++++++++++++++++++++++++++++++++++++

aidancasey@TW-D-M-AC-2 code %  ssh -i "aidans-keys.pem" ec2-user@ec2-52-211-196-112.eu-west-1.compute.amazonaws.


[ec2-user@ip-172-31-37-244 ~]$ sudo amazon-linux-extras install postgresql10
[ec2-user@ip-172-31-37-244 ~]$ psql -h rivergurudb.cmwys2cpmxhn.eu-west-1.rds.amazonaws.com -U postgres
Password for user postgres: 
[ec2-user@ip-172-31-37-244 ~]$ git
[ec2-user@ip-172-31-37-244 ~]$ sudo yum update -y
[ec2-user@ip-172-31-37-244 ~]$ sudo yum install git -y

[ec2-user@ip-172-31-37-244 code]$ sudo curl --silent --location https://rpm.nodesource.com/setup_16.x | b
[ec2-user@ip-172-31-37-244 code]$ sudo curl --silent --location https://rpm.nodesource.com/setup_18.x | bash -
[ec2-user@ip-172-31-37-244 code]$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
[ec2-user@ip-172-31-37-244 code]$ . ~/.nvm/nvm.sh
[ec2-user@ip-172-31-37-244 code]$ nvm install --lts


[ec2-user@ip-172-31-37-244 code]$ nvm install --lts

Installing latest LTS version.....


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
(2) Now clone repo, install sequelize and run the commands
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

[ec2-user@ip-172-31-37-244 code]$ git clone https://github.com/aidancasey/river-guru.git

[ec2-user@ip-172-31-37-244 river-guru]$ npm install --save-dev sequelize-cli

.....

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
(3) Now set the db credentials via Nano
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

[ec2-user@ip-172-31-37-244 river-guru]$ sudo nano /server/config/config.json

[ec2-user@ip-172-31-37-244 river-guru]$ psql -h rivergurudb.cmwys2cpmxhn.eu-west-1.rds.amazonaws.com -U postgres
Password for user postgres: 
psql (10.21, server 13.7)
WARNING: psql major version 10, server major version 13.
         Some psql features might not work.
SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)
Type "help" for help.


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
(4) Now create DB via PSQL commands
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

postgres=> CREATE DATABASE river-guru-db
postgres-> /l
postgres-> \l
                                  List of databases
   Name    |  Owner   | Encoding |   Collate   |    Ctype    |   Access privileges   
-----------+----------+----------+-------------+-------------+-----------------------
 postgres  | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 rdsadmin  | rdsadmin | UTF8     | en_US.UTF-8 | en_US.UTF-8 | rdsadmin=CTc/rdsadmin+
           |          |          |             |             | rdstopmgr=Tc/rdsadmin
 template0 | rdsadmin | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/rdsadmin          +
           |          |          |             |             | rdsadmin=CTc/rdsadmin
 template1 | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/postgres          +
           |          |          |             |             | postgres=CTc/postgres
(4 rows)

postgres-> CREATE DATABASE river-guru-db;
ERROR:  syntax error at or near "-"
LINE 1: CREATE DATABASE river-guru-db
                             ^
postgres=> CREATE DATABASE "river-guru-db";
CREATE DATABASE
postgres=> \l
                                    List of databases
     Name      |  Owner   | Encoding |   Collate   |    Ctype    |   Access privileges   
---------------+----------+----------+-------------+-------------+-----------------------
 postgres      | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 rdsadmin      | rdsadmin | UTF8     | en_US.UTF-8 | en_US.UTF-8 | rdsadmin=CTc/rdsadmin+
               |          |          |             |             | rdstopmgr=Tc/rdsadmin
 river-guru-db | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
 template0     | rdsadmin | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/rdsadmin          +
               |          |          |             |             | rdsadmin=CTc/rdsadmin
 template1     | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/postgres          +
               |          |          |             |             | postgres=CTc/postgres
(5 rows)

postgres-> \q

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
(5) Now run sequelize to seed db
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

[ec2-user@ip-172-31-37-244 river-guru]$ sudo nano server/config/config.json
[ec2-user@ip-172-31-37-244 river-guru]$ sudo nano server/config/config.json
[ec2-user@ip-172-31-37-244 river-guru]$ sudo nano server/config/config.json
[ec2-user@ip-172-31-37-244 river-guru]$ sudo nano server/config/config.json
[ec2-user@ip-172-31-37-244 river-guru]$ ls
app.js  bin  client  _db-commands.md  node_modules  package.json  package-lock.json  README.md  _sequelize.md  server
[ec2-user@ip-172-31-37-244 river-guru]$ npm install
[ec2-user@ip-172-31-37-244 river-guru]$ npm install -g sequelize-cli
[ec2-user@ip-172-31-37-244 river-guru]$ sequelize db:migrate

[ec2-user@ip-172-31-37-244 river-guru]$ sequelize db:seed:all

[ec2-user@ip-172-31-37-244 river-guru]$ psql -h rivergurudb.cmwys2cpmxhn.eu-west-1.rds.amazonaws.com -U postgres
Password for user postgres: 
psql (10.21, server 13.7)
WARNING: psql major version 10, server major version 13.
         Some psql features might not work.
SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)
Type "help" for help.

postgres=> \c "river-guru-db"
psql (10.21, server 13.7)
WARNING: psql major version 10, server major version 13.
         Some psql features might not work.
SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)
You are now connected to database "river-guru-db" as user "postgres".
river-guru-db=> \dt
              List of relations
 Schema |       Name       | Type  |  Owner   
--------+------------------+-------+----------
 public | FlowReadings     | table | postgres
 public | RiverLevels      | table | postgres
 public | RiverLocations   | table | postgres
 public | SequelizeMeta    | table | postgres
 public | SunCalendars     | table | postgres
 public | TideTimes        | table | postgres
 public | WeatherForecasts | table | postgres
(7 rows)

river-guru-db=> \dt+
                            List of relations
 Schema |       Name       | Type  |  Owner   |    Size    | Description 
--------+------------------+-------+----------+------------+-------------
 public | FlowReadings     | table | postgres | 0 bytes    | 
 public | RiverLevels      | table | postgres | 0 bytes    | 
 public | RiverLocations   | table | postgres | 16 kB      | 
 public | SequelizeMeta    | table | postgres | 8192 bytes | 
 public | SunCalendars     | table | postgres | 8192 bytes | 
 public | TideTimes        | table | postgres | 8192 bytes | 
 public | WeatherForecasts | table | postgres | 8192 bytes | 
(7 rows)

