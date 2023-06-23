import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { certifications, courses } from '../constants';

const CertOrCourseCard = ({ index, name, image, link, issuer, type }) => (
	<motion.div
		variants={fadeIn('', 'spring', index * 0.5, 0.75)}
		className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full cert-course-card"
	>
		<div className="mt-1">
			<img
				className="d-block w-100"
				src={image}
				alt={'cover image'}
			/>
			<div className="mt-7 flex justify-between items-center gap-1">
				<div className="flex-1 flex flex-col">
					<p className="text-white font-medium text-[16px]">
						From {issuer}
					</p>
					<p className="mt-1 text-secondary text-[12px]">{name}</p>
					<p className="mt-1 text-secondary text-[12px]">{type}</p>
				</div>
			</div>
		</div>
	</motion.div>
);

const CertificationsAndCourses = () => {
	return (
		<div className={`mt-12 bg-black-100 rounded-[20px]`}>
			<div
				className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
			>
				<motion.div variants={textVariant()}>
					<p className={styles.sectionSubText}>Continued Learning</p>
					<h2 className={styles.sectionHeadText}>
						Certifications and Courses
					</h2>
				</motion.div>
			</div>
			<div
				className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 cert-course-card-container`}
			>
				{certifications.map((certification, index) => (
					<CertOrCourseCard
						key={certification.name}
						index={index}
						{...certification}
					/>
				))}
				{courses.map((course, index) => (
					<CertOrCourseCard
						key={course.name}
						index={index}
						{...course}
					/>
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(CertificationsAndCourses, '');
