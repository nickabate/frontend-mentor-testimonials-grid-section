import Image from "next/image";

type ReviewCardProps = {
	review: {
		name: string;
		title: string;
		callout: string;
		quote: string;
		image: string;
	};
	backgroundColor: string;
	backgroundImage?: string;
	imageBorder?: string;
	gridConfig: {
		user: string;
		colStart: string;
		rowStart: string;
		span: string;
	};
};

const ReviewCard = ({
	review,
	backgroundColor,
	backgroundImage,
	// imageBorder,
	gridConfig,
}: ReviewCardProps) => {
	const { callout, name, quote, title, image } = review;
	const { colStart, rowStart, span } = gridConfig;

	const secondaryFont = backgroundColor === "bg-white" ? "text-primary-20" : "";

	const imageBorder =
		backgroundColor === "bg-primary-30"
			? "border-primary-10"
			: "border-white/50";
	return (
		<div
			className={`${
				backgroundImage ? backgroundImage : ""
			} bg-no-repeat bg-[top_right_1rem] ${backgroundColor} rounded-lg ${colStart} ${rowStart} ${span} shadow-xl`}
		>
			<div className={`p-6 md:p-8 flex flex-col gap-4 ${secondaryFont}`}>
				<div className="flex gap-4">
					<div className="w-10 h-10">
						<Image
							src={image}
							alt="user-photo"
							width={40}
							height={40}
							className={`rounded-full border-2 ${imageBorder}`}
						/>
					</div>
					<div>
						<h3 className="font-semibold">{name}</h3>
						<h4
							className={`${
								secondaryFont ? "text-primary-20/50" : "text-white/50"
							}`}
						>
							{title}
						</h4>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<p className="font-semibold text-lg">{callout}</p>
					<p
						className={`${
							secondaryFont ? "text-primary-20/70" : "text-white/70"
						}`}
					>
						" {quote} "
					</p>
				</div>
			</div>
		</div>
	);
};

export default ReviewCard;
