# Immobilien-Suche

MERN Task from Infinno

Backend deployment: https://immobilien-suche.onrender.com
Live URL: https://immobilien-suche.vercel.app/

.env files (private file- added only for assessment purpose)

BACKEND:
PORT=4001
MONGO_CONNECTION_STRING="mongodb+srv://dev0:Dev12345@immobiliensuche.aso35.mongodb.net/"
DB_NAME="realestate"
CORS_ALLOWED_ORIGIN_LOCAL="http://localhost:3000"
CORS_ALLOWED_ORIGIN_DEPLOYMENT="https://immobilien-suche.onrender.com"

FRONTEND:
NEXT_PUBLIC_BE_URL_DEPLOYMENT="https://immobilien-suche.onrender.com"
NEXT_PUBLIC_BE_URL_LOCAL="http://localhost:4001"

NOTE: I used the same image for all properties and generated random data for some dummy records. Upon viewing the UI the all the images my seem the same but rest of the data is different.

-------------------- 🚀 Project Setup 🚀 -------------------------------
Backend Setup:
step 1: clone the project and open command prompt in the same folder
step 2: navigate to backend by running command "cd backend"
step 3: run command "npm install" or "npm i"
step 4: create a newfile in the root folder named ".env"
step 5: copy the contents of BACKEND .env from above, and paste in the newly created .env file
step 6: run command "npm start"

Backend Manuel:
The backend consists of two end points:

1. http://localhost:4001/ : returns all the properties data
   accepts params:
   a. pageNumber (default 1)
   b. pageSize (default 10)
   c. location (works with any substring or exact value)
   d. category (works with any substring or exact value)
   e. type (works with any substring or exact value)
   f. priceRange (must be a string made of numbers seperated by hyphen eg. 100-200)
   g. areaRange (must be a string made of numbers seperated by hyphen eg. 100-200)
   h. zimmerRange (must be a string made of numbers seperated by hyphen eg. 100-200)
   Params c. throug h. are blank by default and are used for additional filturing.

2. http://localhost:4001/ : returns an array of distinct locations of properties. It is used to populate location filter dropdown

Frontend Setup:
step 1: if already cloned frontend should also be included withing the same repo
step 2: navigate to frontend by running command "cd frontend"
step 3: run command "npm install" or "npm i"
step 4: create a newfile in the root folder named ".env"
step 5: copy the contents of FRONTEND .env from above, and paste in the newly created .env file
step 6: run command "npm run dev"
step 7: visit http://localhost:3000 in the browser

Frontend Manuel:
The landing page should consist of a few dropdowns, and display some properties data once loaded. After selecting a value from dropdown and closing it, the filter should immediately take effect.
Users should be able to cycle to pages from bottom pages buttons.
Page number should reset upon chnaging filter.

Please feel free to reach me out if I missed something or you need more information. 😊
