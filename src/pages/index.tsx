import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from '@nextui-org/react';

import styles from '../styles/Home.module.css'
import { destroyCookie } from 'nookies';
import Router from 'next/router';

const App: NextPage = () => {
  return (
    <Button color="gradient" onClick={(e) => {
      destroyCookie(null, 'jwt')
      Router.push('/')
    }}>Click me</Button>
  )
}

export default App
