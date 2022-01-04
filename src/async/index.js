const doSometingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do something async'), 4000)
            : reject(new Error('Test Error'))
    })
}

const doSomething = async () => {
    const something = await doSometingAsync();
    console.log(something)
    console.log(something);
}

console.log('Before');
doSomething()
console.log('After');

const anotherFunction = async () => {
    try {
        const something = await doSometingAsync();
    } catch (error) {
        console.error(error)
    }
}

console.log('Before1');
anotherFunction()
console.log('After1');