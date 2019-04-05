import React from 'react';
import styled from 'styled-components/native'
import Layout from '../constants/Layout'
import MinoTypes from '../constants/MinoTypes'


export default class TetrisField extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      time: 0,
      currentMino: {
        type: 'T',
        angle: 0,
        x: 0,
        y: 0,
      },
      field: [
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]]
    };
  }
  componentDidMount() {
    let timer = setInterval(() => {
      this.setState({time: this.state.time += 1});
    }, 500);
  }
  changeAngle = () => {
    this.setState(p => (
      {currentMino:{
        ...p.currentMino,
        angle: (p.currentMino.angle + 1) % 4,
      }}
    ))
  }
  canSlide = (direction) => {
    console.log(direction);
  }
  slide = (direction) => {
    if(!this.canSlide(direction)){
      return;
    }
    let direction_num = direction === 'left'? -1 : 1;
    this.setState(p => ({
        currentMino: {
          ...p.currentMino,
          x: p.currentMino.x += direction_num
        }
      }
    ))
  }
  nextMino = () => {
    this.setState( () => ({
        time: 0,
        currentMino: {
          type: Layout.minoName[Math.floor(Math.random() * Layout.minoName.length)],
          angle: Math.floor(Math.random() * 4),
          x: Math.floor(Math.random() * 7),
          y: 0,
        },
      }
    ))
  }
  render() {  
    // let dispTetromino = (minoType, startTime) => {
    //   let tmpTetromino = []
    //   minoType.shape.map(i => {
    //     let blocksRow = [];
    //     i.map(j => {
    //       blocksRow.push(<Block color={j} colorCode={minoType.color} key={`${startTime}`} edgeLength={Layout.tetrisField.edgeLength}/>)
    //     })
    //     tmpTetromino.push(<BlockRowWrapper edgeLength={Layout.tetrisField.edgeLength}>{blocksRow}</BlockRowWrapper>)
    //   })
    //   return <Tetromino y={(this.state.time - startTime)} x={this.state.currentMino.x} edgeLength={Layout.tetrisField.edgeLength}>{tmpTetromino}</Tetromino>
    // }
    let dispCells = (minoType) => {
      let tmpTetromino = []
      minoType.shape.map(i => {
        let blocksRow = [];
        i.map(j => {
          blocksRow.push(<Block color={j} colorCode={minoType.color} edgeLength={Layout.tetrisField.edgeLength}/>)
        })
        tmpTetromino.push(<BlockRowWrapper edgeLength={Layout.tetrisField.edgeLength}>{blocksRow}</BlockRowWrapper>)
      })
      return <Tetromino y={(this.state.time - startTime)} x={this.state.currentMino.x} edgeLength={Layout.tetrisField.edgeLength}>{tmpTetromino}</Tetromino>
    }

    return (
      <React.Fragment>
        <Field 
          height={Layout.tetrisField.height}
          width={Layout.tetrisField.width}
          edgeLength={Layout.tetrisField.edgeLength}
          onPress={this.changeAngle}
        >
          {/* {dispTetromino(MinoTypes[this.state.currentMino.type][Layout.minoAngle[this.state.currentMino.angle]], 0)} */}
          {dispCells(MinoTypes[this.state.currentMino.type][Layout.minoAngle[this.state.currentMino.angle]])}
        </Field>
        <Buttons>
          <SlideButton　onPress={() => this.slide('left')}></SlideButton>
          <SlideButton　onPress={() => this.slide('right')}></SlideButton>
        </Buttons>
        <SlideButton　onPress={() => this.nextMino()}></SlideButton>
      </React.Fragment>
    );
  }
}
const Buttons = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
const SlideButton = styled.TouchableOpacity`
  background: #4f7f4f;
  border: 1px solid #ffffff44;
  height: 30px;
  width: 30px;
`

const Field = styled.TouchableOpacity`
  height: ${props => props.height * props.edgeLength}px;
  width: ${props => props.width * props.edgeLength}px;
  background: #2f4f4f;
  border: 1px solid #ffffff44;
  position: relative;
`
const Block = styled.View`
  border: 1px solid #ffffff44;
  height: ${props => props.edgeLength}px;
  width: ${props => props.edgeLength}px;
  /* opacity: ${props => props.color===0 ? 0.1 : 1}; */
  background: ${props => props.colorCode ? props.colorCode: ''};
`
const BlockRowWrapper = styled.View`
  display: flex;
  flex-direction: row;
`
// const Tetromino = styled.View`
//   display: flex;
//   flex-direction: column;
//   width: ${props => props.edgeLength * 4}px;
//   height: ${props => props.edgeLength * 4}px;
//   position: absolute;
//   top: ${props => (props.edgeLength * (0 + props.y) <= 17 * props.edgeLength) ? props.edgeLength * (-2 + props.y): 17 * props.edgeLength};
//   left: ${props => (props.edgeLength * (0 + props.x))};
//   background: #ffffff04;
// `

