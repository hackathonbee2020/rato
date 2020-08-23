# Bee Chat

# Environment Variables

Before running the back-end REST API, you need to set up you `.env` file. Use the available example, provided within this project, to create yours.

You can copy it by running the following command at the root directory of this project:

```sh
$ cp .env.example .env
```

# Setup

Before running this project, you have to install all the required dependencies. Do it by executing the following command:

```sh
$ npm install
```

# Running Migrations

Once you've installed all the dependencies, before starting your server, you have to run some migrations to create the database's schemas.

You can do this by running:

```sh
$ npx sequelize db:migrate
```

If you need to revert the changes, execute the following command in your terminal:

```sh
$ npx sequelize db:migrate:undo:all
```

# Running the API

Once you've done all the previous steps, you're ready to start using the API. Start the back-end application by running the following command:

```sh
$ npm run start
```

The Node.js app uses port `3000` as default, feel free to change it.

The API base URL is:

```
http://localhost:3000/api/v1
```

# Technical Decisions
## dotenv
Setting environment variables every time before running the server can be hard to maintain and lead to typo mistakes, so, loading those variables from a `.env` files sound a lot better.

It's not a good practice to commit a `.env` file to your project's repository. A better approach is to provide a `.env.example` prefilled with the variables names. You can always the values of your variables if they don't contain any sensitive information, for example, we can set the value for a variable that holds that server's running port:

```
PORT=3000
```

Now, we are providing an environment file example with the expected variables without compromising any credentials. We need to copy the sample file, and, this way, we can keep all of our variables in a central place, making it easier to manage all values.