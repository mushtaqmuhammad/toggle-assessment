# toggle-assessment functionality
toggle-assessment folder is the react folder and the other folders and files are related to the backend. <br/>
Two endpoint are created to update and get the score of the user. <br/>
Rapid API is being used to get the latest BTC price after every minute. <br/>
In the toggle assessment folder: <br/>
 Button component is available to which we pass title and function we need. <br/>
 Score component simply updates the score being displayed. <br/>
Service is created to update, get and reset the score. Another method is available to get the latest BTC Price. <br/>

# To run the app
create .env file in base folder and add the PORT = 5000 and DB_URL = "mongodb+srv://admin:admin@cluster0.byfuudq.mongodb.net/?retryWrites=true&w=majority". <br/>

## Available Scripts
Install the packages in the base folder for the backend by command [npm i] <br/>
Install the packages inside the client ( toggle-assessment ) folder by command [npm i] <br/>
After installing the packages: <br/>
run [npm start] in the base folder and both front-end and server will be started. <br/> 
run [npm run client] in the base folder to run the react app only. <br/>
run [npm run server] in the base folder to start the server only. <br/>
