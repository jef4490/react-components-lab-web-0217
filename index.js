const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

let twoGrannies = React.createElement('p', {}, 'Two grannies having the time of their life!')
let passengers = React.createElement('p', {}, 'Passengers:')
let agnes = React.createElement('li', {}, 'Agnes')
let muriel = React.createElement('li', {}, 'Muriel')
let peeps = React.createElement('ul', {}, [agnes, muriel])

const OlderCoaster = React.createClass({
  render() {
    return React.createElement('div', {className: 'oldercoaster'}, [twoGrannies, passengers, peeps])
  }
})

let youShouldnt = React.createElement('p', {}, "You shouldn't look too far.")
let rightInFront = React.createElement('strong', {}, "right in front of you.")
let sometimes = React.createElement('p', {}, ["Sometimes, the solution is ", rightInFront])

class InFrontOfYou extends React.Component {
  render() {
    return React.createElement('div', {}, [youShouldnt, sometimes])
  }
}

let hello = React.createElement('p', {}, "Hello! We have the following products for sale today:")
let butcherList = React.createElement('ul', {}, BUTCHER_PRODUCTS.map((meat) => {
  return React.createElement('li', {}, meat)
}))

class ButcherShop extends React.Component {
  render() {
    return React.createElement('div', {className: 'butcher-shop'}, [hello, butcherList])
  }
}

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('main')
);
