# Forum App

## Overview
This forum app facilitates communication and collaboration among users. It allows users to create, view, and interact with talkbacks, make appointments, and chat with the creator.

## Features
- **Talkbacks:** Users can create and view discussion threads on various topics.
- **Comments:** Users can comment on talkbacks to share thoughts and engage in conversations.
- **Appointments:** Users can schedule appointments with the creator for further discussions or consultations.
- **Chat:** Users can chat with the creator in real-time for immediate feedback or support.
- **CRUD Operations:** The app supports basic CRUD operations for managing content.

## Installation/Dependencies

to make this app work you need a few dependencies.

**\*\*\*** api folder **\*\*\***

1. navigate to the api folder with "cd api" command.
2. create ".env" file to and add the environment variables;

   DB_USER=your-name
   DB_PASSWORD=your-password
   DB_NAME=database-name
   JWT_SECRET=any secret name you want

3. create images folder inside the api folder to get all the images.
4. run the command "npm i" to install the dependencies.
5. run "npm start" to start the app.
   
**\*\*\*** client folder **\*\*\***
1. navigate to the client folder with "cd client" command.
2. run "npm start" to start the app

## Technologies Used
- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Real-time Chat:** Socket.io
- **Authentication:** JWT
- **Calendly:** Third party API 
