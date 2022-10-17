import Form from 'Components/Form/Form';
import FormCardList from 'Components/FormCardList/FormCardList';
import Layout from 'Components/Layout/Layout';
import React, { Component } from 'react';
import { CardForm } from 'types/types';

export default class FormPage extends Component {
  state = {
    cards: [],
    save: false,
  };
  updateCards(card: CardForm) {
    this.setState({ save: true });
    setTimeout(() => {
      this.setState({ save: false });
      this.setState({
        cards: [...this.state.cards, card],
      });
    }, 1000);
  }
  render() {
    return (
      <Layout>
        <div className="home" role="formPage">
          <Form updateCards={this.updateCards.bind(this)} save={this.state.save} />
          <FormCardList cards={this.state.cards} />
        </div>
      </Layout>
    );
  }
}
