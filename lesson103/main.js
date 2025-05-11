const user = {
    name: 'Nikita',
    age: 20,
    city: 'Kaluga',
    sayHello(name) {
        console.log(`Hello ${name}`)
    }
}

console.log(user.sayHello('Jerry'))

const users = [
    {   name: 'Alex',
        age: 20,
        city: 'Moscow',
        sex: 'Male',
        isAdmin: false
    },
    {   name: 'John',
        age: 26,
        city: 'Kazan',
        sex: 'Male',
        isAdmin: false
    },
    {   name: 'Anna',
        age: 18,
        city: 'Saint Petersburg',
        sex: 'Female',
        isAdmin: true
    }
]

let adminCount = 0

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin == false) {
        adminCount++
    }
}

console.log(adminCount)