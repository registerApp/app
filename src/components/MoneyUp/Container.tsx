interface ContainerProps {
	children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
	return (
		<div
			className="h-full w-full overflow-x-hidden
				flex flex-col items-center bg-black py-10 px-10 lg:px-36">
			{children}
		</div>
	);
}
