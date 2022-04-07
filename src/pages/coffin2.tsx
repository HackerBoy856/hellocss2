// @ts-ignore
import React,{ FC } from 'react'
import img_coffin2_bg from '../image/background/Coffin90_bg3.jpg'
import img_coffin2_pic from '../image/page2/300ppi/coffin2_pic.jpg'
interface Coffin2Props {
}

const Coffin2: FC<Coffin2Props> = props => {
  const {
  }=props
  return (
    <>
      <div className="coffin2_body">
        <img className="coffin2_bg_img" src={img_coffin2_bg} alt=""/>
        <img className="coffin2_pic" src={img_coffin2_pic} alt=""/>
      </div>
    </>

  )
}

export default Coffin2;