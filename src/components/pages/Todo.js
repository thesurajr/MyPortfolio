import React, { Component } from 'react'
import Plan from './Plan'
import './todo.css'

class App extends Component {
  state = {
    items: [],
    text: ""
  }
  handleChange = e => {
    this.setState({ text: e.target.value })
  }
  handleAdd = e => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" });
    }
  }
  handleDelete = id => {
    console.log("Deleted", id);
    const Olditems = [...this.state.items]
    console.log("Olditems", Olditems);
    const items = Olditems.filter((element, i) => {
      return i !== id
    })
    console.log("Newitems", items);
    this.setState({ items: items });
  }
  render() {
    return (
      <div style={{display:"flex", justifyContent:"center",padding:"30px", marginBottom:"150px"}}>
        <div className="row1">
            <h2 className="text-center"> Today's Plan </h2>
            <div className="container-fluid">
              <div className="row2">
                <div className="col-91">
                  <input type="text" className="form-control1" placeholder="Write Plan Here" value={this.state.text} onChange={this.handleChange} />
                </div>
                <div >
                  <button className="btn1" onClick={this.handleAdd}>Add</button>
                </div>
              </div>
              <div className="conatiner2">
                <ul className="list-unstyled row m-5">
                  {
                    this.state.items.map((value, i) => {
                      return <Plan key={i} id={i} value={value} sendData={this.handleDelete} />
                    })
                  }
                </ul>
              </div>
            </div>
</div>
          </div>
    )
  }
}

export default App;
