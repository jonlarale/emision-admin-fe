"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import Button from "@/components/custom-ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const profileFormSchema = z.object({
  phoneNumber: z
    .string()
    .min(10, { message: "Por favor introdore un número de teléfono válido." }),
  email: z
    .string({
      required_error: "Por favor introdore un correo electrónico válido.",
    })
    .email("Por favor introdore un correo electrónico válido."),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// This come from the API
const defaultValues: Partial<ProfileFormValues> = {
  phoneNumber: "1234567890",
  email: "john.doe@example.com",
};

export function ProfileForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: "Tus datos se han actualizado exitosamente :D",
      description: (
        <div className="flex flex-col gap-2 mt-2 w-[340px] rounded-md p-4">
          <span>Teléfono: {data.phoneNumber}</span>
          <span>Correo: {data.email}</span>
        </div>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número telefónico</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                Este número permitirá configurar tu proceso de verificación.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="email" {...field} />
              <FormDescription>
                En este correo recibirás notificaciones de la plataforma y te
                permitirá verficar tu cuenta.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Actualizar información</Button>
      </form>
    </Form>
  );
}
