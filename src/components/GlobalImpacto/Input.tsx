import { HTMLAttributes } from 'react';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
	placeholder?: string;
}

export function GlobalInput({ ...props }: InputProps) {
	return (
		<div
			className={`h-[60px] w-full lg:w-96 rounded-full bg-[transparent] overflow-hidden border-2 focus:border-[]#E7E7E7] border-[#E7E7E7]/40`}>
			<input
				{...props}
				className={`flex-1 w-full py-4 px-8 bg-[transparent] focus:border-[#E7E7E7] focus:text-[#E7E7E7] text-[#E7E7E7]/40 text-base font-light font-inter outline-none`}
			/>
		</div>
	);
}
