import * as mysql from 'mysql2';

(async function prepareTestData() {
  //MYSQL config 
  const config = {};
  const connection = mysql.createConnection(config);

  connection.connect(async (error) => {
    if (error) {
      throw error;
    }

    const runQuery = async (query: string) => {
      return new Promise((resolve, reject) => {
        connection.query(query, (error, result) => {
          if (error) {
            return reject(`${error.message}`);
          }

          resolve(result);
        })
      })
    }
    
    //Query example
    const renameEmployeeQuery = (firstName: string, lastName: string, employeeId: string): string => {
      return `UPDATE t_employees SET NAME = "${firstName}", LASTNAME = "${lastName}" WHERE employee_id = ${employeeId}`;
    };

    //Usage
    await runQuery(renameEmployeeQuery('Boo', 'Foo', 666));

    process.exit();
  });
})();
