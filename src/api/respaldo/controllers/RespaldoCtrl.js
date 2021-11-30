const mysqldump = require("mysqldump");
require("dotenv").config();

exports.CrearRespaldo = async (req, res, next) => {
  const filtro = 'SECSYSTEM-DB'+Date.now();
  try {
    await mysqldump({
      connection: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
      },
dump: { schema: { table: { dropIfExist: true } },
data:{format:false},
trigger: false,
shema:false
},
  
      dumpToFile: `./src/BACKUPS/${filtro}.dump.sql`,
    });

    res.download(`./src/BACKUPS/${filtro}.dump.sql`);
  } catch (error) {
    console.log(error);
    next();
  }
};
