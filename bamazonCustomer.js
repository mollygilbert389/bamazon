var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon_DB"
})

connection.connect(function(err){
  if (err) throw err;
  console.log("Connection Sucessful!")
  makeTable();
})
 
var makeTable = function() {
connection.query('SELECT * FROM Products', function(err, res){
    if(err) throw err;
    for(var i = 0; i<res.length;i++){
        console.log("Items:") 
        console.log("ID: " + res[i].item_id + " || " + "Product: " + res[i].product_name + " || " + "Department: " + res[i].department_name + " || " + "Price: " + res[i].price + " || " + "QTY: " + res[i].stock_quantity);
        console.log('----------------------------------------------------------------------------------')
    }
    promptCustomer(res);

  })
}

var promptCustomer = function(res) {
    inquirer.prompt([{
        type: "input", 
        name: "choice",
        message: "Type desired item here: ",
      }]).then(function(answer){
        var correct = false;
        if(answer.choice.toUpperCase()=="Q") {
          process.exit()
        }
        for(var i = 0; i<res.length;i++) {
          if (res[i].product_name==answer.choice){
            correct = true;
            var product= answer.choice
            var id=i
            inquirer.prompt({
              type: "input",
              name: "quant",
              message: "How many would you like to buy?",
              validate: function(value){
                if(isNaN(value)==false) {
                  return true;
                } else {
                  return false;
                }
              }
            }).then(function(answer){
              if((res[id].stock_quantity-answer.quant)>0){
                connection.query("UPDATE products SET stock_quantity='" + (res[id].stock_quantity-answer.quant)+"' WHERE product_name='"+product+"'", function(err, res2){
                  console.log("Purchased!")
                  makeTable()
                })
              } else {
                console.log("Not Valid Selection!")
                promptCustomer(res)
              }
            })
          }
        }
        if (i==res.length && correct==false){
          console.log("Not a valid selection!")
          promptCustomer(res);
        }
      })
    }
      
//////////         the ' above at the end of the UPDATE line 55 is VERY important