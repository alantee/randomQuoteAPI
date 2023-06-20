1. **Navigate to the project directory**
    ```
    cd randomQuoteAPI
    ```

2. **Install the dependencies**
    ```
    yarn install
    ```

3. **Start the server**
    ```
    yarn start
    ```
   _Note: This command will start the server and also create the `quotes.db` SQLite database file in the root directory of the project, if it does not already exist._

4. **Stop the server**
   Once the server starts and the `quotes.db` file is created, you can stop the server by pressing `Ctrl+C`.

5. **Run the import script to populate the database with quotes**
    ```
    npx ts-node importData.ts
    ```
   _Note: The `importData` script requires a file named `office_quotes.json` in the root directory of the project. This file should contain the quotes data in JSON format._

6. **Restart the server**
    ```
    yarn start
    ```
    The server is now running and ready to serve requests.

## API Endpoints

The server provides the following endpoints:

- **GET /quotes**: Returns all quotes.
- **GET /quotes/random**: Returns a random quote.
- **GET /quotes/character/:character**: Returns all quotes from a specific character. Replace `:character` with the name of the character.

## How to Use

You can use tools like curl, Postman, or your web browser to make requests to the server. Here are some examples of how to use the endpoints:

- To get all quotes:
    ```
    http://localhost:3000/quotes
    ```

- To get a random quote:
    ```
    http://localhost:3000/quotes/random
    ```

- To get all quotes from a specific character (e.g., Pam):
    ```
    http://localhost:3000/quotes/character/Pam
