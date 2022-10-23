import { useState } from 'react';
import useDarkMode from '../hook/useDarkMode';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import logo from '../assets/logo.svg';

export default function Nav() {
	const [colorTheme, setTheme] = useDarkMode();
	const [darkMode, setDarkMode] = useState(
		colorTheme === 'light' ? true : false,
	);

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme);
		setDarkMode(checked);
	};

	return (
		<header className="max-w-xl mx-auto mt-16 mb-8 md:max-w-3xl">
			<nav className="flex justify-between items-center">
				<img
					src={logo}
					className={`${
						colorTheme === 'dark' ? 'invert' : 'invert-0'
					}`}
				/>
				<div className="flex gap-4">
					<span className="font-bold uppercase ">
						{colorTheme === 'dark' ? 'light' : 'dark'}
					</span>
					<DarkModeSwitch
						checked={darkMode}
						onChange={toggleDarkMode}
						size={24}
					/>
				</div>
			</nav>
		</header>
	);
}
