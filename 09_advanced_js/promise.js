const promise1 = new Promise((resolve,reject) => 
{
    // does any async task
    // DB call, network, cryptography
    setTimeout(function() 
    {
        console.log('Async task 1')
        resolve();
    },3000);
});

promise1.then(function() {console.log('Promise consumed!\n')});

new Promise(function(resolve,reject) 
{
    setTimeout(function() 
    {
        console.log('Async task 2');
        resolve();
    },2000);
}).then(function() { console.log('Promise 2 resolved')});

const promise3 = new Promise(function(resolve,reject) 
{
    setTimeout(function()
    {
        resolve({username: 'Affan', email: 'affan@velourcodes.com'});
    }, 1500);
});
promise3.then(function(userObj) 
{
    console.log(userObj);
});

const promise4 = new Promise((resolve,reject) => {
    setTimeout(() => 
    {
        let error = true;
        if(error)
        {
            reject('Error occured, promise rejected!');
        }
        else
        {
            resolve({username: 'Khadija', password: '3*B8$gQ(9!i@4^,m'});
        }
    },1000);
});
promise4.then((userObj) =>
{
    console.log(userObj);
    return userObj.username;
})
.then((username) => (console.log(username)))
.catch((errMsg) => (console.log(errMsg)))
.finally(() => (console.log('The promise is settled')));

const promise5 = new Promise((resolve,reject) => {
    setTimeout(() => 
    {
        let error = false;
        if(error)
        {
            reject('JS error, promise rejected!');
        }
        else
        {
            resolve({username: 'JavaScript', password: 'js@backend'});
        }
    },1000);
});

async function consumeProm5()
{
    try
    {
        const res = await promise5;
        console.log(res);
    }
    catch(err)
    {
        console.log(err);
    }
}
consumeProm5();

async function getUsers1()
{
    try
    {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        console.log(data);
    }
    catch(err)
    {
        console.log(error);
    }
}
getUsers1();

fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => { return res.json() })
.then((data) => (console.log(data)))
.catch((err) => (console.log(err)))
.finally( ()=>(console.log("Request Settled!")));