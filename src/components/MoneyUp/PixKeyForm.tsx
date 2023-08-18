import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import addNotification from 'react-push-notification';
import { ToastContainer, toast } from 'react-toastify';

import { Button, PixKeyItem, TextInput } from '.';

import nuIcon from '../../assets/nu-icon.png';
import { Notify } from '..';

interface CustomerFormProps {
	open?: boolean;
	setOpen?: (open: boolean) => void;
}

export function PixKeyForm({ open, setOpen }: CustomerFormProps) {
	const [selected1, setSelected1] = useState(false);
	const [selected2, setSelected2] = useState(false);
	const [selected3, setSelected3] = useState(false);
	const [selected4, setSelected4] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [text, setText] = useState('Finalizar');

	function handlePixKeyItem1() {
		setSelected1(!selected1);
		setSelected2(false);
		setSelected3(false);
		setSelected4(false);
	}
	function handlePixKeyItem2() {
		setSelected1(false);
		setSelected2(!selected2);
		setSelected3(false);
		setSelected4(false);
	}
	function handlePixKeyItem3() {
		setSelected1(false);
		setSelected2(false);
		setSelected3(!selected3);
		setSelected4(false);
	}
	function handlePixKeyItem4() {
		setSelected1(false);
		setSelected2(false);
		setSelected3(false);
		setSelected4(!selected4);
	}

	function handleNotification() {
		addNotification({
			title: 'Nubank',
			message: 'Você recebeu um pix no valor de R$20,00 de MoneyUp',
			duration: 4000,
			icon: nuIcon,
			native: true,
		});
	}

	function handleFinish() {
		if (selected1 || selected2 || selected3 || selected4) {
			setTimeout(() => {
				setText('PROCESSANDO...');
				setDisabled(true);
				setText('Pagamento enviado com sucesso');
				toast(<Notify value="20,00" bank="santander" site="MoneyUp" />);
			}, 2000);
		}
	}

	const keys = [
		{
			type: 'cpf',
			selected: selected1,
			onClick: handlePixKeyItem1,
		},
		{
			type: 'email',
			selected: selected2,
			onClick: handlePixKeyItem2,
		},
		{
			type: 'telefone',
			selected: selected3,
			onClick: handlePixKeyItem3,
		},
		{
			type: 'aleatorio',
			selected: selected4,
			onClick: handlePixKeyItem4,
		},
	];

	return (
		<Dialog.Root open={open} onOpenChange={setOpen} defaultOpen={false}>
			<Dialog.Portal className="block">
				<Dialog.Overlay className="bg-black/60 inset-0 fixed overflow-y-auto grid place-items-center p-8">
					<Dialog.Content className="bg-[#101114] text-black p-8 w-[90%] sm:2/3 md:w-3/5 lg:w-1/3 h-auto shadow-lg shadow-black/25 rounded-xl">
						<Dialog.Title className="sm:text-base md:text-xl lg:text-2xl text-white font-medium">
							<div className="flex flex-col mb-8 gap-y-1">
								<p className="font-poppins text-white text-2xl font-medium text-left">
									Você ganhou R$20,00!
								</p>
								<p className="font-poppins text-[#B2B0B0] text-xs font-light text-left">
									Informe sua chave Pix para sacar o valor
								</p>
							</div>
						</Dialog.Title>

						<div>
							<p className="font-poppins font-light text-white/70 text-xs mb-2">
								Selecione o tipo de chave:
							</p>
							<div className="w-full inline-grid grid-cols-2 grid-rows-2 gap-5">
								{keys.map((item, index) => {
									return (
										<PixKeyItem
											type={item.type}
											selected={item.selected}
											onClick={item.onClick}
											key={index}
										/>
									);
								})}
							</div>
						</div>

						<div className="mt-10">
							<TextInput
								placeholder="Digite a chave pix"
								text="[10px]"
								textLg="sm"
							/>
							<p className="font-poppins font-light text-white/70 text-xs mt-2">
								Valor: R$20,00
							</p>
						</div>

						<footer className="mt-7 flex justify-end flex-col md:flex-row lg:flex-row gap-y-6 md:gap-x-6 lg:gap-x-6">
							<Button
								type="submit"
								text={text}
								onClick={handleFinish}
								disabled={disabled}
							/>
						</footer>

						<ToastContainer
							hideProgressBar
							closeButton={false}
							toastStyle={{ backgroundColor: 'transparent', boxShadow: 'none' }}
						/>
					</Dialog.Content>
				</Dialog.Overlay>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

export const DialogPrimitive = Dialog.Root;
export const DialogTrigger = Dialog.Trigger;
