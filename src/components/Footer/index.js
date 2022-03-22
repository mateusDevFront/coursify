import React from 'react'

import {
  Container,
  Logo,
  Text,
  ButtonContainer,
  TextButton
} from './styles'
import logo from '../../assets/logowhite.png'

const Footer = ({onPress}) => {
  /* Linking.openURL('https://coursify.me/customer') */
  return (
    <Container>
      <Logo source={logo} />
      <Text>
        O Coursify.me é uma plataforma de ensino a distância, onde qualquer pessoa ou empresa pode construir seuEAD e vender cursos pela internet.
      </Text>
      <ButtonContainer onPress={onPress}>
        <TextButton>Quero conhecer a plataforma!</TextButton>
      </ButtonContainer>
    </Container>
  )
}

export default Footer