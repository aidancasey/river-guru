
Notes
-  Delete the node modules folders first don't zip them up
-  Include the dist folder with the web client fully built as this is served directly, longer term lets move this to S3
-  delete package.json.lock file as NPM wasn't installing zip
- npm update needed to fix up the package.json file
- npm install ran out of memory on a t3.micro instance so I beefed up the instance, try to tree shake and reduce package json in time


1. zip top level folder using the following command to make a deployable zip file for elastic beanstalk
(note the final full stop in the command)

 zip -r upload-12.zip .


