import React from 'react';
import styled from 'styled-components/native'
import Layout from '../constants/Layout'


export default class TetrisField extends React.Component {
  render() {
    const minoTypes = {
      I: {
        angle0:[
          [0, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 1, 0, 0],
        ],
        angle90:[
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [1, 1, 1, 1],
          [0, 0, 0, 0],
        ],
        angle180:[
          [0, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 1, 0, 0],
        ],
        angle270:[
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [1, 1, 1, 1],
          [0, 0, 0, 0],
        ],
      },
      O:{
        angle0:[
          [0, 0, 0, 0],
          [0, 1, 1, 0],
          [0, 1, 1, 0],
          [0, 0, 0, 0],
        ],
        angle90:[
          [0, 0, 0, 0],
          [0, 1, 1, 0],
          [0, 1, 1, 0],
          [0, 0, 0, 0],
        ],
        angle180:[
          [0, 0, 0, 0],
          [0, 1, 1, 0],
          [0, 1, 1, 0],
          [0, 0, 0, 0],
        ],
        angle270:[
          [0, 0, 0, 0],
          [0, 1, 1, 0],
          [0, 1, 1, 0],
          [0, 0, 0, 0],
        ],
      },
      S:{
        angle0:[
          [0, 1, 0, 0],
          [0, 1, 1, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 0],
        ],
        angle90:[
          [0, 0, 0, 0],
          [0, 0, 1, 1],
          [0, 1, 1, 0],
          [0, 0, 0, 0],
        ],
        angle180:[
          [0, 1, 0, 0],
          [0, 1, 1, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 0],
        ],
        angle270:[
          [0, 0, 0, 0],
          [0, 0, 1, 1],
          [0, 1, 1, 0],
          [0, 0, 0, 0],
        ],
      },
      Z:{

      },
      J:{

      },
      L:{

      },
      T:{

      },
    }
    

    let blocks = [];
    for (let i = 0; i < 20; i++) {
      let blocksRow = [];
      for (let j = 0; j < 10; j++) {
        blocksRow.push(
          <Block key={j} edgeLength={Layout.tetrisField.edgeLength}/>
        )
      }
      blocks.push(<BlockRowWrapper>{blocksRow}</BlockRowWrapper>)
    }

    let tetromino = (minoType) => {
      let tmpTetromino = []
      minoType.map(i => {
        let blocksRow = [];
        i.map(j => {
          blocksRow.push(<Block color={j} minoType={minoType} key={j} edgeLength={Layout.tetrisField.edgeLength}/>)
        })
        tmpTetromino.push(<BlockRowWrapper>{blocksRow}</BlockRowWrapper>)
      })
      return tmpTetromino
    }

    return (
      <Field 
        height={Layout.tetrisField.height}
        width={Layout.tetrisField.width}
        edgeLength={Layout.tetrisField.edgeLength}
      >
        {/* {blocks} */}
        {tetromino(minoTypes.I.angle90)}
        {tetromino(minoTypes.S.angle0)}
        {tetromino(minoTypes.S.angle90)}

        
      </Field>
    );
  }
}

const Field = styled.View`
  height: ${props => props.height * props.edgeLength}px;
  width: ${props => props.width * props.edgeLength}px;
  background: #2f4f4f;
  border: 1px solid #ffffff44;
`
const Block = styled.View`
  border: 1px solid #ffffff44;
  height: ${props => props.edgeLength}px;
  width: ${props => props.edgeLength}px;
  opacity: ${props => props.color===0 ? 0 : 1 };
  background: ${props => props.color===0 ? '#2f4f4f' : '#ee827c'};
  
  
`
const BlockRowWrapper = styled.View`
  display: flex;
  flex-direction: row;
  /* position: relative; */
`
const Tetromino = styled.View`
  background: #ee827c;
  position: absolute;
`