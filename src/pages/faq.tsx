// @ts-ignore
import React,{ FC } from 'react'
import img_faq_bg from '../image/background/faq_bg.jpg'

interface FaqProps {
}

const Faq: FC<FaqProps> = props => {
  const {
  }=props
  return (
    <>
      <div className="faq_body">
        <img className="faq_bg" src={img_faq_bg} alt=""/>
      </div>
    </>
  )
}

export default Faq;