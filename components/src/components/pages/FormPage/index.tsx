import React from 'react';
import Form from 'Components/Form';
import FormCardList from 'Components/FormCardList';
import Layout from 'Components/Layout';

export default function FormPage() {
  return (
    <Layout>
      <div className="home" role="formPage">
        <Form />
        <FormCardList />
      </div>
    </Layout>
  );
}
