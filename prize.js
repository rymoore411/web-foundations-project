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
    <div>
      ${
        Object.keys(data.prizes).map(key => `
        <div>
        ${data.prizes[key]}
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
        <div>
        <button data-action='dec'>-</button>
        ${[key]} ${[itemNames[key]]}
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


//       `<li> ${[key]} </li>`).join('')
//   }
//   </ul>
//   `;
//   div.innerHTML = html;
// };

const render = ()=> {

  renderSection(prizeInventory);
  renderSection(customer);


};

render();



