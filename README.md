# Weather Country API

A simple Node.js application that fetches weather information for a given country using a Weather API.

This project was created as part of my Back-End learning journey with SEF Academy.

---

## Features

- Get country name from the terminal.
- Fetch weather data using an external API.
- Display:
  - Temperature
  - Latitude
  - Longitude
- Handle different types of errors:
  - Invalid API token
  - Country not found
  - Network errors

---

## Project Structure

```
weather-country-api/
│
├── data/
│   └── forecast.js
│
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

---

## Usage

Run the application from the terminal.

```bash
node app.js Egypt
```

Example Output

```text
DATA:
Location: Cairo
Condition: Sunny
Temperature: 35.1°C
Latitude: 30.05
Longitude: 31.25
```

---

## Error Handling

The application handles:

- Invalid API key/token.
- Country not found.
- Network connection errors.

---

## Technologies Used

- Node.js
- Axios
- Weather API
- JavaScript (ES6)

---

Back-End Learning Journey with **SEF Academy** 
