import React, { useState } from 'react';
import Form from 'Components/Form';
import FormCardList from 'Components/FormCardList';
import Layout from 'Components/Layout';
import { CardForm } from 'types';

export default function FormPage() {
  const [cards, setCards] = useState<CardForm[]>([]);
  const [save, setSave] = useState(false);

  function updateCards(card: CardForm) {
    setSave(true);
    setTimeout(() => {
      setSave(false);
      setCards([...cards, card]);
    }, 1000);
  }

  return (
    <Layout>
      <div className="home" role="formPage">
        <Form updateCards={updateCards} save={save} />
        <FormCardList cards={cards} />
      </div>
    </Layout>
  );
}
