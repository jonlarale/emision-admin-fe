import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface MiniCardProps {
  children?: React.ReactNode;
  title: string;
  description: string;
}

export default function MiniCard({
  children,
  title,
  description,
}: MiniCardProps) {
  return (
    <Card className="flex flex-col justify-center items-center text-center h-[200px] w-full ">
      <CardHeader>
        <CardTitle>
          <h4 className="text-xl font-bold">{title}</h4>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h4 className="text-xl font-bold">{description}</h4>
      </CardContent>
      <CardFooter>{children}</CardFooter>
    </Card>
  );
}
