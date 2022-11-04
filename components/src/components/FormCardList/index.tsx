import React from 'react';
import { useAppSelector } from 'hooks/redux';
import FormCard from 'Components/FormCard';
import './FormCardList.css';

export default function FormCardList() {
  const { formCards } = useAppSelector((state) => state.FormSlice);

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
