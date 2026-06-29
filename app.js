const request=require("request")
const forecast=require("./data/forecast")
const country=process.argv[2]
    forecast(country,(error , data) => {
       if(error) console.log("ERROR: ",error)
       else  console.log("DATA: ",data)
})
