const mysql =require("mysql");
const Promise =require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);


const dbinfo ={
    host:"localhost",
    user:"root",
    password:"password",
    database:"WPT"

};
const selectAllUser= async()=>{
    const connection= mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql=`select * from message `;
   const list=await connection.queryAsync(sql);
   await connection.endAsync();
   return list;

};

const addUser= async(message)=>{
    const connection= mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql=`insert into message (msg) values (?)`;
    connection.queryAsync(sql,[Message.msg]);
    console.log("added");
    await connection.endAsync();

};

module.exports={selectAllUser,addUser};

