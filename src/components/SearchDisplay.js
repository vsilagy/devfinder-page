import Moment from 'moment';
import location from '../assets/icon-location.svg';
import twitter from '../assets/icon-twitter.svg';
import website from '../assets/icon-website.svg';
import company from '../assets/icon-company.svg';

export default function ResultsCard(props) {
	let date = Moment(props.data.created_at).format('D MMM YYYY');

	return (
		<section className="max-w-xl mx-auto p-4 rounded-xl shadow-lg bg-white dark:bg-darkSaturatedBlue md:p-8 md:max-w-3xl">
			<div className="flex justify-start gap-8 mb-8 p-2 md:p-4">
				<img
					src={props.data.avatar_url}
					className="h-28 w-28 rounded-full md:h-36 md:w-36"
				/>
				<div className="flex flex-col gap-4  md:flex-row md:justify-between md:flex-1">
					<div>
						<h2 className="text-2xl font-bold mb-1 md:text-3xl">
							{props.data.name}
						</h2>
						<h3 className="text-sm text-blueish md:text-base">
							@{props.data.login}
						</h3>
					</div>
					<p className="text-sm md:text-base ">Joined {date}</p>
				</div>
			</div>
			<div className="ml-0 md:ml-44">
				<p className="mx-2 my-6 dark:text-white md:mx-4 md:-mt-24">
					{!props.data.bio ? 'No bio provided' : props.data.bio}
				</p>
				<div className="grid grid-cols-3 gap-2 mx-2 my-4 px-4 py-4 text-sm rounded-xl bg-saturatedWhite  dark:bg-veryDarkBlue md:text-base md:gap-4 md:mx-4 md:my-8 md:px-8">
					<p>Repos</p>
					<p>Followers</p>
					<p>Following</p>
					<p className="font-bold">{props.data.public_repos}</p>
					<p className="font-bold">{props.data.followers}</p>
					<p className="font-bold">{props.data.following}</p>
				</div>

				<div className="grid grid-cols-1 gap-4 mx-2 text-sm md:grid-cols-2 md:gap-6 md:mx-4 md:text-base">
					<div className="flex gap-5 items-start">
						<img src={location} className="h-5" alt="location icon" />
						<p>
							{!props.data.location
								? 'Not available'
								: props.data.location}
						</p>
					</div>
					<div className="flex gap-3 items-start">
						<img src={twitter} className="h-5" alt="twitter icon" />
						<p>
							{!props.data.twitter_username
								? 'Not available'
								: props.data.twitter_username}
						</p>
					</div>
					<div className="flex gap-4 items-start">
						<img src={website} className="h-5" alt="website icon" />
						<p>
							{!props.data.blog ? 'Not available' : props.data.blog}
						</p>
					</div>
					<div className="flex gap-4 items-start">
						<img src={company} className="h-5" alt="company icon" />
						<p>
							{!props.data.company
								? 'Not available'
								: props.data.company}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
