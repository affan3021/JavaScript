// class user
// {
//     constructor(username, password, email)
//     {
//         this.username = username;
//         this.password = password;
//         this.email = email;
//     }
//     get password()
//     {
//         return `${this._password}@9knw` 
//         .toUpperCase();
//         //changed variable name to avoid overflow error
//     }
//     set password(new_password)
//     {
//         this._password = new_password;
//         //changed variable name to avoid overflow error
//     }
// }
// const userTwo = new user('Affan','nodejs','affan@jh.in');
// userTwo.password = 'qwerty';
// console.log(userTwo.password);

// NOTE: IF A GETTER IS DEFINED FOR ANY ATTRIBUTE THEN ITS CORRESPONDING SETTER MUST ALSO EXIST IN JS

// NOTE: WHEN WE CALL A SETTER & GETTER, IF WE DO NOT ASSIGN THE NEW VALUE A NEW VARIABLE INSIDE THE SETTER, IT WILL CAUSE CALL STACK OVERFLOW

// Older Approach - Using Object Notation

function user(username, email, password)
{
    this.username = username;
    this.email = email;
    this.password = password;

    Object.defineProperty(this, 'password', 
    {
        get: function()
        {
            return `${this._password}@mkbhd092`.toLowerCase();
        },
        set: function(new_password)
        {
            this._password = new_password;
        }
    });
}
const userTwo = new user('Affan','nodejs','affan@jh.in');
userTwo.password = 'qwerty';
console.log(userTwo.password);