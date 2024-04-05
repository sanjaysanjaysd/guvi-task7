//Get all the countries from Asia continent /region using Filter function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(this.response);
     result.filter((countries) => {
           return countries.region ==="Asia";
     })
     console.log(result);
}
//Get all the countries with a population of less than 2 lakhs using Filter function
var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v2/all");
request1.send();
request1.onload=function(){
  var result1=JSON.parse(this.response);
  const population=result1.filter((Element)=>{
    return Element.population<200000
  })
  console.log(population)
}
//Print the following details name, capital, flag, using forEach function
var request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v2/all");
request2.send();
request2.onload=function(){
var details=JSON.parse(this.response)
details.forEach(element => {
  console.log(element.name)
  console.log(element.flag)
  console.log(element.capital)
});
}
//d.Print the total population of countries using reduce function
var request3 = new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v2/all");
request3.send();
request3.onload=function(){
var total=JSON.parse(this.response)
var resul=JSON.parse(this.response);
var total = resul.reduce((acc,curr) =>{
    return acc+curr.population;
} ,0);

console.log(total);

}
//Print the country which uses US Dollars as currency
var request4= new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v2/all");
request4.send();
request4.onload=function(){
  var res=JSON.parse(this.response);
  var currency = res.filter((element) => {
    for(let key in element.currencies){
       if(element.currencies[key].code === "USD"){
           return element;
       }
    }
  })
       console.log(currency);
   }