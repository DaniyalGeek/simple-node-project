var express		=require('express');


 							app			=express();
 							var path 		=require('path');
 							var bodyParser	=require('body-parser');
 							//App Configurations
 							
 							app.get('/',function(req,res){
 								res.send("hello");
 							})
 						//	module.exports = app;
 						app.listen(3000);

