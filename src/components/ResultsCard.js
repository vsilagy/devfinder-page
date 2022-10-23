import location from '../assets/icon-location.svg';
import twitter from '../assets/icon-twitter.svg';
import website from '../assets/icon-website.svg';
import company from '../assets/icon-company.svg';
export default function ResultsCard() {
	return (
		<section className="max-w-xl mx-auto p-8 rounded-xl shadow-lg bg-white dark:bg-darkSaturatedBlue md:max-w-3xl">
			<div className="flex justify-start gap-8 mb-8 p-4 ">
				<h6 className="h-36 w-36  bg-red-500 rounded-full"></h6>
				<div className="flex flex-col justify-start">
					<h2 className="text-3xl font-bold mb-1">name</h2>
					<h4 className="text-blueish mb-2">@username</h4>
					<p className="pt-4">bio</p>
				</div>
				<p className="text-lg ml-auto mb-4 ">joined</p>
			</div>
			<div className="ml-0 md:ml-44">
				<div className="grid grid-cols-3 gap-4 mx-4 mb-8 p-8 rounded-xl dark:bg-veryDarkBlue">
					<div>Repos</div>
					<div>Followers</div>
					<did>Following</did>
					<div>1</div>
					<div>2</div>
					<div>3</div>
				</div>

				<div className="grid grid-cols-2 gap-4 mx-4 ">
					<div className="flex gap-4 h-6 items-center">
						<img src={location} />
						<span>Location</span>
					</div>
					<div className="flex gap-4 h-6 items-center">
						<img src={twitter} />
						<span>Twitter</span>
					</div>
					<div className="flex gap-4 h-6 items-center">
						<img src={website} />
						<span>Website</span>
					</div>
					<div className="flex gap-4 h-6 items-center">
						<img src={company} />
						<span>Company</span>
					</div>
				</div>
			</div>
		</section>
	);
}
