var mysql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'nayak'});
con.connect((err)=>{
   if(err)
      console.log("error");
   else
      var val=[['j'],['k'],['l']];
      con.query('insert into nfamily values ?',[val],(err,res)=>{
          if(err)
             console.log("error");
           else
              console.log("created");       
}); 
});