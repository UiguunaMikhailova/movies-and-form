import Header from 'Components/Header';
import React, { Component, ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default class Layout extends Component<LayoutProps> {
  render() {
    return (
      <>
        <Header />
        <main>{this.props.children}</main>
      </>
    );
  }
}
