import Head from 'next/head';
import React, { ReactNode } from 'react'

interface Props {
  title: string;
  children?: ReactNode;
}

const BaseHead = ({title, children}: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/png" href="/digital_agent_ico.ico" />
      {children}
    </Head>
  );
}

export default BaseHead;