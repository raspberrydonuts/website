# Personal Website 
My personal website made using React and deployed with Github Pages

www.jaredplim.com

Currently working on a site data analytics engine with Node.js and MongoDB. Working to deploy this to an AWS EC2 instance.


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
