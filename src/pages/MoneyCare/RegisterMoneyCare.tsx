import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import addNotification from 'react-push-notification';

import {
	MoneyCareButton,
	MoneyCareContainer,
	MoneyCareInput,
} from '../../components';

import nuIcon from '../../assets/nu-icon.png';
import logoImg from '../../assets/logo-moneycare.svg';

export function RegisterMoneyCare() {
	const [text, setText] = useState('');
	const [captcha, setCaptcha] = useState<string | null>('');

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
						CADASTRO
					</p>
					<div className="w-full md:w-96 lg:w-[27rem] flex flex-col gap-y-5 p-10 bg-white rounded-3xl">
						<MoneyCareInput placeholder="Insira seu nome" type="name" />
						<MoneyCareInput
							placeholder="Insira seu endereço de e-mail"
							type="email"
						/>
						<MoneyCareInput placeholder="(xx)xxxxx-xxxx" type="telefone" />
						<MoneyCareInput
							placeholder="Como você nos encontrou?"
							type="text"
						/>
					</div>
					{/* <ReCAPTCHA
						sitekey="6Ldj37AnAAAAAI8vho7-a8xkhF2hH4plIrXP9Osq"
						onChange={setCaptcha}
						size="normal"
						theme="light"
					/> */}
					<Link to="/withdraw-moneycare">
						<MoneyCareButton text="PRÓXIMO" onClick={handleNotification} />
					</Link>
				</div>
			</div>
		</MoneyCareContainer>
	);
}
