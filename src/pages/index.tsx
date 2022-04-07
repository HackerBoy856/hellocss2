// @ts-ignore
import React,{ FC } from 'react'
import "../style/index.scss"
import Header from "./header";
import Coffin from './coffin'
import Coffin2 from './coffin2'
import Rarity from "./rarity";
interface IndexProps {
}

const Index: FC<IndexProps> = props => {
  const {
  }=props
  return (
    <>
      <Header />
      <Coffin />
      <Coffin2 />
      <Rarity />
    </>

  )
}

export default Index;