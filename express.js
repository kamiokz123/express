


let express= require("express");
let app= express();
let port= 2000;
let fs=require("fs");
let body = require("body-parser");
let morgan=require("morgan");


app.use(morgan("combined"));
app.use(body.urlencoded({ extended:true
}))
app.use(body.json())
var jsondata= JSON.parse(fs.readFileSync("k.json","utf-8"));



// route for show json data

app.get("/home",(r,s)=>{
    s.send(jsondata)

})

// route for to access data by name


app.get("/home/:Aname",(r,s)=>{
    access=jsondata.find(e=>{
        return e.name== r.params.Aname 
    })
    
    if ( access!==undefined) {
        
    
    s.send(access)}
    else{
        s.send("user not found")
    }
})


// route for updating data in json file



var save=[];
app.get("/update-data/:uname",(r,s)=>{
    jsondata.forEach((data,index) => {
        if (r.params.uname==data.name) {
            
        
        save=[data,index]}
        
        return true

        
    });
    if (save.length>0) {if (typeof r.query.un !== "undefined") {if (typeof r.query.up !=="undefined") {
        jsondata[save[1]].pass= r.query.up;
        
    }else{
        s.send("please enter password")
    }
        jsondata[save[1]].name = r.query.un;}else{
            s.send("please enter name")
        }
        
        
        fs.writeFileSync("k.json",JSON.stringify(jsondata))
    }
    let data=save[0]
    // s.send(save.length>0 ?{message:" data is updating", data:save[0]}:"user not found")
    if (save.length>0) {
        s.send("data is updated")
       
        
    }else{
        s.send("user not found")
    }


});




newdata=[];
app.get("/add-data",(r,s)=>{

 v={
     name:r.query.addname,
     pass:r.query.addpass
 }
 b=jsondata.find(e=>{
    return e.name==r.query.addname
})
if (typeof b=="undefined") {
    if (typeof r.query.addname=="undefined" ) {
       
        s.send("please enter username")
        
    }
    else  if (typeof r.query.addpass=="undefined") {
        s.send("please enter password")
        
    }
    s.send("new user is added")
    console.log(r.query.addpass);
    jsondata.push(v)
    fs.writeFileSync("k.json",JSON.stringify(jsondata))
    
}else{
    s.send("user alrady exist please use another username")
}

    

})

// deleting data

app.get("/delete-data/:name",(r,s)=>{
    save3=[]
    index1= jsondata.findIndex(i =>
        r.params.name==i.name
        )

        console.log(index1);
       jsondata.forEach(e => {
        
         
          if (e.name == r.params.name) {
              save3=[e]

            
        }
        return true
            
        });
        if (typeof save3[0]==="undefined") {
            s.send("no such name is present to delete")
            
        }
        
        if(typeof save3[0]!=="undefined"){
              jsondata.splice(index1,1)
        fs.writeFileSync("k.json",JSON.stringify(jsondata))
        s.send(' this user data is deleted ')

         }
  
    
})

// filter data by name

app.get("/filter-data/:name",(r,s)=>{
    filterdata=jsondata.filter(m=>{
        return m.name==r.params.name
    })
    if(filterdata.length<=0){
        s.send("user not found")
    } 
    else if (filterdata.length>=0){
       
        s.send(filterdata)
    }
    // s.send(filterdata)
    console.log(filterdata.length);

});

// post method

app.post("/delete-data",(r,s)=>{
    index=jsondata.findIndex(x=> x.name==r.body.name)
   console.log(index);
   if (index==-1) {
       s.json(r.body.name+": is not exist")
       
   }
   else if(index!==-1){
       jsondata.splice(index,1);
       fs.writeFileSync("k.json",JSON.stringify(jsondata))
       s.json(r.body.name+" user deleted")
   }
})










app.listen(port,()=>{
    console.log("server is running at port: "+port);

})