import { CurrencyCircleDollar } from 'phosphor-react';

export function Notify() {
	return (
		<div
			style={{
				height: '100%',
				width: '600px',
				borderLeft: '5px solid green',
				display: 'flex',
				alignItems: 'center',
				gap: 10,
			}}>
			<CurrencyCircleDollar
				size={30}
				weight="fill"
				fill="#026B3B"
				className="ml-4"
			/>
			Seu dinheiro já está com você! =)
		</div>
	);
}
