import { CurrencyCircleDollar } from 'phosphor-react';

import nuIcon from '../assets/nu-icon.png';
import santanderIcon from '../assets/santander-icon.png';

interface NotifyProps {
	value: string;
	bank: string;
	site: string;
}

export function Notify({ bank, value, site }: NotifyProps) {
	return (
		<div className="h-full w-full lg:w-[600px] gap-4 backdrop-blur-md bg-white/30 p-3 flex rounded-3xl">
			<img
				src={bank === 'santander' ? santanderIcon : nuIcon}
				alt="Bank Icon"
				className="h-8 w-8 rounded-md"
			/>
			<div className="h-full w-2/3">
				<p className="text-black/90 font-inter font-bold">
					{bank === 'santander' ? 'SANTANDER' : 'NUBANK'}
				</p>
				<p className="text-black/95 font-medium">
					Você recebeu um pix no valor de R${value} de {site}
				</p>
			</div>
			<p className="text-black/75 font-medium">Agora</p>
		</div>
	);
}
