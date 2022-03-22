import React from 'react'

import {
  Container,
  BannerItem,
  SubTitle,
  Description,
  VerMais,
  ContainerSlider,
  ButtonLerMais
} from './styles'

import { useNavigation } from '@react-navigation/native'


const Cursos = ({ data, onPress}) => {

  const navigation = useNavigation()

  return (
    <Container>

      <ContainerSlider>
        <BannerItem
          source={{uri: data.multipart_course_image_url}}

        />
        <ButtonLerMais  onPress={() => onPress(data)}>

          <SubTitle numberOfLines={1}>{data?.name}</SubTitle>
          <Description>{data?.teaser}</Description>
          <VerMais>Leia Mais</VerMais>

        </ButtonLerMais>
      </ContainerSlider>

    </Container>
  )
}

export default Cursos