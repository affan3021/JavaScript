class user
{
    constructor(username)
    {
        this.username = username;
    }
    log_user()
    {
        console.log(`\nUsername is: ${this.username}`);
    }
    static assignID() //No one can use this method due to - static keyword
    {
        return `101`;
    }
}

const user1 = new user('Affan');
console.log(user1.assignID());
