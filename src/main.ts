import { sayHi } from "./hello"

function hello(compiler: string){
    console.log(`Hello from ${compiler}`)
}

function showHello(divName: string, name: string) {
    const element = document.getElementById(divName)
    element.innerHTML = sayHi(name);
}


hello("TypeScript");
console.log(sayHi("TypeScript"));
showHello("greeting", "TypeScript");