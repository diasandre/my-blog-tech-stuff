import React from "react"
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import "../styles.css"
import { SOCIAL_URL, SOCIAL_TYPES } from "../constants/socialConstants"

const HeaderSocial = () => {
  const goToUrl = type => {
    const path = SOCIAL_URL[type]
    window.open(path, "_blank")
  }

  return (
    <>
      <AiOutlineTwitter
        onClick={() => goToUrl(SOCIAL_TYPES.TWITTER)}
        className="social twitter"
      />
      <AiFillGithub
        onClick={() => goToUrl(SOCIAL_TYPES.GITHUB)}
        className="social"
      />
      <AiFillLinkedin
        onClick={() => goToUrl(SOCIAL_TYPES.LINKEDIN)}
        className="social linkedin"
      />
    </>
  )
}

export default HeaderSocial
