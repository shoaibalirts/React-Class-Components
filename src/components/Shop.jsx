import { Component } from "react";
class Shop extends Component {
  state = {
    items: [
      { id: 1, name: "Appelsin", price: 4.0, origin: "Grækenland", count: 1 },
      {
        id: 2,
        name: "Østershatte",
        price: 10.0,
        origin: "Danmark",
        count: 1,
      },
      { id: 3, name: "Æble", price: 2.5, origin: "Danmark", count: 1 },
    ],
    basket: [],
    itemsInBasket: 0,
  };

  increment = (id) => {
    this.setState((prevState) => ({
      items: prevState.items.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      ),
    }));
  };
  decrement = (id) => {
    this.setState((prevState) => ({
      items: prevState.items.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      ),
    }));
  };
  addToBasket = (basketItem) => {
    this.setState((prevState) => ({
      basket: prevState.items.map((item) =>
        item.id === basketItem ? { ...item } : item
      ),
    }));
    console.log(this.basket);
  };

  render() {
    return (
      <section>
        <h1>Velkommen til butikken</h1>
        <p>Vi har i dag byde på følgende varer:</p>
        <p>Du har {this.basket} varer i kurven </p>
        <button>Vis kurven</button>
        <table>
          <tbody>
            {this.state.items.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <strong>{item.name}</strong>
                  </td>
                  <td>Antal {item.count}</td>
                  <td>
                    <button onClick={() => this.increment(item.id)}>+</button>
                  </td>
                  <td>
                    <button onClick={() => this.decrement(item.id)}>-</button>
                  </td>
                  <td>Kr. {item.price}</td>
                  <td>
                    <button onClick={() => this.addToBasket(item.id)}>
                      Læg i kurv
                    </button>
                  </td>
                </tr>
              ); // map return
            })}
          </tbody>
        </table>
      </section>
    ); // end of map return
  } // end of render
}

export default Shop;
