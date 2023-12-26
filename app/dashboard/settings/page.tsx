import { Separator } from "@/components/ui/separator";

export default function Profile() {
  return (
    <div className="container py-4 md:py-8">
      <div className="flex gap-4 justify-between">
        <h1 className="text-4xl font-bold">Configuración</h1>
      </div>
      <div className="space-y-6">
        <div>
          <p className="text-sm text-muted-foreground">
            Aquí podrás actualizar la información de BlumonPay
          </p>
        </div>
        <Separator />
      </div>
    </div>
  );
}
