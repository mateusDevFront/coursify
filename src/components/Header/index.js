import React from 'react'

import {
  Container,
  Tab,
  Logo
} from './styles'

import { StatusBar } from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 

import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <Container>
      <StatusBar hidden={true} />
      <Tab>
        <Logo source={logo}/>
      </Tab>
    </Container>
  )
}

export default Header