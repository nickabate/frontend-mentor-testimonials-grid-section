import Constants from "@/constants";
import ReviewCard from "@/components/ReviewCard";

export default function Home() {
	return (
		<main className="min-h-screen bg-neutral-20 p-6">
			<section className="grid grid-cols-1 gap-4 laptop:gap-6 laptop:grid-cols-4 laptop:grid-rows-2 laptop:max-w-[980px] laptop:mx-auto my-8 laptop:my-[90px]">
				{Constants.testimonials.map((testimonial, index) => {
					return (
						<ReviewCard
							key={`${index + 1}`}
							review={testimonial}
							backgroundColor={Constants.backgroundColorMap[index]}
							gridConfig={Constants.gridConfig[index]}
						/>
					);
				})}
			</section>
		</main>
	);
}
