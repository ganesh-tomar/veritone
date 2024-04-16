import React from "react";
import Link from "next/link";
import Button from "./button/Button";
import ContactUs from "./button/ContactUs";

const Footercta = ({ title, description, btnText1, btnUrl1, btnClass1, btnText2, btnUrl2, btnClass2, setFormOverlay }) => {
  return (
    <section className="footer-cta padding-large relative w-full py-[100px] bg-cosmos ">
      <div className="container ">
        <div className="footerCta_content relative w-full text-center ">
          <h2 className="h1  text-white font-light ">{title}</h2>
          <p className="max-w-[740px] mx-auto tabletlarge:mt-[30px] tablet:mt-[30px] laptop-landscape:mt-[30px] tabletlarge:w-[759px] tablet:w-[759px] text-white font-normal mt-[65px] sm:mt-[40px]">
            {description}
          </p>
          <div className="button_wrapper relative w-full flex tabletlarge:mt-[30px] tablet:mt-[30px] laptop-landscape:mt-[30px] justify-center items-center mt-[50px] sm:flex-col ">
            {btnText1 && <div className={`btn-wrap ${btnText2 ? 'mr-[30px] sm:mt-[20px] sm:w-full sm:mr-0' : ''}`}>
              <Button target={true} buttonText={btnText1} url={'https://unlock.veritone.com/corp-contact-us'} buttonClass={'default mr-[30px]'} />
              {/* <ContactUs setFormOverlay={setFormOverlay} buttonText={btnText1} url={'#'} buttonClass={'default mr-[30px]'} formUrl={'https://unlock.veritone.com/l/636301/2023-04-27/4cx8sc?source=https://www.veritone.com/'} /> */}
            </div>}
            {btnText2 && <div className="btn-wrap mr-[30px] sm:mt-[20px] sm:w-full sm:mr-0">
              {console.log(btnText2)}
              <Button
                buttonText={btnText2}
                url={btnUrl2}
                buttonClass={btnClass2}
              />

            </div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footercta;
