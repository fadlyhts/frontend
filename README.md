# Jakarta Park Finder Frontend

A React-based web application for finding and exploring parks in Jakarta. Built with Vite, React, Tailwind CSS, and more.

## Features

- Interactive park map using Leaflet
- Park search functionality
- User authentication
- Responsive design with Tailwind CSS
- Park details and information
- Toast notifications

## Tech Stack

- React 18
- Vite
- React Router DOM v7
- Axios
- Leaflet & React Leaflet
- Tailwind CSS
- DaisyUI
- React Toastify

## Prerequisites

- Node.js >= 18.0.0
- npm or yarn

## Installation

1. Clone the repository

2. Install dependencies: 
```bash
npm install
```
3. Create .env file in root directory:
```bash
VITE_API_URL=https://backend-jakartapark-09fd192d5e5b.herokuapp.com/api
VITE_APP_NAME=Jakarta Park Finder
```
## Development
Run the development server:
```bash
npm run dev
```
## Build 
Build for production:
```bash
npm run build
```

## Deployment
The application is configured for Heroku deployment. To deploy:

- Install Heroku CLI
- Login to Heroku
- Create new Heroku app
- Push to Heroku:
```bash
git push heroku main
```

## Environment Variables
- VITE_API_URL: [Backend API URL](https://backend-jakartapark-09fd192d5e5b.herokuapp.com/api)
- VITE_APP_NAME: Application name
