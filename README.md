# Sell Things NodeJS API REST

This API REST is created with NodeJS, Express and use a MongoDB database.

With it, you can fetch data about sold items, authenticate users and then create, modify or delete an item stored in the database.

## Getting Started

### Prerequisites

This API uses the following tech stack:

-   [Node.js](https://nodejs.org/en)
-   [MongoDB](https://www.mongodb.com/) to host a MongoDB database locally or [Atlas](https://www.mongodb.com/atlas/database) for a cloud hosted one
-   [PNPM](https://pnpm.io/)

Please make sure you have the latest versions.

### Instructions

1. Create the database locally or online
2. Set 'DB_URL' variable in a .env file accordingly
3. Clone the repo onto your computer
4. Open a terminal window in the cloned project
5. Run the following commands:

```bash
# Install dependencies
pnpm install

# Start local dev server with automatic restart on changes
pnpm dev

# OR start static local server
pnpm start
```

Your server should now be running at http://locahost:3000 (default URL and port)

### Test the API with a front-end

This API can be tested with an already built front-end. Front-end repo can be found [here](https://github.com/OpenClassrooms-Student-Center/go-fullstack-v3-fr).

Instructions :

```bash
# Clone front-end project
git clone https://github.com/OpenClassrooms-Student-Center/go-fullstack-v3-fr.git frontend
cd frontend
# Install dependencies and run it
npm install
npm run start
```

## API endpoints

-   **POST: /api/auth/signup**

Used to create a user and save it in the database.

The request body needs to contain email and password properties.

-   **POST: /api/auth/login**

Used to authenticate a user and get a JWT token.

The request body needs to contain email and password properties.

-   **GET: /api/stuff/ or /api/stuff/:id**

Fetch data from all sold items (things) or only one if an id is specified.

-   **POST: /api/stuff/**

Add a new sold item (thing) in the database.

The request body needs to contain title, description, imageUrl, userId, price properties.

-   **PUT: /api/stuff/:id**

Modify a sold item (thing) already in the database.

The request body needs to contain title, description, imageUrl, userId, price properties.

-   **DELETE: /api/stuff/:id**

Delete a sold item (thing) already in the database.

## Environment variables

It is possible to modify some back-end app settings with environment variables.

Create or modify the .env file in the project root folder and add in it environment variables.

Here is the used ones :

### NODE_ENV

Specify the node.js environnement.

If NODE_ENV is set to "production", Express will be optimized for production.

### PORT

Modify the server listening port.

Otherwise, the default port is "3000".

### SECRET_KEY

This back-end app use JWT tokens to authenticate HR users requests.

It is possible to store your own secret key, in the SECRET_KEY environment variable, that will be used to generate these tokens.

Otherwise, the default secret key is "DEFAULT_SECRET_KEY".

### DB_URL

Modify the URL of the database hosting platform (can be locally or cloud hosted).

Otherwise, the default URL is "mongodb://localhost:27017".
