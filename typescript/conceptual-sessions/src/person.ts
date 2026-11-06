class Person{
    constructor(public firstname: string, public lastname: string){}   

    get fullName(){
        return  this.firstname + " " + this.lastname;
    }

    talk(){
        console.log('Talking');        
    }

    walk(){
        console.log('Walking');        
    }

}

class Student extends Person{
    attendClass() {
        console.log('attend on class');
        this.talk();
        this.walk();
    }
}

class Teacher extends Person{
    //override here function
    override get fullName(){
        //super by call property also
        return "Professor " + super.fullName;
    }

    checking(){
        console.log('Checking assignment and exam papters');        
    }

}

class Principal extends Person{
    override get fullName(){
        return "Principal " + super.fullName;
    }
}

const student = new Student("Tanvir", "Fahim");
const teacher = new Teacher("Motiur", "Rahman");
const principal = new Principal("Mahfuz", "Alom");

// console.log(student.fullName);
// console.log(teacher.fullName);
// student.attendClass();
// teacher.checking();
// console.log(principal.fullName);

const printNames = (people: Person[]) => {
    for(let person of people) console.log(person.fullName);
}

printNames([
    student, teacher, principal
])


