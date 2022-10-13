import Form from 'Components/Form/Form';
import FormCardList from 'Components/FormCardList/FormCardList';
import Layout from 'Components/Layout/Layout';
import React, { Component } from 'react';

export default class FormPage extends Component {
  render() {
    return (
      <Layout>
        <div className="home">
          <Form />
          <FormCardList />
        </div>
      </Layout>
    );
  }
}
