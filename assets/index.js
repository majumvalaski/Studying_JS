console.log('it works');
const name = 'blue';
const middle = "topher";
const last = `silva`;

const sentence = "shes's so \"cool\"";
const sentence2 = `she\`s's so "cool"`;

const html = `
  <div>
    <h2></h2>
  </div>
`;

const hello = "hello my name is. Nice to meet you";
let name1 = "claudio";
const hello1 = "hello my name is " + name1 + ". Nice to meet you.";


const name2 = 'Wes';
const hello2 = `Hello my name is ${name2}. Nice to meet you. I am ${40 +38} years old`;
const html1 = `
  <div>
    <h2>${name2}</h2>
    <p>${hello2}</p>
  </div>  
`;

document.body.innerHTML = html1;

const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties /kids);
console.log(`Each Kid Gets ${eachKidGets}`);
const dadGets = smarties % kids;
