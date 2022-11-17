import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import SearchUser from './components/SearchUser';
import SearchDisplay from './components/SearchDisplay';

export default function App() {
	const [user, setUser] = useState('octocat');
	const [data, setData] = useState('');
	const [error, setError] = useState(false);
	useEffect(() => {
		setError(false);
		const fetchUser = async () => {
			const response = await fetch(
				`https://api.github.com/users/${user}`,
			);
			const data = await response.json();
			setData(data);
			if (data.message) {
				setError(true);
			}
		};

		fetchUser();
	}, [user]);

	return (
		<div className="max-w-screen mx-auto px-4">
			<Nav />
			<SearchUser setUser={setUser} />
			<SearchDisplay data={data} error={error} />
		</div>
	);
}
