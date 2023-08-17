import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
}

export function GlobalButton({ text, style, ...props }: ButtonProps) {
	return (
		<button {...props} className="bg-[#E7E7E7] rounded-full w-full">
			<p
				className={`py-4 px-8 text-[#0A0911] text-base lg:text-lg font-normal font-nunito `}>
				{text}
			</p>
		</button>
	);
}
