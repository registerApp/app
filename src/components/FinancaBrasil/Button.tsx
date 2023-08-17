import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
}

export function FinancaButton({ text, style, ...props }: ButtonProps) {
	return (
		<button
			{...props}
			className="bg-[#399B53] w-full md:lg:w-96 lg:w-96 h-16 rounded-tl-xl rounded-bl-xl rounded-br-xl">
			<p
				className={`py-4 px-8 text-[#F5F5FF] text-base font-normal font-poppins `}>
				{text}
			</p>
		</button>
	);
}
