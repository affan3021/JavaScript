class user
{
    constructor(username)
    {
        this.username = username;
    }
    logMe()
    {
        console.log(`Username is: ${this.username}`);
    }
}

class student extends user
{
    constructor(username, password, email)
    {
        super(username);
        this.password = password;
        this.email = email;
    }
    changeEmail(new_email)
    {
        this.email = new_email;
    }
}

const s1 = new student('Ashaaz', '1%22','ashaaz@jh.com');
s1.logMe();
console.log('Old email is: ',s1.email);
s1.changeEmail('ashaaz.mehmood@gmail.com');
console.log('Changed email is: ', s1.email);

/* NOTE: If a subclass is derived out of a superclass, the superclass' methods would be available to subclass but not the vice-versa

Same goes for prototypes (knowing that in js every sub prototype is linked to object in the end) */