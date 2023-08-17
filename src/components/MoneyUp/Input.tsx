import { useState, HTMLAttributes } from 'react';

interface TextInputProps
	extends HTMLAttributes<HTMLDivElement | HTMLInputElement> {
	placeholder?: string;
	text?: string;
	textLg?: string;
}

export function TextInput({
	placeholder,
	text,
	textLg,
	...props
}: TextInputProps) {
	const [hidden, setHidden] = useState(true);

	return (
		<div
			className={`w-full h-16 flex bg-[#1E1F24] rounded-xl overflow-hidden border-none focus-within:border-[#40CF71] focus-within:border-2 focus-within:border-solid`}>
			<input
				{...props}
				placeholder={placeholder}
				className={`
				flex-1 w-full outline-none px-8 bg-[#1E1F24] text-[#B3B0B8] ${
					text && textLg
						? `text-${text} md:text-${textLg} lg:text-${textLg}`
						: 'text-xs md:text-base lg:text-base'
				} font-regular focus:text-white font-poppins
				`}
			/>
		</div>
	);
}
