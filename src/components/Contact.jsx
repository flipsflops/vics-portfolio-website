import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const getFalsyProperties = (obj) => {
		const falsyProperties = [];

		for (const prop in obj) {
			if (!obj[prop]) {
				falsyProperties.push(prop);
			}
		}

		return falsyProperties;
	};

	const isObjectNonEmpty = (obj) => {
		return Object.keys(obj).length !== 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		const checkedFormArr = getFalsyProperties(form);

		if (checkedFormArr?.length > 0) {
			const formattedList = checkedFormArr
				.map((item) => `<li>${item}</li>`)
				.join('');

			const toastrOptions = {
				closeButton: true,
				progressBar: true,
				positionClass: 'toast-top-right',
				timeOut: 3000,
				extendedTimeOut: 2000,
				preventDuplicates: true,
				showMethod: 'fadeIn',
				hideMethod: 'fadeOut',
				newestOnTop: true,
			};

			toastr.info(
				`<ul style="list-style-type: disc; padding-left: 20px;">${formattedList}</ul>`,
				'The following inputs have not been filled out:',
				toastrOptions
			);
			setLoading(false);
		} else {
			emailjs
				.send(
					'service_tt4e7g8',
					'template_q0fdnpa',
					{
						from_name: form.name,
						to_name: 'Victor Ibasco',
						from_email: form.email,
						to_email: 'victoribasco18@gmail.com',
						message: form.message,
					},
					'75xOekUPFfCBcjY0M'
				)
				.then(
					() => {
						setLoading(false);
						toastr.success(
							'Thank you. I will get back to you as soon as possible.'
						);

						setForm({
							name: '',
							email: '',
							message: '',
						});
					},
					(error) => {
						setLoading(false);
						console.error(error);
						toastr.error(
							'Ahh, something went wrong. Please try again.'
						);
					}
				);
		}
	};

	return (
		<div
			className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
		>
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>Contact.</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">
							Your Name
						</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What's your name?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">
							Your email
						</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's your web address?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">
							Your Message
						</span>
						<textarea
							rows={7}
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What do you want to say?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>

					<button
						type="submit"
						className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
					>
						{loading ? 'Sending...' : 'Send'}
					</button>
				</form>
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, 'contact');
