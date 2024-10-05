import { Component } from "react";
class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      totalItems: 0,
    };
  }

  increment = (id) => {
    let updatedItems = this.state.items.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 }; // changing the item
      }
      return item; // no change
    });
    this.setState({
      items: updatedItems,
    });
  };
  decrement = (id) => {
    let updatedItems = this.state.items.map((item) => {
      if (item.id === id && item.count > 1) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    this.setState({
      items: updatedItems,
    });
  };
  addToBasket = (newItem) => {
    // console.log(newItem);

    let newBasket = [...this.state.basket, newItem]; // this.basket is empty in the start as given above
    // alternative to use basket.push(newItem) instead of construting a newBasket array
    let resetItems = this.state.items.map((item) => {
      if (newItem.id === item.id) {
        return { ...item, count: 1 };
      }
      return item;
    });

    //
    let total = newBasket.reduce(
      (accomulator, current) => accomulator + current.count,
      0
    );

    this.setState({
      basket: newBasket,
      items: resetItems,
      totalItems: total,
    });
  };

  componentDidUpdate() {
    // when the component is updated then we needs to have a new basket back
    console.log(this.state.basket);
  }

  render() {
    return (
      <section>
        <h1>Velkommen til butikken</h1>
        <p>Vi har i dag byde på følgende varer:</p>
        <p>Du har {this.state.totalItems} varer i kurven </p>
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
                    <button
                      onClick={() =>
                        this.addToBasket({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          count: item.count,
                        })
                      }
                    >
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
} // end of Shop class

export default Shop;
