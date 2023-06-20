import * as sqlite3 from 'sqlite3';
import * as fs from 'fs';

// Read and parse JSON data from the file
const data = fs.readFileSync('./office_quotes.json');
const quotes = JSON.parse(data.toString());

// Open a database connection
let db = new sqlite3.Database('./quotes.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Connected to the quotes database.');
});

// Insert the JSON data into the database
quotes.forEach((quote: {quote_id: number, quote: string, character: string}) => {
  db.run(`INSERT INTO quotes(quote_id, quote, character) VALUES(?, ?, ?)`, [quote.quote_id, quote.quote, quote.character], function(err) {
    if (err) {
      console.log(err.message);
      return;
    }
  });
});

// Close the database connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Data has been successfully imported.')
  console.log('Closing the database connection.');
});