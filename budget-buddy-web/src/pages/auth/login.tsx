import AuthLayout from "@/layouts/AuthLayout";
import LoginFooter from "@/components/auth/login/footer";
import LoginForm from "@/components/auth/login/form";
import LoginHeader from "@/components/auth/login/header";

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginHeader />
      <LoginForm />
      <LoginFooter />
    </AuthLayout>
  )
}