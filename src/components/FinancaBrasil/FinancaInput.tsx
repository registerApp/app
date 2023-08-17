import { HTMLAttributes } from 'react';
import { User, Envelope, Phone, ChatTeardropText, Key } from 'phosphor-react';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
	placeholder?: string;
	title: string;
	type: string;
	reverse?: boolean;
}

export function FinancaInput({
	title,
	type,
	placeholder,
	reverse,
	...props
}: InputProps) {
	return (
		<div>
			<p
				className={`font-poppins font-medium text-sm mb-2 ${
					(reverse && 'text-[#f5f5ff]') || 'text-[#181824] '
				}`}>
				{title}
			</p>
			<div className="w-full md:lg:w-96 lg:w-96 h-16 flex items-center justify-center pl-5 bg-[#F5F5FF] rounded-tl-xl rounded-bl-xl rounded-br-xl shadow-input">
				{type === 'name' ? (
					<User weight="fill" fill="#181824" size={22} />
				) : type === 'email' ? (
					<Envelope weight="fill" fill="#181824" size={22} />
				) : type === 'telefone' ? (
					<Phone weight="fill" fill="#181824" size={22} />
				) : type === 'option' ? (
					<ChatTeardropText weight="fill" fill="#181824" size={22} />
				) : (
					<Key weight="fill" fill="#181824" size={22} />
				)}

				<input
					{...props}
					placeholder={placeholder}
					className="h-full w-full bg-transparent outline-none px-5 font-poppins font-light text-sm text-[#181824]/60"
				/>
			</div>
		</div>
	);
}
