var mysql = require("mysql")

var connection = mysql.createConnection({
    host: 'gateway01.eu-central-1.prod.aws.tidbcloud.com',
    port: 4000,
    user: '3UC9L1aR6JSKWDL.root',
    password: 'eoU5TPER7pSzJzJw',
    database: 'test',
    ssl: {
      minVersion: 'TLSv1.2',
      rejectUnauthorized: true
    }
  });

  module.exports = connection