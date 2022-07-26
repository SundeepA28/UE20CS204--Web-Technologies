var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/WebTech";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("WebTech");

  dbo.createCollection("Employee_Data", function (err) {
    if (err) throw err;
    console.log("Collection created sucessfully");
  });

  var empobj=[
    {emp_id:'01', emp_name:'mahesh', emp_dob:'10-10-2002', emp_type:'Accountant', emp_dept:'Accounts'},
    {emp_id:'02', emp_name:'syed', emp_dob:'5-9-2005', emp_type:'Director', emp_dept:'civil'},
    {emp_id:'03', emp_name:'varun', emp_dob:'6-8-2003', emp_type:'Director', emp_dept:'mech'},
    {emp_id:'04', emp_name:'srinu', emp_dob:'7-9-2003', emp_type:'Accountant', emp_dept:'Accounts'},
    {emp_id:'05', emp_name:'vrush', emp_dob:'10-9-2006', emp_type:'professor', emp_dept:'civil'},
    {emp_id:'06', emp_name:'sundeep', emp_dob:'30-06-2005', emp_type:'Junior Engineer', emp_dept:'computer'},
    {emp_id:'07', emp_name:'suraj', emp_dob:'11-04-2004', emp_type:'Advisor', emp_dept:'Marketing'},
    {emp_id:'08', emp_name:'sriram', emp_dob:'24-12-2003', emp_type:'Junior Engineer', emp_dept:'computer'},
    {emp_id:'09', emp_name:'sunag', emp_dob:'11-10-2002', emp_type:'Staff Incharge', emp_dept:'Accounts'},
    {emp_id:'10', emp_name:'suchit', emp_dob:'25-7-2001', emp_type:'Senior Engineer', emp_dept:'computer'},
   
  ]

  dbo.collection("Employee_Data").insertMany(empobj,function(err,res){
    if(err) throw err;
    console.log("Successfully added ",res.insertedCount," employees data to Employees Collection");
    db.close();
  });
});

