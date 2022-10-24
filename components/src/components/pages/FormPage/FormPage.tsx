import Form from 'Components/Form/Form';
import FormCardList from 'Components/FormCardList/FormCardList';
import Layout from 'Components/Layout/Layout';
import React, { useState } from 'react';
import { CardForm } from 'types/types';

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
