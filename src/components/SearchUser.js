import { useState } from 'react';
import search from '../assets/icon-search.svg';
export default function SearchUser({ setUser }) {
	const [text, setText] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setUser(text);
		setText('');
	};
	return (
		<section className="max-w-xl mx-auto flex justify-between py-3 mb-6 rounded-xl shadow-lg bg-white dark:bg-darkSaturatedBlue md:max-w-3xl">
			<form className="flex items-center w-full ">
				<img src={search} className="px-4 h-6" />
				<input
					placeholder="Search Github username"
					className="w-full h-full outline-none placeholder:text-grayishBlue dark:bg-darkSaturatedBlue dark:placeholder:text-white"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<button
					className="bg-blueish text-white hover:opacity-70 font-bold h-14 mx-2 px-7 rounded-xl"
					onClick={handleSubmit}>
					Search
				</button>
			</form>
		</section>
	);
}
