import { Link } from 'react-router-dom';

import {
	FinancaButton,
	FinancaContainer,
	FinancaInput,
} from '../../components';

import logoImg from '../../assets/logo-financa.svg';

export function Home() {
	return (
		<FinancaContainer flex>
			<div className="h-auto w-full p-10 lg:flex-[3] flex flex-col lg:flex-row items-center justify-center">
				<img src={logoImg} alt="Logo" className="lg:scale-125" />
				<p className="mt-8 inline lg:hidden font-poppins font-light text-[#F5F5FF]/60 text-base text-center">
					Por favor, entre com seu nome, e-mail,
					<br /> e telefone para fazer o cadastro.
				</p>
			</div>
			<div className="w-full h-full px-10 lg:px-0 lg:flex-[2] lg:h-full bg-[#F5F5FF] rounded-tl-[75px] flex lg:items-center justify-center py-10">
				<div className="h-auto w-full lg:w-96 ">
					<p className="hidden lg:inline font-poppins font-light text-[#f5f5ff]/60 text-base text-center">
						Por favor, entre com seu nome, e-mail,
						<br /> e telefone para fazer o cadastro.
					</p>
					<div className="flex flex-col gap-y-6 my-10">
						<FinancaInput
							title="Seu nome"
							type="name"
							placeholder="ex: John Doe"
						/>
						<FinancaInput
							title="Seu endereço de e-mail"
							type="email"
							placeholder="ex: email@email.com"
						/>
						<FinancaInput
							title="Seu telefone"
							type="telefone"
							placeholder="ex: (xx)xxxxx-xxxx"
						/>
						<FinancaInput
							title="Como nos conheceu?"
							type="option"
							placeholder="ex: Conheci através de..."
						/>
					</div>
					<Link to="/withdraw-financabrasil">
						<FinancaButton text="prosseguir" />
					</Link>
				</div>
			</div>
		</FinancaContainer>
	);
}
