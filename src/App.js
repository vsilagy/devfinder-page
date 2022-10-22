import Nav from './components/Nav';
import SearchInput from './components/SearchInput';
import ResultsCard from './components/ResultsCard';

export default function App() {
	return (
		<div className="mx-auto dark:bg-veryDarkBlue dark:text-white h-screen w-screen ">
			<Nav />
			<SearchInput />
			<ResultsCard />
		</div>
	);
}
