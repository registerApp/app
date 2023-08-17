import { useState } from 'react';
import addNotification from 'react-push-notification';

import {
	MoneyCareButton,
	MoneyCareContainer,
	MoneyCareInput,
} from '../../components';

import nuIcon from '../../assets/nu-icon.png';
import logoImg from '../../assets/logo-moneycare.svg';

export function WithdrawMoneyCare() {
	const [text, setText] = useState('');

	function handleNotification() {
		if (text) {
			setTimeout(() => {
				addNotification({
					title: 'Nubank',
					message: 'Você recebeu um pix no valor de R$50,00 de MoneyCare',
					duration: 3000,
					icon: nuIcon,
					native: true,
				});
			}, 1000);
		}
	}

	return (
		<MoneyCareContainer>
			<header>
				<img src={logoImg} alt="Logo" />
			</header>
			<div className="flex-1 flex justify-center mt-5">
				<div className="w-full md:w-96 lg:w-[27rem] flex flex-col gap-y-10">
					<p className="font-ropasans text-center text-3xl lg:text-4xl text-[#026B3B]">
						PARABÉNS!
						<br />
						VOCÊ GANHOU R$50,00!
					</p>
					<div className="w-full md:w-96 lg:w-[27rem] flex flex-col gap-y-5 p-10 bg-white rounded-3xl">
						<MoneyCareInput
							placeholder="E-mail, CPF/CNPJ, Telefone ou aleatória"
							type="key"
							onChange={(e: any) => setText(e.target.value)}
						/>
					</div>
					<MoneyCareButton text="RECEBER PIX" onClick={handleNotification} />
				</div>
			</div>
		</MoneyCareContainer>
	);
}
