## Backend flow

GET "/weather"
index.js -> loaders/index.js -> loaders/express.js ->
app/routes -> app/middleware(maybe) -> app/validation -> app/controller -> app/services ->return data from openweatherAPI

## Folder structure

- index.js (entry file)
- loaders/index.js (load all related that needs to start the server, eg:express, mongoose)
- loaders/express (express related config, eg: routes, port)

##

- routes (this is where we define all our URL)
- middleware (anything that need to be rejected before enter business logic, eg: authUser)
- validation (validate frontend req, avoid something like email = SELECT \* FROM USERS)
- controller (handle stuff related to req and res)
- services (business logic/third party API)

- .env (environments variables to START YOUR APP, DO NOT COMMIT THIS FILE, this should be in .gitignore)

mvc (model, view(react), controller)
model (ORM)

config index.js, loaders/index.js, loaders/express

run npm install axios body-parser cors dotenv express express-rate-limit express-validator mongoose nodemon --save
