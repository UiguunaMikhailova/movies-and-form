import React, { Component, ReactNode } from "react";
import Header from '../Header/index'

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
