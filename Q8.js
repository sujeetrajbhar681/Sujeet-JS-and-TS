class SupportExecutive {
    name;
    empId;
    dept;
    experience;

    constructor( name,
    empId,
    dept,
    experience){
        this.name=name;
        this.empId=empId;
        this.dept=dept;
        this.experience=experience;
    }

    display(){
        console.log(this.name+this.empId+this.dept+this.experience);
        
    }
}

const se=new SupportExecutive("john",1,"cs","10 year");
se.display();