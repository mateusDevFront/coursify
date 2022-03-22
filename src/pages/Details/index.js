import React, { useState, useEffect } from 'react'
import { Linking } from 'react-native';

import {
  Container,
  Title,
  Description,
  ImageBackground,
  DetailScroll,
  Header,
  Logo,
  Return
} from './styles'

import { useNavigation } from '@react-navigation/native'

import api from '../../services/api'

import { AntDesign } from '@expo/vector-icons';

import Footer from '../../components/Footer'
import logo from '../../assets/logo.png'

const Details = ({ route }) => {

  const navigation = useNavigation()

  const cursoId = route.params.id;
  const [curso, setCurso] = useState({})

  //Link de direcionamento para o site coursify
  const url = "https://blog.coursify.me/pt/plataforma-para-cursos-online-o-coursify-me-agora-e-gratuito/"

  useEffect(() => {
    let isActive = true;
    async function getCursos() {
      const response = api.get(`/courses/${cursoId}`)
        .then(response => {
          setCurso(response.data.data)
          /* console.log('test', response.data) */
        })
    }
    getCursos()
    isActive = false;
  }, []);
  /*  console.log('curso:', route) */

  return (
    <Container>
      <DetailScroll>
        <Header>
          <Return onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={36} color="black" />
          </Return>
          <Logo source={logo} />
        </Header>

        <Title>{curso.name}</Title>
        <Description>
          {curso.teaser}
        </Description>

        <ImageBackground
          source={{ uri: curso.multipart_course_image_url }}
        />
        <Footer onPress={() => Linking.openURL(url)} />
        
      </DetailScroll>

    </Container>
  )
}
export default Details