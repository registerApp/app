import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import {
	Button,
	Container,
	PixKeyForm,
	DialogPrimitive,
	DialogTrigger,
	TextInput,
} from '../../components';

import logoImg from '../../assets/logo-moneyup.svg';

export function MoneyUp() {
	const [captcha, setCaptcha] = useState<string | null>('');
	const [open, setOpen] = useState(false);

	return (
		<Container>
			<header className="w-full flex items-center justify-center mb-6 md:mb-10 lg:mb-16">
				<img src={logoImg} alt="Logo" />
			</header>
			<div className="h-full w-full md:max-w-md lg:max-w-lg mb-20">
				<div className="flex flex-col mb-8">
					<p className="font-poppins text-white text-2xl font-medium text-center">
						Cadastro
					</p>
					<p className="font-poppins text-[#B2B0B0] text-xs font-light text-center">
						Preencha os dados abaixo
					</p>
				</div>
				<div className="flex flex-col gap-y-7 mb-12">
					<TextInput placeholder="Seu nome completo" />
					<TextInput placeholder="Seu endereço de e-mail" />
					<TextInput placeholder="Telefone" />
					<TextInput placeholder="Como nos encontrou?" />
				</div>
				<div className="mb-12">
					{/* <ReCAPTCHA
						sitekey="6Ldj37AnAAAAAI8vho7-a8xkhF2hH4plIrXP9Osq"
						onChange={setCaptcha}
						size="normal"
						theme="dark"
					/> */}
				</div>

				<DialogPrimitive>
					<DialogTrigger className="w-full md:max-w-md lg:max-w-lg mb-20">
						<Button
							text="Continuar"
							disabled={false}
							onClick={() => setOpen(true)}
						/>
						<PixKeyForm open={open} setOpen={setOpen} />
					</DialogTrigger>
				</DialogPrimitive>
			</div>
		</Container>
	);
}
