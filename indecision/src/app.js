console.log('App.js is running');

// JSX - Javascript XML
const app = {title:'Indecision App',subtitle:'Put your hands in the hands of a computer',options: ['One','Two']};


const template = (
<div>
    <h1>{app.title}</h1>
    {/* {getSubTitle(app.subtitle)} */}
    {(app.subtitle && <p>{app.subtitle}</p>)}
    <p>{(app.options.length > 0)? 'Here are your options :' :'No options:'}</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>
);

let count = 0;
const addOne = () =>{
 console.log('addOne');
};
const templateTwo = (
 <div>
     <h1>Count: {count}</h1>
     <button onClick={addOne}>+1</button>
 </div>
);
console.log(templateTwo);
const appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);

//Challenge
//Make a button text -1
//Setup minuone fundtion- log "minusone"
//reset button - setup reset function - log reset

const minusOne =() =>{
    console.log('minusOne');
}
const reset = () => {
    console.log('reset');
}
const templateThree = (
<div>
    <button onClick = {minusOne}>-1</button>
    <button onClick = {reset}>Reset</button>
</div>
);

//ReactDOM.render(templateThree,appRoot);