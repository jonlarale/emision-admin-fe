"use client";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Mail } from "lucide-react";
import { useState, ChangeEvent, SyntheticEvent, useEffect } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
//import Button from "@/components/custom-ui/button";

export default function ForgotPasswordForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const accessToken = localStorage.getItem("access_token");

  /* useEffect(() => {
    const fetchData = async () => {
      if(!accessToken) {
        router.push("/")
        return;
      }
    };

    fetchData();
  }, []);  */

  const validateEmail = (emailValue: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue) {
      setEmailError("El correo electrónico es obligatorio");
      return false;
    } else if (!emailRegex.test(emailValue)) {
      setEmailError("El correo electrónico no es válido");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    if (id === "email") {
      setEmail(value);
      validateEmail(value);
    }
  };

  const recoverPassword = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!validateEmail(email)) return;
    setLoading(true);
    router.push("/auth/login");
    setLoading(false);
  };

  return (
    <form noValidate>
      <Link
        className="text-start text-sm text-blue-500 hover:underline"
        href="/auth/login"
      >
        <KeyboardArrowLeftIcon className="mr-1" />
        Volver
      </Link>
      <h2 className="text-2xl font-bold mb-8 mt-4">
        Escribe tu correo electrónico
      </h2>
      <div className="flex justify-center mb-4">
        <Mail className="animate-bounce" size={64} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="example@blumonpay.com.mx"
            value={email}
            onChange={handleChange}
          />
          {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
        </div>
        <div className="flex mt-8">
          <Button
            className="w-full"
            onClick={recoverPassword}
            disabled={loading || emailError}
          >
            {loading ? <> Cargando... </> : "Restablecer contraseña"}
          </Button>
        </div>
        <div className="flex gap-2 text-sm justify-center">
          ¿Tienes problemas?{" "}
          <Link
            href="/support"
            className="text-end text-sm text-blue-500 hover:underline"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </form>
  );
}
