import React, { useContext } from 'react';
import FormCard from 'Components/FormCard';
import { Context } from 'App';
import './FormCardList.css';

export default function FormCardList() {
  const context = useContext(Context);
  const { formCards } = context.state;
  return (
    <ul role="formCardList" className="form-card-list">
      {formCards.map((item, index) => {
        return (
          <FormCard
            key={index}
            name={item.name}
            surname={item.surname}
            date={item.date}
            gender={item.gender}
            country={item.country}
            file={item.file}
          />
        );
      })}
    </ul>
  );
}
