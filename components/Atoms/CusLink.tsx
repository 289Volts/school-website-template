import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const CusLink = ({ path }: { path: string }) => {
	return (
		<div>
			<Link
				href={path}
				className="flex items-center gap-2.5  bg-primary-90 py-3 rounded-md md:rounded-lg shadow-potrude border-2 border-secondary-15 transition-shadow lg:hover:shadow-none duration-300 w-full"
			>
				<span className="md:text-lg 2xl:text-xl text-secondary-20">Learn More</span>{' '}
				<ArrowRightIcon className="h-3.5 aspect-square md:h-4 2xl:h-5 text-secondary-15" />
			</Link>
		</div>
	);
};

export default CusLink;
