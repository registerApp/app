interface ContainerProps {
	children: React.ReactNode;
	flex?: boolean;
}

export function MoneyCareContainer({ children, flex }: ContainerProps) {
	return (
		<div
			className={`h-full w-full overflow-x-hidden bg-moneycare bg-no-repeat bg-cover py-10 px-6 md:px-16 lg:px-24 ${
				flex && 'flex gap-x-36 items-center md:flex-row lg:flex-row'
			}`}>
			{children}
		</div>
	);
}
