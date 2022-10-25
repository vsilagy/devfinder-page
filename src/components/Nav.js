import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkMode from '../hook/useDarkMode';

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
		<header className="max-w-xl mx-auto mt-4 mb-4 md:max-w-3xl md:mt-16 md:mb-8">
			<nav className="flex justify-between items-center">
				<h1 className="text-3xl font-bold dark:text-white">
					devfinder
				</h1>
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
