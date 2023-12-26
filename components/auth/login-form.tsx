"use client";

import GoogleIcon from "@mui/icons-material/Google";

import Link from "next/link";
//import axios from "axios"

import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { useCustomization } from "@/components/theme/CustomizationContext";
import { ChangeEvent, SyntheticEvent, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();

  const { primaryColor } = useCustomization();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState("");

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

  const handleGoogleLogin = async () => {
    setLoading(true);

    try {
      // aquí va el inicio de sesión con Google
      //load
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    } finally {
      setLoading(false);
    }
  };

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

  const validatePassword = (passwordValue: string) => {
    if (!passwordValue) {
      setPasswordError("La contraseña es obligatoria.");
      return false;
    } else if (passwordValue.length < 6) {
      setPasswordError("La contraseña debe tener al menos 6 caracteres.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  async function login(event: SyntheticEvent) {
    event.preventDefault();
    if (!validateEmail(email) || !validatePassword(password)) return;
    setLoading(true);

    /* const url = `${process.env.NEXT_PUBLIC_API_AUTH}/login`;
    if(url) {
      try {
        // consumo de API para inciar sesión
        const response = await axios.post(url, data, {headers});

        console.log(response.data)  

        if (response.status === 200) {
          localStorage.setItem("access_token", response.data.access_token);
          router.push("/");
          return;
        } else {
          toast({
            title: "Error",
            description: response.data.message,
            variant: "destructive",
          });
        }
        // ir a pagina de inicio cuando el login este correcto
        router.push("/")
      } catch (error) {
        alert("Error al inciiar sesión: ")
        console.error(error);
      } finally {
        setLoading(false);
      }
    } */

    localStorage.setItem("access_token", "token-login");
    router.push("/");
    setLoading(false);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    if (id === "email") {
      setEmail(value);
      validateEmail(value);
    } else if (id === "password") {
      setPassword(value);
      validatePassword(value);
    }
  };

  return (
    <form noValidate>
      <h2 className="text-2xl font-bold mb-8">Iniciar sesión</h2>
      {/* <div className="flex flex-col justify-center">
        <Button
          variant="outline"
          style={{ borderColor: primaryColor }}
          className="w-full mb-4"
          onClick={handleGoogleLogin}
          disabled={loading}>
            <GoogleIcon className="mr-2" />
            {loading ? "Cargando..." : "Inicia sesión con Google"}
        </Button>
      </div>
      <Separator className="my-4" /> */}
      <div className="flex flex-col gap-4">
        {/* <h6 className="text-center">O inicia sesión con tu correo</h6> */}
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
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            autoComplete="current-password"
            disabled={loading}
            value={password}
            onChange={handleChange}
          />
          {passwordError && (
            <p className="text-red-500 text-xs">{passwordError}</p>
          )}
          <Link
            href="/auth/forgot-password"
            className="text-end text-sm text-blue-500 hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <div className="flex mt-8">
          <Button
            style={{ backgroundColor: primaryColor }}
            className="w-full"
            onClick={login}
            disabled={loading || emailError || passwordError}
          >
            {loading ? <> Cargando... </> : "Iniciar sesión"}
          </Button>
        </div>
      </div>
    </form>
  );
}
