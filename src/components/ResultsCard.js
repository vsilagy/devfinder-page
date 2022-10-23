import location from '../assets/icon-location.svg';
import twitter from '../assets/icon-twitter.svg';
import website from '../assets/icon-website.svg';
import company from '../assets/icon-company.svg';
export default function ResultsCard() {
	return (
		<section className="max-w-xl mx-auto p-8 rounded-xl shadow-lg bg-white dark:bg-darkSaturatedBlue md:max-w-3xl">
			<div className="flex justify-start gap-8 mb-8 p-4">
				<h6 className="h-24 w-24  bg-red-500 rounded-full md:h-36 md:w-36"></h6>
				<div className="flex flex-col gap-4  md:flex-row md:justify-between md:flex-1">
					<div>
						<h2 className="text-2xl  font-bold mb-1 md:text-3xl">
							name
						</h2>
						<h3 className="text-sm text-blueish md:-text-base">
							@username
						</h3>
					</div>
					<p className="text-sm md:text-base">joined</p>
				</div>
			</div>
			<div className="ml-0 md:ml-44">
				<p className="mx-4 my-6 md:-mt-24">bio</p>
				<div className="grid grid-cols-3 gap-2 mx-4 mb-4 p-4 text-sm rounded-xl bg-saturatedWhite  dark:bg-veryDarkBlue md:text-base md:gap-4 md:mb-8 md:p-8">
					<p>Repos</p>
					<p>Followers</p>
					<p>Following</p>
					<p className="font-bold">1</p>
					<p className="font-bold">2</p>
					<p className="font-bold">3</p>
				</div>

				<div className="grid grid-cols-1 gap-3 mx-4 text-sm md:grid-cols-2 md:gap-5 md:text-base">
					<div className="flex gap-4 items-center">
						<img src={location} className="w-5 md:w-6" />
						<p>Location</p>
					</div>
					<div className="flex gap-4 items-center">
						<img src={twitter} className="w-5 md:w-6" />
						<p>Twitter</p>
					</div>
					<div className="flex gap-4  items-center">
						<img src={website} className="w-5 md:w-6" />
						<p>Website</p>
					</div>
					<div className="flex gap-4  items-center">
						<img src={company} className="w-5 md:w-6" />
						<p>Company</p>
					</div>
				</div>
			</div>
		</section>
	);
}
