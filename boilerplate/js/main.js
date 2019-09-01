let lists=[
           { "country":"India",
             "capital":"New Delhi"
           },
           { country:"Afghanistan",
             capital:"Kabul"
           },
           { country:"Australia",
             capital:"Canberra"
           },
           { country:"Pakistan",
             capital:"Islamabad"
           },
           { country:"United Arab Emirates",
             capital:"Abu Dhabi"
           },
           { country:"United Kingdom",
             capital:"London"
           },
           { country:"Nepal",
             capital:" Kathmandu"
           },
           { country:"Japan",
             capital:"Tokyo"
           },
           { country:"Germany",
             capital:"Berlin"
           },
           { country:"Egypt",
             capital:"Cairo"
           },
           { country:"China",
             capital:"Beijing"
           },
           { country:"Greece",
             capital:"Athens"
           }
           ]

const btn=document.getElementById("btn");
const country=document.getElementById("country");
const capital=document.getElementById("capital");

btn.addEventListener("click",getCapital);

function getCapital() {
	let num=Math.floor(Math.random()*lists.length);
	country.innerHTML="Country - " + lists[num].country;
	capital.innerHTML="Capital - " + lists[num].capital;
}