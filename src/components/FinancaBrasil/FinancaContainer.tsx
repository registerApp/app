interface ContainerProps {
	children: React.ReactNode;
	flex?: boolean;
	reverse?: boolean;
}

export function FinancaContainer({ children, flex, reverse }: ContainerProps) {
	return (
		<div
			className={`h-full w-full overflow-x-hidden ${
				(reverse && 'bg-[#f5f5ff]') || 'bg-[#001F4A]'
			} ${flex && 'flex items-center flex-col lg:flex-row'}`}>
			{children}
		</div>
	);
}
