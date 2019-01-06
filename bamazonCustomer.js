var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "bamazon_DB"
})

connection.query('SELECT * FROM Products', function(err, res){
    if(err) throw err;
  
    for(var i = 0; i<res.length;i++){
        console.log("Items:")
        console.log("ID: " + res[i].item_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "QTY: " + res[i].stock_quantity);
        console.log('----------------------------------------------------------------------------------')
    }
    console.log(' ');
    inquirer.prompt([
      {
        type: "input",
        name: "id",
        message: "ID of desired purchase here:",
        validate: function(value){
          if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){
            return true;
          } else{
            return false;
          }
        }
      },
      {
        type: "input",
        name: "qty",
        message: "Quantity? Here:",
        validate: function(value){
          if(isNaN(value)){
            return false;
          } else{
            return true;
          }
        }
      }
      ]).then(function(ans){
        var whatToBuy = (ans.id)-1;
        var howMuch = parseInt(ans.qty);
  
        var total = parseFloat(((res[whatToBuy].price)*howMuch).toFixed(2));
  
        if(res[whatToBuy].stock_quantity< howMuch){
          console.log("Insufficient Quantity");
        }
        else{
          connection.query("UPDATE Products SET ? WHERE ?", [
            {stock_quantity: (res[whatToBuy].stock_quantity - howMuch)},
            {item_id: ans.id}
            ], function(err, result){
                if(err) throw err;
                console.log("Ordered! " + total.toFixed(2));
            });
        }  
      })
  })