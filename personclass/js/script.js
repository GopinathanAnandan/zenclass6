class Person {
    constructor(name, birthYear, gender, address, email, occupation) {
        this.name = name;
        this.birthYear = birthYear;
        this.gender = gender;
        this.address = address;
        this._email = email;
        this.occupation = occupation;
    }
    getAge(){
        return new Date().getFullYear() - this.birthYear;
    }

    get email() {
        return this._email;
    }

    set email(newEmail) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (pattern.test(newEmail)) {
            this._email = newEmail;
        }else{
            console.log("Invalid emailId")
        }
        
    }
 
    personDetails() {
        console.log("Name: ", this.name);
        console.log("birthYear: ", this.birthYear);
        console.log("Gender: ", this.gender);
        console.log("Address: ", this.address);
        console.log("email: ", this._email);
        console.log("Occupation: ", this.occupation);
    }
}

const person = new Person("Gopinath", 1996 , "male", "8/22B Pudupet road", "gopinathan.anandan@gmail.com", "Associate");
person.personDetails();
