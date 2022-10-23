import Nav from './components/Nav';
import SearchInput from './components/SearchInput';
import ResultsCard from './components/ResultsCard';

export default function App() {
	return (
		<div className="max-w-screen max-h-screen mx-auto px-4">
			<Nav />
			<SearchInput />
			<ResultsCard />
		</div>
	);
}
