//your JS code here. If required.
const mybtn = document.querySelector("#btn");

mybtn.addEventListener("click",(e)=>{
	e.preventDefault();
	const name = document.getElementById("name").value;
	const age = document.getElementById("age").value;

	if(name !=="" && age !==""){
		const promise1 = ()=>{
			return new Promise((resolve,reject)=>{
				
				setTimeout(()=>{
					if(Number(age)>=18){
					resolve(`Welcome,${name}. You can vote.`);
				   }
				  else{
					reject(`Oh sorry ${name}. You aren't old enough.`)
				  }	
				},4000)
				
			});
		}
		promise1()
		.then((message)=>{
			alert(message);
		})
		.catch((message)=>{
			alert(message);
		});
	}
	else{
		alert("Please enter valid details.");
	}
});