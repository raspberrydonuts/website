# Introduction
http://www.jaredplim.com

Built with React, deployed with Github Pages. Click [here](http://www.jaredplim.com) to check it out!

# Credits
I forked an existing [repository](https://github.com/filipenatanael/vuejs-colorlib-jackson) and put my own spin on it. Thank you Filipe Natanael (filipenatanael) for rebuilding the ColorLib template source code.

# Maintenance Guide
Develop on brach master
When finished with an iteration, run  `npm run build`
Then run `npx gh-pages -b gh-pages -d build` to deploy the github page
In Settings -> Pages, make sure branch source is gh-pages and /(root) is selected

# Site Analytics
Custom site data analytics engine built with Node.js and MongoDB and deployed both of these to an AWS EC2 instance.

## Steps on getting MongoDB and Node.js server to stay running after ssh-ing into the AWS EC2 instance:

### Mongo:
`sudo mongod --fork --dbpath data/db --logpath /var/log/mongodb/mongod.log --bind_ip 0.0.0.0`
  
### Node.js:
`sudo pm2 start index.js (be inside website/analytics directory)`

These commands will allow the them to be run as background processes so that they will keep running even when you exit the ssh connection
  
## Site Data Analytics API:
Call this endpoint to see how many visits my webpage has. 
  
`ec2-3-132-140-197.us-east-2.compute.amazonaws.com:4000/getVisits`

## Coming Soon

1. More metrics to be measured (time spent on page, links clicked, etc)
2. Dashboard for the metrics
