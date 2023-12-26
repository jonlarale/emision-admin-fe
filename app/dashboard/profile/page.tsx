import { Separator } from "@/components/ui/separator";
import { ProfileForm } from "@/components/dashboard/profile/profile-form";

export default function Profile() {
  return (
    <div className="container py-4 md:py-8">
      <div className="flex gap-4 justify-between">
        <h1 className="text-4xl font-bold">Perfil</h1>
      </div>
      <div className="space-y-6">
        <div>
          <p className="text-sm text-muted-foreground">
            Aquí podrás actualizar tu información personal.
          </p>
        </div>
        <Separator />
        <ProfileForm />
      </div>
    </div>
  );
}
