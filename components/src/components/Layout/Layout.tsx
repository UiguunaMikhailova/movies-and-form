import Header from 'Components/Header';
import React from 'react';
import { LayoutProps } from 'types/types';

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
