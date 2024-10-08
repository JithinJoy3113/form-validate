document.getElementById('regForm').addEventListener('submit',function(event){
	event.preventDefault();

	let valid=true;

	const nameValue=document.getElementById('name').value;
	const phoneValue=document.getElementById('phone').value;
	const ageValue=document.getElementById('age').value;
	const dobValue=document.getElementById('dob').value;	
        const genderMaleValue=document.getElementById('genderMale').checked;
        const genderFemaleValue=document.getElementById('genderFemale').checked;
 	const termsValue=document.getElementById('terms').checked; 
        const emailValue=document.getElementById('mail').value;	
	const passwordValue=document.getElementById('pass').value;
        console.log(passwordValue)
        if (nameValue === '' || !/^[a-zA-z]+$/.test(nameValue)){
		document.getElementById('nameError').textContent='please enter valid name.';
		valid=false;
	}else{
		document.getElementById('nameError').textContent='';
	}
        if (phoneValue === '' || !/^\d{10}$/.test(phoneValue)){
		document.getElementById('phoneError').textContent='please enter valid number';
		valid=false;
	}else{
		document.getElementById('phoneError').textContent='';
	}
        if (ageValue === '' || !/^[age<1age>100]+$/.test(ageValue)){
		document.getElementById('ageError').textContent='please enter valid age';
		valid=false;
	}else{
		document.getElementById('ageError').textContent='';
	}
        if (!genderMaleValue && !genderFemaleValue){
		document.getElementById('genderError').textContent='please select your gender';
		valid=false;
	}else{
		document.getElementById('genderError').textContent='';
	}
        if (dobValue===''){
		document.getElementById('dobError').textContent='please select Date of Birth';
		valid=false;
	}else{
		document.getElementById('dobError').textContent='';
	}
        if (!termsValue){
		document.getElementById('termsError').textContent='please agree the terms';
		valid=false;
	}else{
		document.getElementById('termsError').textContent='';
	}
	if (emailValue=='' ||  !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)){  
		document.getElementById('mailError').textContent='please enter valid email';
		valid=false;
	}else{
               
		document.getElementById('mailError').textContent='';
	}
        if (passwordValue==="" || !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(passwordValue)){
		document.getElementById('passError').textContent='please enter a strong password';
		valid=false;
	}else{
		document.getElementById('passError').textContent='';
	}

	if (valid){
		alert('form submitted')
	}

});
