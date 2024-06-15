import { Route, Routes } from "react-router-dom";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import DashboardPage from "@/pages/dashboard";
import StatisticsPage from "@/pages/statistics";
import AccountPage from "@/pages/account";
import TransactionsPage from "@/pages/transactions";
import StatisticsPagetest from "./pages/statistics-test";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/transactions" element={<TransactionsPage />} />
      <Route path="/statistics" element={<StatisticsPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/statistics-test"  element={<StatisticsPagetest />} />
      <Route path="/auth">
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  )
}