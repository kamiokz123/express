// let fs= require("fs")

// // // fs.writeFileSync("km.js","hkk");
// // // fs.appendFileSync("km.js","\n updated ")
// // // let file=fs.readFileSync("km.js");
// // // // console.log(file);
// // // let fineFile = file.toString();
// // // console.log(fineFile);
// // // fs.renameSync("km.js", "kmi.js"
// //  let v=fs.readFileSync("k.json")
// //  let a= JSON.parse(v)
// //  console.log(a);





//  var user=[{
//     name:"kami",
//     id:123
// },{
//     name:"hadi",
//     id:122
// },{
//     name:"hi"
// }]

// fs.writeFileSync("kmi.js", JSON.stringify(user))
// // let express=require("express");
// // let ap = express()
// // let port=2000



// // ap.get("/home/h1",(r,s)=>{
// //     s.send("hi its home")

// // })
// // ap.get("/users/:name",(r,s)=>{
// //     user.find(e=>{
        
// //        return e.name == r.params
       
// //     })
// //     s.send(user)
    
// // })
// // ap.get("/my-query",(r,s)=>{
// //     s.send(r.query)
// // })



// // let bod = require("body-parser")

// // ap.use(bod.urlencoded({
// //     extended: true
// // }))

// // ap.use(bod.json())

// // ap.post("/h",(r,s)=>{
// //     s.send(r.body)

// // })

// // ap.listen(port,()=>{
// //     console.log("server is running");
// // })
// // let express = require("express");
// // let app = express()
// // let port = 2000
// // let fs= require("fs")
// // let bodyparser= require("body-parser")
// //  app.use(bodyparser.json)

// app.get("/read",(r,s) =>{
//     const read = JSON.parse(fs.readFileSync("./K.json" , "utf-8" ))        // here utf-8 decrypted data into readable form and "." in path is represent that file is in one back path
//     s.json(read)                                                      // here json.parse will correct the syntax of json
// })

// app.get("/getuser/:Pname",(r,s)=>{
//     a=JSON.parse(fs.readFileSync("k.json", "utf-8"))
//     v= a.find(e=>{
//         return e.name == r.params.Pname
//     })
//     if (typeof v!== "undefined") {
        
//     s.send(v)}else{
//         s.send("user not found")
//     }
// })

// // app.get("/home/:Pname",(r,s)=>{
// //     s.send(r.params.Pname)
    
    

// // })

// app.get("/home/portfolio",(r,s)=>{
//     s.send("its portfolio inside in home")
// })











// // app.listen(port,()=>{
// //     console.log(" server is running");
// // })
// USERS=[
//     {
//         name:"kami",
//         id:12
//     },{
//         name:"kamr",
//         id:13

//     },{

//         name:"kam",
//         id:14
//     }
// ]
// USERS.forEach((e,i) => {
//     console.log(e,i);
    
// });
var save2=[]
app.get("/update-data/:uname",(r,s)=>{
    jsondata.forEach((data,index) => {
        if (data.name==r.params.uname) {
           save2  = [data,index]
            return true
            
        }
        
    });


   if (save.length>0) {
       if (typeof r.query.un !== "undefined") {
           jsondata[save2[1]].name= r.query.un
           if (typeof r.query.up!== "undefined") {
               jsondata[save2[1]].pass= r.query.up
               
           }
           
           
       }
       fs.writeFileSync("k.json",JSON.stringify(jsondata))
   }
   s.send(save2.length>0 ?{message:" data is updating", data:save[0]}:"user not found")