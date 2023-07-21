# A simple React and Node Project

This project was built in order to illustrate how to communicate with a node serve using the React library.

My thought process in building this application is show efficient means of getting data out of a node server using express and nodemon.

To make it more efficient, I created a proxy that will point to the server address in the package.json file of the React frontend in order to make relative requests to the API end point and also to avoid any issues with cross-origin.

I made us of Nodemon in the server to enable the server monitor changes and effect them i real time.

The server is set to listen on port 5000 while the client is running on port 3000.

To start the application, cd into the server in your terminal and run "npm run dev" while to start the front end client, you run the command "npm start" on the terminal"

Once the application is started, the app displays the data gotten from the backend server.
