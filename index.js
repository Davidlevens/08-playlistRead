/**
 * @see {@link https://www.npmjs.com/package/promise-mysql}
 */
const mysql = require('promise-mysql');

/**
 * Bring DB config in from separate file
 * to keep logic clean.
 */
const conf = require('./config.js');

/**
 * Main entry point to script
 * This is an 'async' function
 * @see {@link https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await}
 */
async function run() {
  const connection = await mysql.createConnection(conf);

  await createSong(connection);
  await updateSong(connection);
  await deleteSong(connection);
  await readSongs(connection);
  connection.end();
}

run();


/**
 * Adds a row to DB
 * @param {Promise} connection
 * @return {Promise}
 */
function createSong(connection) {
  console.log('Inserting a new song...\n');
  return connection.query(
      'INSERT INTO songs SET ?',
      {
        title: 'I Will Survive',
        artist: 'Donna Summer',
        genre: 'Disco',
      })
      .then((res) => {
        console.log(res.affectedRows + ' song inserted!\n');
      });
}

/**
 * Updates a row in the DB
 * @param {Promise} connection
 * @return {Promise}
 */
function updateSong(connection) {
  console.log('Updating all Song...\n');
  return connection.query(
      'UPDATE songs SET ? WHERE ?',
      [
        {
          genre: 'Disco',
        },
        {
          title: 'Rocky Road',
        },
      ])
      .then((res) => {
        console.log(res.affectedRows + ' songs updated!\n');
      });
}

/**
 * Deletes a row from the DB
 * @param {Promise} connection
 * @return {Promise}
 */
function deleteSong(connection) {
  console.log('Deleting all Taylor Swift...\n');
  return connection.query(
      'DELETE FROM songs WHERE ?',
      {
        genre: 'Pop',
      })
      .then((res) => {
        console.log(res.affectedRows + ' songs deleted!\n');
      });
}

/**
 * Reads all products from the DB
 * @param {Promise} connection
 * @return {Promise}
 */
function readSongs(connection) {
  console.log('Selecting all songs...\n');
  return connection.query('SELECT * FROM songs')
      .then((res) => {
        console.log(res);
      });
}
