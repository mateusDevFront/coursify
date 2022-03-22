import React, { useState, useEffect } from 'react'
import { Linking } from 'react-native';

import {
  Container,
  Title,
  Slider,

} from './styles'

import { useNavigation } from '@react-navigation/native'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Cursos from '../../components/Category/Cursos'

import api from '../../services/api'

const Home = () => {

  //Link de direcionamento para o site coursify
  const url = "https://blog.coursify.me/pt/plataforma-para-cursos-online-o-coursify-me-agora-e-gratuito/"

  const navigation = useNavigation()

  const [nowCursos, setNowCursos] = useState([])

  useEffect(() => {
    let isActive = true;
    async function getCursos() {
      // Cursos Online
      api.get('/courses')
        .then(response => {
          const cursos = response.data.data
          setNowCursos(cursos)

        })
    }
    getCursos()
    isActive = false;
  }, []);

  //Vai buscar os detalhes do curso//
  function navigateDetailsPage(item) {
    navigation.navigate('Details', {
      id: item.id
    })
  }

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Header />
      <Title>CURSOS ONLINE</Title>
      <Slider
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={nowCursos}//nowCursos,
        renderItem={({ item }) =>
          <Cursos data={item}
            onPress={() => navigateDetailsPage(item)} />}
        keyExtractor={(item) => String(item.name)}
      />

      <Title>MARKETING DIGITAL</Title>
      <Slider
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={nowCursos}//nowCursos,
        renderItem={({ item }) =>
          <Cursos data={item}
            onPress={() => navigateDetailsPage(item)} />}
        keyExtractor={(item) => String(item.name)}
      />

      <Title>TUTORIAIS</Title>
      <Slider
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={nowCursos}//nowCursos,
        renderItem={({ item }) =>
          <Cursos data={item}
            onPress={() => navigateDetailsPage(item)} />}
        keyExtractor={(item) => String(item.name)}
      />

      <Footer onPress={() => Linking.openURL(url)}/>

    </Container>
  )
}

export default Home
