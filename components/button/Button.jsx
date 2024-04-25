import React from 'react';
import Link from "next/link";
import VideoButton from "./VideoBtn";

const isExternal = (url) => {
  try {
    const currentHost = window.location.hostname;
    const urlHost = new URL(url).hostname;
    return currentHost !== urlHost;
  } catch (error) {
    console.error(`Invalid URL: ${url}`);
    return false;
  }
};


const Button = ({ buttonText, url, target, buttonClass, videoUrl }) => {
  let linkTarget;
  if (url !== "/" && url !== "#" && url !== "") {
    linkTarget = target || (isExternal(url) ? "_blank" : "");
  }
  return (
    <>
      {videoUrl ? (<VideoButton buttonText={buttonText} url={url} buttonClass={buttonClass} videoUrl={videoUrl} />) :
        (<Link href={url} target={linkTarget} className={`button ${buttonClass}`}>{buttonText}</Link>)
      }
    </>

  )
}

export default Button;



