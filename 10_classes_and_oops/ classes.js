// class user
// {
//     constructor(username, password,email)
//     {
//         this.username = username;
//         this.password = password;
//         this.email = email;
//     }
//     encryptPassword()
//     {
//         return `${this.password}#abc`
//     }
// }

function user(username, password, email)
{
    this.username = username;
    this.password = password;
    this.email = email;
}

user.prototype.encryptPassword = function()
{
    return `${this.password}#abc`;
}
const user1 = new user('Affan','a4,&nQE1','example@example.com');
console.log('\nBy func constructor method hashed password is: ',user1.encryptPassword(),'\n');
