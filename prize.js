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

const moe = document.querySelector('#moe');
const larry = document.querySelector('#larry');
const curly = document.querySelector('#curly');

console.log(moe);

const handler = (ev) => {
  console.log(ev);

  //render();
}

console.log('test');

moe.addEventListener('click', handler);
larry.addEventListener('click', handler);
curly.addEventListener('click', handler);

const stooges = Object.keys(data.customers).map(key => data.customers);

console.log(stoogesItems);

const renderSection = (stooge, div)=>{
  const html = `
  <ul>
  ${
    Object.keys(data.customers.stooge).map(key => `<li> ${data.customers.stooge[key]} </li>`).join('')
  }
  </ul>
  `;
  // console.log(div.innerHTML);
  // div.innerHTML = html;
};

const render = ()=> {

  renderSection('Moe', moe);
  renderSection('Larry', larry);
  renderSection('Curly', curly);


};

render();
