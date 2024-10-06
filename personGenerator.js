const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Александра",
            "id_2": "Мария",
            "id_3": "Ирина",
            "id_4": "Анастасия",
            "id_5": "Диана",
            "id_6": "Нина",
            "id_7": "Марина",
            "id_8": "Елена",
            "id_9": "Ольга",
            "id_10": "Полина"
        }
    }`,

    birthMonthJson: `{
        "count": 12,
        "list": {
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    qualMaleJson: `{
        "count": 5,
        "list": {
            "id_1": "водитель",
            "id_2": "слесарь",
            "id_3": "военнослужащий",
            "id_4": "токарь",
            "id_5": "системный администратор"
        }
    }`,

    qualFemaleJson: `{
        "count": 5,
        "list": {
            "id_1": "продавщица",
            "id_2": "швея",
            "id_3": "машинистка",
            "id_4": "кассирша",
            "id_5": "военнослужащая"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
    
    randomBirthYear: (max = 2000, min = 1980) => Math.floor((Math.random() * 21) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },
       
    randomBirthMonth: function() {
        return this.randomValue(this.birthMonthJson);
    },

    randomBirthDay: function (){
        let birthDay = Math.floor(Math.random() * 28 + 1);
        if (this.person.birthMonth == "февраля") {
            return birthDay;
        } else if (this.person.birthMonth == "апреля" || this.personBirthMonth == "июня" || this.personBirthMonth == "сентября" || this.personBirthMonth == "ноября") {
            birthDay = Math.floor(Math.random() * 30 + 1);
        } else if (this.person.birthMonth == "января" || this.personBirthMonth == "марта" || this.personBirthMonth == "мая" || this.personBirthMonth == "июля" || this.personBirthMonth == "августа" || this.personBirthMonth == "октября" || this.personBirthMonth == "декабря") {
            birthDay = Math.floor(Math.random() * 31 + 1);
        }
        return birthDay;       
    },

    randomGender: function(){
        return this.randomIntNumber() >= 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
        
    },

    randomFirstName: function() {
        if (this.person.gender == "Мужчина") {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomMiddleName: function() {
        let middleName = this.randomValue(this.firstNameMaleJson);
        if (this.person.gender == "Мужчина") {
            if (middleName == "Никита") {
                middleName = "Никитич";
            } else if (middleName == "Михаил") {
                middleName = "Михайлович";
            } else if (middleName == "Александр" || middleName == "Максим" || middleName == "Иван" || middleName == "Артем" || middleName == "Даниил" || middleName == "Егор") {
                middleName = middleName + "ович";    
            } else if (middleName == "Дмитрий" || middleName == "Андрей") {
                middleName = (middleName.slice(0, -1)) + "евич";
            }
            return middleName; 

        } else if (this.person.gender == "Женщина") { 
            if (middleName == "Никита") {
                middleName = "Никитична";
            } else if (middleName == "Михаил") {
                middleName = "Михайловна";
            } else if (middleName == "Александр" || middleName == "Максим" || middleName == "Иван" || middleName == "Артем" || middleName == "Даниил" || middleName == "Егор") {
                middleName = middleName + "овна";    
            } else if (middleName == "Дмитрий" || middleName == "Андрей") {
                middleName = (middleName.slice(0, -1)) + "евна";
            }
            return middleName;
        } 
    },

    randomSurname: function() {
        if (this.person.gender == "Мужчина") {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + 'а';
        }

    },

    randomProfession: function() {
        if (this.person.gender == "Мужчина") {
            return this.randomValue(this.qualMaleJson);
        } else {
            return this.randomValue(this.qualFemaleJson);
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.middleName = this.randomMiddleName();
        this.person.surname = this.randomSurname();
        this.person.profession = this.randomProfession();
        this.person.birthDay = this.randomBirthDay();
        this.person.birthMonth = this.randomBirthMonth();
        this.person.birthYear = this.randomBirthYear();
        return this.person;
    }
};