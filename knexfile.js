// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipe-book.db3'
    },
    useNullAsDefulat: true,
    migrations: {
      directory: './data/migrations'
    },
    pool : {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    }
  }
  

};
