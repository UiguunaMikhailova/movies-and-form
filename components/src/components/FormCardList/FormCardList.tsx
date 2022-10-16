import React, { Component } from 'react';
import { FormCardListProps } from 'types/types';
import FormCard from 'Components/FormCard/FormCard';
import './FormCardList.css';

export default class FormCardList extends Component<FormCardListProps> {
  render() {
    return (
      <ul role="form-card-list" className="form-card-list">
        {this.props.cards.map((item, index) => {
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
}
