import React, { Component } from 'react';

type FormCardProps = {
  name: string;
  file: string;
};

export default class FormCard extends Component<FormCardProps> {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <img src={this.props.file} />
      </div>
    );
  }
}
