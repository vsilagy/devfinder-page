import Moment from 'moment';
import location from '../assets/icon-location.svg';
import twitter from '../assets/icon-twitter.svg';
import website from '../assets/icon-website.svg';
import company from '../assets/icon-company.svg';
import octocat from '../assets/octocat.png';

export default function ResultsCard({ data, error }) {
	let date = Moment(data.created_at).format('D MMM YYYY');

	return (
		<section className="max-w-xl mx-auto mb-12 p-4 rounded-xl shadow-lg bg-white dark:bg-darkSaturatedBlue md:p-8 md:max-w-3xl">
			{error ? (
				<div className="flex flex-col gap-10 items-center justify-between">
					<h1 className="text-sm px-2 font-bold text-red-500 md:text-lg ">
						These isn't the user you're looking for.
					</h1>
					<img
						src={octocat}
						alt="star wars octocat"
						className="w-36 md:w-48 h-auto"
					/>
				</div>
			) : (
				<>
					<div className="flex justify-start gap-8 mb-4 p-2 md:p-4 md:mb-8">
						<img
							src={data.avatar_url}
							alt={`${data.name} avatar `}
							className="h-28 w-28 rounded-full md:h-36 md:w-36"
						/>
						<div className="flex flex-col gap-4  md:flex-row md:justify-between md:flex-1">
							<div>
								<h2 className="text-2xl font-bold mb-1 md:text-3xl">
									{data.name}
								</h2>
								<h3 className="text-sm text-blueish md:text-base">
									@{data.login}
								</h3>
							</div>
							<p className="text-sm md:text-base ">Joined {date}</p>
						</div>
					</div>
					<div className="ml-0 md:ml-44">
						<p className="mx-2 my-6 dark:text-white md:mx-4 md:-mt-24">
							{!data.bio ? 'No bio provided' : data.bio}
						</p>
						<div className="grid grid-cols-3 gap-2 mx-2 my-4 px-4 py-4 text-sm rounded-xl bg-saturatedWhite  dark:bg-veryDarkBlue md:text-base md:gap-4 md:mx-4 md:my-8 md:px-8">
							<p>Repos</p>
							<p>Followers</p>
							<p>Following</p>
							<p className="font-bold">{data.public_repos}</p>
							<p className="font-bold">{data.followers}</p>
							<p className="font-bold">{data.following}</p>
						</div>

						<div className="grid grid-cols-1 gap-4 mx-2 text-sm md:grid-cols-2 md:gap-6 md:mx-4 md:mb-4 md:text-base">
							<div className="flex gap-5 items-start">
								<img
									src={location}
									className="h-5"
									alt="location icon"
								/>
								<p>
									{!data.location ? 'Not available' : data.location}
								</p>
							</div>
							<div className="flex gap-3 items-start">
								<img
									src={twitter}
									className="h-5"
									alt="twitter icon"
								/>
								<p>
									{!data.twitter_username
										? 'Not available'
										: data.twitter_username}
								</p>
							</div>
							<div className="flex gap-4 items-start">
								<img
									src={website}
									className="h-5"
									alt="website icon"
								/>
								<p>{!data.blog ? 'Not available' : data.blog}</p>
							</div>
							<div className="flex gap-4 items-start">
								<img
									src={company}
									className="h-5"
									alt="company icon"
								/>
								<p>
									{!data.company ? 'Not available' : data.company}
								</p>
							</div>
						</div>
					</div>
				</>
			)}
		</section>
	);
}
