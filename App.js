import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native'
import TetrisField from './components/TetrisField'

export default class App extends React.Component {
  render() {
    return (
      <StyledView>
        <TetrisField></TetrisField>
      </StyledView>
    );
  }
}

const StyledView = styled.View`
  background-color: #2f4f4f;
  color: #222222;
  flex: 2;
  align-items: center;
  justify-content: center;
  
`