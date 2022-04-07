// @ts-ignore
import React,{ FC } from 'react'
import img_rarity_bg from '../image/background/rarity_bg.jpg'
import img_rarity_border_pic from '../image/page3/300ppi/rarity_border_pic.png'
interface RarityProps {
}

const Rarity: FC<RarityProps> = props => {
  const {
  }=props
  return (
    <>
      <div className="rarity_body">
        <img className="img_rarity_bg" src={img_rarity_bg} alt=""/>
        <img className="img_rarity_border_pic" src={img_rarity_border_pic} alt=""/>
      </div>


    </>

  )
}

export default Rarity;