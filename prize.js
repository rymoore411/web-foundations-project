const data = {
  customers: {
    Moe: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    },
    Larry: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    },
    Curly: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    }
  },
  prizes: {
    Foo: 1,
    Bar: 3,
    Bazz: 5
  }
};
//Add event listeners

const prizeInventory = document.querySelector('#prizes');
const customer = document.querySelector('#customers');

const handler = (ev) => {
  const action = ev.target.getAttribute('data-action');
  let prizeCountInc = ev.target.previousElementSibling;
  // let prizeCountDec = ev.target.nextElementSibling;
  if(action === 'inc'){

  }

  console.log(prizeCountInc.innerHTML);

  render();

}

customer.addEventListener('click', handler);


//Loop through object to get our values for our template
let stooge = [];
let itemNamesObj = [];
let itemNames = {};

for(let key in data.customers){

  stooge.push(key);
  itemNamesObj.push(data.customers[key]);

}

itemNamesObj.forEach(function (el){

  itemNames = el;

});


const items = Object.keys(itemNames).map(key => key);
const itemCount = Object.keys(itemNames).map(key => itemNames[key]);
const prizes = Object.keys(data.prizes).map(key => key);
const totalPrizes = Object.keys(data.prizes).map(key => data.prizes[key]);


//end of looping fun


//Use renderSection to make sections for our template



const renderSection = (div)=>{
  if(div === prizeInventory){

  const html = `
  <div>
  <div style = 'display:flex'>
    ${
    Object.keys(data.prizes).map(key => `
    <div style = 'flex:1'>
    ${[key]}
    <div><br></div>
    ${data.prizes[key]}
    <div>
      </div>
      </div>
    `).join('')
    }
</div>
`;

div.innerHTML = html;

}

  if(div === customer){
  const html = `
  <div>
  <div style = 'display:flex'>
    ${
    Object.keys(data.customers).map(key => `
    <div style = 'flex:1'>
    ${[key]}
    <div><br></div>
    <div>
      ${
        Object.keys(itemNames).map(key => `
        <div id = 'stooge'>
        <button data-action='dec'>-</button>
        <span id = 'prize'> ${[key]}</span>
        <span id = 'item-count'>${[itemNames[key]]}</span>
        <button data-action='inc'>+</button>
        </div>`).join('')
      }
      </div>
      </div>
    `).join('')
    }
</div>
`;

    div.innerHTML = html;
  }

}


const render = ()=> {

  renderSection(prizeInventory);
  renderSection(customer);


};

render();



