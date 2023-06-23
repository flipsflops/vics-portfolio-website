import React from 'react';
import { socials } from '../constants';
import { SectionWrapper } from '../hoc';

const Socials = () => {
	console.log(socials);
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{socials.map((social) => (
				<div
					className={
						social.name === 'LinkedIn'
							? 'w-24 h-24 pt-2'
							: 'w-28 h-28'
					}
					key={social.name}
				>
					<a
						href={social.link}
						target="_blank"
					>
						<img
							src={social.icon}
							alt="Social media link"
						/>
					</a>
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Socials, 'socials');
