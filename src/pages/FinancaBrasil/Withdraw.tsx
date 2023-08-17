import { useState } from 'react';
import addNotification from 'react-push-notification';

import {
	FinancaButton,
	FinancaContainer,
	FinancaInput,
} from '../../components';

import nuIcon from '../../assets/nu-icon.png';
import logoImg from '../../assets/logo-financa.svg';

export function Withdraw() {
	const [text, setText] = useState('');

	function handleNotification() {
		if (text) {
			setTimeout(() => {
				addNotification({
					title: 'Nubank',
					message: 'Você recebeu um pix no valor de R$15,00 de Finança Brasil',
					duration: 3000,
					icon: nuIcon,
					native: true,
				});
			}, 1000);
		}
	}

	return (
		<FinancaContainer flex reverse>
			<div className="w-full bg-[#001F4A] h-full px-10 lg:px-0 lg:flex-[2] lg:h-full lg:rounded-tr-[75px] flex lg:items-center justify-center py-10">
				<div className="h-auto w-full lg:w-96 flex flex-col items-center">
					<p className="font-poppins font-normal text-[#f5f5ff] text-3xl text-center mb-4">
						Você ganhou R$15,00
					</p>
					<p className="font-poppins font-light text-[#f5f5ff]/60 text-base text-center">
						Por favor, informe sua chave pix
						<br />
						para receber o valor obtido.
					</p>
					<div className="flex flex-col gap-y-6 my-10 w-full">
						<FinancaInput
							reverse
							title="CPF/CNPJ, e-mail, telefone ou chave aleatória"
							type="key"
							placeholder="ex: email@email.com"
							onChange={(e: any) => setText(e.target.value)}
						/>
					</div>
					<FinancaButton text="concluir" onClick={handleNotification} />
				</div>
			</div>
			<div className="hidden h-auto w-full bg-[#F5F5FF] p-10 lg:flex-[3] lg:flex flex-col lg:flex-row items-center justify-center">
				<img src={logoImg} alt="Logo" className="lg:scale-125" />
				<p className="mt-8 inline lg:hidden font-poppins font-light text-[#F5F5FF]/60 text-base text-center">
					Por favor, informe sua chave pix
					<br />
					para receber o valor obtido.
				</p>
			</div>
		</FinancaContainer>
	);
}
