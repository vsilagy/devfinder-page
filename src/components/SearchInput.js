import search from '../assets/icon-search.svg';
export default function Input() {
	return (
		<div className="">
			<img src={search}></img>
			<input placeholder="Search Github username"></input>
			<button>Search</button>
		</div>
	);
}
