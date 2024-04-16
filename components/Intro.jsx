import Button from './button/Button'

const Intro = (props) => {
  let bladeData = props.data;
  return (
    <div className="Intro">
      <div className="lg-up:text-center">
        <h2 className='text-cosmos'>{bladeData.title}</h2>
        <p className='text-cosmos pt-[30px] max-w-[875px] lg-up:mx-auto'>{bladeData.blurb}</p>
        <div className="btnWrap pt-[30px]">
          <Button buttonText={bladeData.btnText} url={bladeData.btnLink} buttonClass={bladeData.btnClass} />
        </div>
      </div>
    </div>
  )
}

export default Intro;