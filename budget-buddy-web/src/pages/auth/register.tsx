import RegisterFooter from "@/components/auth/register/footer";
import RegisterForm from "@/components/auth/register/form";
import RegisterHeader from "@/components/auth/register/header";
import AuthLayout from "@/layouts/AuthLayout";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <RegisterHeader />
      <RegisterForm />
      <RegisterFooter />
    </AuthLayout>
  )
}