const velour = 
{
    name: 'Affan',
    location: 'New Delhi',
    goal: 'backend',
    dev_name: 'velourcodes',
    isRecruitable: true,
    printRepo: function() 
    {
        console.log('https//:www.githib.com/velourcodes');   
    }
};
console.log(Object.getOwnPropertyDescriptor(velour, "isRecruitable"));
Object.defineProperty(velour, 'isRecruitable', 
{
    writable: false,
    enumerable: false
})
velour.isRecruitable = false;
console.log(Object.getOwnPropertyDescriptor(velour, "isRecruitable"));

for(let key in velour)
{
    if(typeof velour[key] !== 'function') 
    // ignores the function inside the obj at the end
    {
        console.log(`${key}, ${velour[key]}`);
    }
    // console.log(`${key}, ${velour[key]}`);
}

// NOTE: here we set enumerable = false for isRecruitable, hence it is not shown while the object iteration (USE OF MANAGING ENUMERABLE)