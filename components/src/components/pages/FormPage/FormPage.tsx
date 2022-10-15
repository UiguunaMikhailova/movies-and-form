import Form from 'Components/Form/Form';
import FormCardList from 'Components/FormCardList/FormCardList';
import Layout from 'Components/Layout/Layout';
import React, { Component } from 'react';
import { CardForm } from 'types/types';

export default class FormPage extends Component {
  state = {
    cards: [],
  };
  updateCards(card: CardForm) {
    console.log(1);
    this.setState({
      cards: [...this.state.cards, card],
    });
  }
  render() {
    return (
      <Layout>
        <div className="home">
          <Form updateCards={this.updateCards.bind(this)} />
          <FormCardList cards={this.state.cards} />
        </div>
      </Layout>
    );
  }
}
