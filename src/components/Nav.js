import { useEffect, useState } from 'react';
import sun from '../assets/icon-sun.svg';
import moon from '../assets/icon-moon.svg';

export default function Nav() {
	const [theme, setTheme] = useState('');

	useEffect(() => {
		if (theme === 'dark') {
			window.document.documentElement.classList.add('dark');
		} else {
			window.document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	const handleThemeToggle = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<section className=" body-font dark:black">
			<header className="flex justify-between container max-w-lg mx-auto">
				<h1>devfinder</h1>
				<button className="" onClick={handleThemeToggle}>
					<img src={theme === 'light' ? moon : sun} />
				</button>
			</header>
		</section>
	);
}
