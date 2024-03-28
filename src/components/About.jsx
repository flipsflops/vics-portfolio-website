import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
	<div className='xs:w-[250px] w-full cursor-pointer'>
		<motion.div
			variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
			whileHover={{ scale: 1.05, translateY: -10 }}
			whileTap={{ scale: 0.8 }}
			className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
				<img
					src={icon}
					alt='web-development'
					className='w-16 h-16 object-contain'
				/>

				<h3 className='text-white text-[20px] font-bold text-center'>
					{title}
				</h3>
			</div>
		</motion.div>
	</div>
);

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] pb-5'>
				I am deeply passionate about leveraging product-driven
				strategies to transform business concepts into reality. My
				motivation stems from the dual satisfaction of achieving
				business objectives and creating a positive impact on people. I
				am always ready to engage in insightful discussions about design
				principles, and I find joy in sharing a good-natured programming
				joke, no matter how terrible it may be.
			</motion.p>

			<div className='mt-20 flex flex-wrap gap-10'>
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						index={index}
						{...service}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, 'about');
