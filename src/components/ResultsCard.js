export default function ResultsCard() {
	return (
		<section className="max-w-xl mx-auto rounded-lg shadow-lg bg-white dark:bg-darkSaturatedBlue md:max-w-2xl">
			<div className="flex justify-start gap-8 p-12">
				<h6 className="h-36 w-36  bg-red-500 rounded-full">
					Pic holder
				</h6>
				<div className="flex flex-col justify-start">
					<h2 className="text-3xl font-bold mb-1">name</h2>
					<h4 className="text-blueish mb-2">@username</h4>
					<p className="pt-4">bio</p>
				</div>
				<p className="text-lg ml-auto mb-4 ">joined</p>
			</div>
			{/* <div className=" p-4 dark:bg-veryDarkBlue">
				<p>
					<span>repos</span>
					<span>followers</span>
					<span>following</span>
				</p>
			</div> */}
		</section>
	);
}
