import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
}

export function MoneyCareButton({ text, style, ...props }: ButtonProps) {
	return (
		<button {...props} className="bg-[#399B53] rounded-full w-full h-16">
			<p
				className={`py-4 px-8 text-[#ffffff] text-base lg:text-xl font-ropasans`}>
				{text}
			</p>
		</button>
	);
}
