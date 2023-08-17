import { IdentificationCard, Envelope, QrCode, Phone } from 'phosphor-react';
import { HTMLAttributes, useEffect } from 'react';

interface PixKeyItemProps extends HTMLAttributes<HTMLDivElement> {
	type: string;
	selected: boolean;
}

export function PixKeyItem({ type, selected, ...props }: PixKeyItemProps) {
	const types = [
		{
			name: 'CPF/CNPJ',
			icon: IdentificationCard,
			type: 'cpf',
		},
		{
			name: 'E-MAIL',
			icon: Envelope,
			type: 'email',
		},
		{
			name: 'TELEFONE',
			icon: Phone,
			type: 'telefone',
		},
		{
			name: 'ALEATÓRIO',
			icon: QrCode,
			type: 'aleatorio',
		},
	];

	return types.map((item, index) => {
		if (item.type === type) {
			return (
				<div
					key={index}
					{...props}
					className={`w-full cursor-pointer rounded-xl bg-[#1E1F24] p-4 flex flex-col items-center justify-center gap-y-2 ${
						selected && 'border-[#40CF71] border-2 border-solid'
					}`}>
					<item.icon className="text-white/50" size={30} />
					<p className="text-white font-poppins font-light text-sm">
						{item.name}
					</p>
				</div>
			);
		}
	});
}
