const { Pool } = require("pg");

class ServicioPG {
    constructor() {
        this.pool = new Pool({
            user: "edlilmgtthuhfu",
            host: "ec2-3-220-23-212.compute-1.amazonaws.com",
            database: "d3d81jr0ldljo",
            password: "4eb21639a475c4a854c3fb58efbabef78628aa1f6fdf2d863d7ecf19c94cd79a",
            port: 5432,
            ssl:{rejectUnauthorized:false}
          });
    }
/**
 * Se ejecuta una consulta sql, se debe hacer con un metodo
 * asincrono ya que el orden de ejecucion es relevante
 * @param {*} sql la consulta a ejecutar
 */
async ejecutarSql(sql) {
    let respuesta = await this.pool.query(sql);
    return respuesta;
  }
}

//Se exporta la clase para poder usarla despues en todo el proyecto
module.exports = ServicioPG;