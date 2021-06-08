#Sets the container image that will be used during new image creation
FROM node:apline

#Set current directory to /app
WORKDIR /app

#Copy all the files from our current directory into the directory /app
COPY . /app

#Install node modules and packages for the project
RUN npm install 

#Run the actions 
CMD ["npm", "start"]

