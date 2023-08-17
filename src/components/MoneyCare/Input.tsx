import { HTMLAttributes, useState } from 'react';
import {
	UserCircle,
	EnvelopeSimple,
	Phone,
	TextAlignCenter,
	Key,
} from 'phosphor-react';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
	placeholder?: string;
	type: string;
}

export function MoneyCareInput({ type, placeholder, ...props }: InputProps) {
	const [color, setColor] = useState('#ABABAB');

	function handleOnFocus() {
		setColor('#61A385');
	}
	function handleOnBlur() {
		setColor('#ABABAB');
	}

	return (
		<div>
			<div className="w-full h-16 flex items-center justify-center pl-5 border-b-2 border-[#ABABAB] focus-within:border-[#61A385] focus-within:border-b-2 focus-within:border-solid">
				{type === 'name' ? (
					<UserCircle weight="fill" fill={color} size={22} />
				) : type === 'email' ? (
					<EnvelopeSimple weight="fill" fill={color} size={22} />
				) : type === 'telefone' ? (
					<Phone weight="fill" fill={color} size={22} />
				) : type === 'text' ? (
					<TextAlignCenter weight="fill" fill={color} size={22} />
				) : (
					<Key weight="fill" fill={color} size={22} />
				)}

				<input
					{...props}
					placeholder={placeholder}
					className="h-full w-full bg-transparent outline-none px-5 font-poppins font-light text-sm text-[#ABABAB] focus-within:text-[#61A385]"
					onFocus={handleOnFocus}
					onBlur={handleOnBlur}
				/>
			</div>
		</div>
	);
}
