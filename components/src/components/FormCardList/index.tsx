import React from 'react';
import FormCard from 'Components/FormCard';
import { FormCardListProps } from 'types';
import './FormCardList.css';

export default function FormCardList({ cards }: FormCardListProps) {
  return (
    <ul role="formCardList" className="form-card-list">
      {cards.map((item, index) => {
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