select * from "RiverLevels" where river = 'blackwater'
AND value IS NULL 
AND "RiverLevels"."recordedAt"  >= '2021-03-15 00:00:00.000 +00:00'
