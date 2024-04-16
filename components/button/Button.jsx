import Link from "next/link";
import VideoButton from "./VideoBtn";

const Button = ({ buttonText, url, target, buttonClass, videoUrl }) => {

  return (
    <>
      {videoUrl ? (<VideoButton buttonText={buttonText} url={url} buttonClass={buttonClass} videoUrl={videoUrl}/>) : 
      ( <Link href={url} target={target ? "_blank":""} className={`button ${buttonClass}`}>{buttonText}</Link>)
      }
    </>
   
  )
}

export default Button;
