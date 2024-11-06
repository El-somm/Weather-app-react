
Getting Started

To get started with this app, follow these steps:

	1.	Clone the Repository
git clone https://github.com/El-somm/weather-app-react.git
cd weather-app-react

	2.	Install Dependencies
Run the following command to install the necessary dependencies:
npm install
npm i react-select-async-paginate
npm i eact-accessible-accordion

	3.	Set Up API Keys
You will need two API keys for this project: one from GeoDB (for location search) and another from OpenWeatherMap (for weather data). Follow the steps below to obtain these keys:

	•	GeoDB API (Location Search)
	1.	Go to GeoDB API on RapidAPI.
	2.	Sign up or log in to RapidAPI.
	3.	Subscribe to the API and obtain your API key.
	4.	Store the API key in a api.js file in the src of your project: GEO_API_KEY=your-geo-db-api-key
	•	OpenWeather API (Weather Data)
	1.	Go to OpenWeatherMap and sign up or log in.
	2.	Obtain your free API key.
	3.	Store the OpenWeather API key in your api.js file:
        WEATHER_API_KEY=your-openweather-api-key
	4.	Run the Application
Once the dependencies are installed and API keys are configured, run the application with:
npm start
This will start the app in development mode, and you can view it in your browser at http://localhost:3000.

Available Scripts

In the project directory, you can run the following commands:

npm start

Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.
The page will reload if you make changes.

npm run build

Builds the app for production to the build folder.
The app is optimized for the best performance and is ready to be deployed.

npm run eject

	Warning: This is a one-way operation. Once you eject, you can’t go back!

If you’re not satisfied with the default configuration, you can eject to get full control over the build setup. However, this is typically not needed for smaller projects and can make future updates more difficult.

External Libraries

This project uses the following libraries and tools:

	•	React: JavaScript library for building user interfaces.
	•	React-Accessible-Accordion: A library for creating accessible accordion UI components.
	•	Dotenv: Used to manage environment variables.


Code Organization

The app is organized as follows:

	•	src/: Contains the source code for the app.
	•	components/: Contains React components for displaying different sections of the app.
	•	CurrentWeather.js: Displays the current weather data for a city.
	•	Forecast.js: Displays the 7-day weather forecast.
	•	Search.js: Allows users to input a city and fetch weather data.
	•	api.js: Contains functions to make requests to the APIs for weather and city data.
	•	App.js: The main component where the app is initialized and the state is managed.
	•	App.css: Styles for the application.
	•	public/: Contains static assets like images and icons.
	•	.env: Stores environment variables, such as API keys.