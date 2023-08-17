import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
}

export function Button({ text, ...props }: ButtonProps) {
	return (
		<button
			{...props}
			className={
				'w-full h-16 rounded-xl bg-[#40CF71] flex items-center justify-center cursor-pointer hover:opacity-80 shadow-button'
			}>
			<p className="text-white font-poppins text-xs md:text-base lg:text-base font-regular">
				{text}
			</p>
		</button>
	);
}
