import React, { Component } from 'react';
import { FormCardListProps } from 'types/types';
import FormCard from 'Components/FormCard/FormCard';

export default class FormCardList extends Component<FormCardListProps> {
  render() {
    return (
      <div>
        {this.props.cards.map((item, index) => {
          return <FormCard key={index} name={item.name} file={item.file} />;
        })}
      </div>
    );
  }
}
