import React from 'react';
import Button from "./button/Button";
import Link from 'next/link';
import Image from 'next/image';

export default function ChatBot() {
	return (
		<>
			<div className="bg-lightning fixed bottom-[40px] right-[40px] sm:right-[20px]  h-[55px] w-[55px] md:h-[44px] md:w-[44px] rounded-[100%] cursor-pointer z-[20]">
				{/* <Button buttonText={''} url={'/'} buttonClass={'wrapper relative overflow-hidden w-full h-full '} /> */}


				<div className="img-wrap absolute left-[50%] top-[50%] w-[33px] h-[33px] md:w-[28px] md:h-[28px] transform translate-x-[-50%] translate-y-[-50%] ">
					<div className="relative">
						<Link href={"#"} className='emptyLink'> .</Link>
						<Image src='/images/message.svg' width={1000} height={1000} quality={100} alt='chatbot' className='w-full h-full object-cover' />
					</div>
				</div>
			</div>
		</>
	);
}
