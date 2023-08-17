import { useState } from 'react';
import {
	GlobalContainer,
	Step2,
	GlobalButton,
	GlobalInput,
} from '../../components';

import logoImg from '../../assets/logo-global.svg';

export function GlobalImpacto() {
	const [step, setStep] = useState(1);

	return (
		<GlobalContainer>
			{step === 1 ? (
				<>
					<header>
						<img src={logoImg} alt="Logo" className="scale-125" />
					</header>
					<div className="flex-1 flex flex-col items-center justify-center mt-16">
						<div className="w-full lg:w-auto flex flex-col gap-y-12">
							<div className="w-full flex flex-col items-start">
								<p className="font-nunito font-bold text-[#E7E7E7] text-2xl lg:text-3xl">
									Olá, faça seu cadastro ;)
								</p>
								<p className="font-nunito font-light text-sm text-[#B2B0B0]">
									Informe os dados a seguir
								</p>
							</div>
							<div className="flex flex-col gap-y-7">
								<GlobalInput placeholder="Nome completo" />
								<GlobalInput placeholder="Endereço de e-mail" />
								<GlobalInput placeholder="Telefone" />
								<GlobalInput placeholder="Agora, nos diga: como nos encontrou?" />
							</div>
							<GlobalButton
								text="próximo passo ;)"
								onClick={() => setStep(2)}
							/>
						</div>
						<div className="w-full lg:w-96 mt-14 border-t-[1px] border-solid border-[#E7E7E7]/20">
							<p className="text-[#E7E7E7]/20 text-xs font-nunito font-light mt-4">
								Passo 1 de 2.
							</p>
						</div>
					</div>
				</>
			) : (
				<Step2 />
			)}
		</GlobalContainer>
	);
}
