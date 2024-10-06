window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthDayOutput').innerText = initPerson.birthDay;
    document.getElementById('birthMonthOutput').innerText = initPerson.birthMonth;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear + ' года рождения';
};

	document.getElementById('generate').addEventListener('click', 
		(event) => {
		const initPerson = personGenerator.getPerson();
    	document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    	document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    	document.getElementById('surnameOutput').innerText = initPerson.surname;
    	document.getElementById('professionOutput').innerText = initPerson.profession;
    	document.getElementById('genderOutput').innerText = initPerson.gender;
    	document.getElementById('birthDayOutput').innerText = initPerson.birthDay;
    	document.getElementById('birthMonthOutput').innerText = initPerson.birthMonth;
    	document.getElementById('birthYearOutput').innerText = initPerson.birthYear + ' года рождения';
		}

	);

	document.getElementById('default').addEventListener('click', 
		(event) => {
		document.getElementById('firstNameOutput').innerText = 'Иван';
		document.getElementById('middleNameOutput').innerText = 'Иванович';
		document.getElementById('surnameOutput').innerText = 'Генерация фамилии';
    	document.getElementById('genderOutput').innerText = 'Генерация пола';
    	document.getElementById('professionOutput').innerText = 'Генерация профессии';
    	document.getElementById('birthDayOutput').innerText = '1';
    	document.getElementById('birthMonthOutput').innerText = ' января ';
    	document.getElementById('birthYearOutput').innerText = 'Генерация года рождения';
		}
	);