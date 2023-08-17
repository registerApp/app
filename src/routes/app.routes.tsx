import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
	GlobalImpacto,
	Home,
	MoneyUp,
	RegisterMoneyCare,
	Withdraw,
	WithdrawMoneyCare,
} from '../pages';

export function AppRoutes() {
	return (
		<BrowserRouter basename={import.meta.env.DEV ? '/' : '/app/'}>
			<Routes>
				<Route path="" element={<Home />} />
				<Route path="/" element={<Home />} />
				<Route path="/global-impacto" element={<GlobalImpacto />} />
				<Route path="/financa-brasil" element={<Home />} />
				<Route path="/moneyup" element={<MoneyUp />} />
				<Route path="/moneycare" element={<RegisterMoneyCare />} />
				<Route path="/withdraw-financabrasil" element={<Withdraw />} />
				<Route path="/withdraw-moneycare" element={<WithdrawMoneyCare />} />
			</Routes>
		</BrowserRouter>
	);
}
