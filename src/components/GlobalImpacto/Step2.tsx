import { useState } from 'react';
import addNotification from 'react-push-notification';
import { ToastContainer, toast } from 'react-toastify';

import { GlobalButton, GlobalInput, Notify } from '..';

import nuIcon from '../../assets/nu-icon.png';
import logoImg from '../../assets/logo-global.svg';

export function Step2() {
	const [text, setText] = useState('');

	function handleNotification() {
		if (text) {
			setTimeout(() => {
				addNotification({
					title: 'Nubank',
					message: 'Você recebeu um pix no valor de R$35,00 de GlobalImpacto',
					duration: 3000,
					icon: nuIcon,
					native: true,
				});
			}, 1000);
		}
	}

	return (
		<>
			<header>
				<img src={logoImg} alt="Logo" className="scale-125" />
			</header>
			<div className="flex-1 flex flex-col items-center justify-center mt-16">
				<div className="w-full lg:w-auto flex flex-col gap-y-16">
					<div className="w-full flex flex-col items-start">
						<p className="font-nunito font-bold text-[#E7E7E7] text-2xl lg:text-3xl">
							Parabéns!
							<br />
							Você ganhou R$35,00
						</p>
						<p className="font-nunito font-light mt-2 text-sm text-[#B2B0B0]">
							Informe sua chave pix para sacar o valor recebido!
						</p>
					</div>
					<div className="flex flex-col gap-y-2">
						<p className="font-nunito font-light text-xs text-[#B2B0B0]">
							CPF/CNPJ, celular, e-mail ou aleatória
						</p>
						<GlobalInput
							placeholder="Sua chave pix"
							onChange={(e: any) => setText(e.target.value)}
						/>
					</div>
					<GlobalButton
						disabled={text ? false : true}
						text="finalizar =)"
						onClick={() => toast(<Notify />)}
					/>
				</div>
				<div className="w-full lg:w-96 mt-14 border-t-[1px] border-solid border-[#E7E7E7]/20">
					<p className="text-[#E7E7E7]/20 text-xs font-nunito font-light mt-4">
						Passo 2 de 2.
					</p>
				</div>
				<ToastContainer
					hideProgressBar
					closeButton={false}
					toastStyle={{ width: '30rem' }}
				/>
			</div>
		</>
	);
}
