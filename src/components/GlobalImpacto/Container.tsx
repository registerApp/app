interface ContainerProps {
	children: React.ReactNode;
	flex?: boolean;
}

export function GlobalContainer({ children, flex }: ContainerProps) {
	return (
		<div
			className={`h-full w-full overflow-x-hidden bg-[#0A0911] py-10 px-6 md:px-16 lg:px-24 ${
				flex && 'flex gap-x-36 items-center md:flex-row lg:flex-row'
			}`}>
			{children}
		</div>
	);
}
