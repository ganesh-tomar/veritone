import Image from 'next/image';
import Button from './button/Button';

const TwoColumnText = ({ col }) => {
	return (
		<section className="two-column-text padding-120 padding-medium-bottom">
			<div className="container">
				<div className="row-wrap flex flex-wrap justify-between">
					{col.map((item, i) => {
						const lastCol = i === col.length - 1;
						return (
							<div
								key={i}
								className={`col-two max-w-[487px] laptopsmall:w-[46%]  laptopsmall:max-w-full laptopmid:w-[46%] laptopmid:max-w-full laptop:max-w-[412px] tablet:w-[46%] md:max-w-full flex flex-col justify-between ${lastCol ? 'last-col md:mt-[30px]' : ''
									}`}
							>
								<div className="icon-wrap ">
									<Image
										src={item.imgpath}
										alt={item.alt}
										width={42}
										height={42}
										quality={75}
									/>
								</div>
								<h2
									className={`pt-[12px]`}

									dangerouslySetInnerHTML={{ __html: item.colTitle }}
								/>
								{/* <h2>{item.colTitle}</h2> */}
								<p className="pt-[28px]  pb-[9px] text-cosmos">
									{item.colBlurb}
								</p>
								<Button
									buttonText={item.btnText}
									url={item.btnLink}
									buttonClass={'text-link-black self-start'}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default TwoColumnText;
