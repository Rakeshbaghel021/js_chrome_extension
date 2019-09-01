var quotes=[{
	         quote:"yayayya",
	         author:"jkghjhfg"
           },
           {
           	quote:"rrrrrrrr",
           	author:"jk"
           },
           {
           	quote:"dhjh",
           	author:"kjkhj"
           }
           ]
function changequotes() {
	var num=Math.floor(Math.random()*quote.length);
	var h1=document.getElementById("heading");
	var h5=document.getElementById("para");

	h1.innerText=quotes[num].quote;
	h5.innerText=quotes[num].author;
}
document.getElementById("click").addEventListener("click",changequotes);
