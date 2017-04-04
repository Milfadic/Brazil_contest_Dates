//Code to scrap date from  http://www.cgu.gov.br/assuntos/auditoria-e-fiscalizacao/programa-de-fiscalizacao-em-entes-federativos/edicoes-anteriores/municipios/
//Place code in the console of a browser that uses JavaScript


//Get a list of Elements 
b=document.getElementsByClassName("summary-view-icon")

//Look at the class list for each element 
for (i = 1; i < b.length; i++) {  
 w=   b[i].innerHTML;
console.log(w)
}


//See what I can trim
b[0].innerHTML.trim().replace("<i class=\"icon-day\"><\/i>", "").trim()



//Log the date
for (i = 1; i < b.length; i++) { 
 w=   b[i].innerHTML.trim().replace("<i class=\"icon-day\"><\/i>", "").trim();
console.log(w)
}

//Better to make it into an array and print it as text fileCreatedDate
//Log the date
var dates=[]
j=40

for (i = 0; i < b.length; i++) { 
 w=   b[i].innerHTML.trim().replace("<i class=\"icon-day\"><\/i>", "").trim();
  //console.log(w[2])
	if (w[2]=="/"){
	console.log(w,",",j)
	q=[w,j]
	j=j-1
	dates.push(q)
 }
}
dates


//Get all together and export it to CSV

 var csv = dates.map(function(d){
        return d.join();
    }).join('\n');
	
csv