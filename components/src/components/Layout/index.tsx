import React from 'react';
import Header from 'Components/Header';
import { LayoutProps } from 'types';

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
