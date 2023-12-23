var a = prompt("Enter Your marks in urdu Out Of 75");
a = Number(a)
var b = prompt("Enter Your marks in English Out Of 75");
b = Number(b)
var c = prompt("Enter Your marks in Math Out Of 100");
c = Number(c)
var d = prompt("Enter Your marks in Science Out Of 100");
d = Number(d)
var e = prompt("Enter Your marks in p.s.t  Out Of 75")
e = Number(e)
   
var g = prompt("Enter Your marks in statics  Out Of 75")
g = Number(g)
   
var f = 500
var total = a+b+c+d+e+g
var percentage = (total/f)*100 
alert("Obtained Marks = "+total+" Out Of "+f+"\n"+ "Percentage =" +percentage+"%")
