import React, { Component } from 'react';
import COUNTRIES from 'Constants/countries';

export default class Form extends Component {
  render() {
    return (
      <form onSubmit={() => console.log(123)}>
        <input type="text" placeholder="Введите название фильма" />
        <input type="date" />
        <select>
          {COUNTRIES.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
