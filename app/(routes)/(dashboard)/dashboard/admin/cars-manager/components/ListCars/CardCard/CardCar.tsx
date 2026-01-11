"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  Car,
  Edit,
  Fuel,
  Gauge,
  Gem,
  Loader2,
  Trash,
  Upload,
  Users,
} from "lucide-react";
import { IconEngine, IconManualGearbox } from "@tabler/icons-react";
import Image from "next/image";
import { CardCardProps } from "./CardCar.types";
import { ButtonEditCar } from "./ButtonEditCar";
import { useRouter } from "next/navigation";
import { ButtonDeleteCar } from "./ButtonDeleteCar";
import axios from "axios";
import { useState } from "react";

export function CardCar(props: CardCardProps) {
  const { car } = props;
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlePublishCar = async (publish: boolean) => {
    if (loading) return;

    setLoading(true);
    try {
      await axios.patch(`/api/car/${car.id}`, {
        isPublish: publish,
      });

      toast[publish ? "success" : "info"](
        publish ? "car published" : "car unpublished"
      );

      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative p-1 bg-white rounded-4xl shadow-sm hover:shadow-lg">
      <Image
        src={car.photo}
        alt={car.name}
        width={400}
        height={600}
        className="rounded-lg"
      />
      {car.isPublish ? (
        <p className="absolute top-0 right-0 w-full p-1 text-center text-white bg-green-500 rounded-t-4xl">
          Published
        </p>
      ) : (
        <p className="absolute top-0 left-0 right-0 w-full p-1 text-center text-white bg-destructive rounded-t-4xl">
          Not Published
        </p>
      )}
      <div className="relative p-3">
        <div className="flex flex-col mb-3 gap-x-4">
          <p className="text-xl min-h-16 lg:min-h-fit">{car.name}</p>
          <p>{car.priceDay}€/day</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <p className="flex items-center">
            <IconManualGearbox className="h-2-4 w-4 mr-2" strokeWidth={1} />
            {car.transmission}
          </p>

          <p className="flex items-center">
            <Users className="h-2-4 w-4 mr-2" strokeWidth={1} />
            {car.people}
          </p>

          <p className="flex items-center">
            <Fuel className="h-2-4 w-4 mr-2" strokeWidth={1} />
            {car.engine}
          </p>

          <p className="flex items-center">
            <Gauge className="h-2-4 w-4 mr-2" strokeWidth={1} />
            {car.cv}
          </p>

          <p className="flex items-center">
            <Gem className="h-2-4 w-4 mr-2" strokeWidth={1} />
            {car.type}
          </p>
        </div>
        <div className="flex justify-between mt-3 gap-4-x-4">
          <ButtonDeleteCar carData={car} />
          <ButtonEditCar carData={car} />
        </div>

        {car.isPublish ? (
          <Button
            disabled={loading}
            className="bg-green-500 hover:bg-green-500 w-full mt-3 rounded-full ring-offset-2 hover:ring-2 hover:ring-green-500"
            onClick={() => handlePublishCar(false)}
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Updating...
              </>
            ) : (
              <>
                Unpublish
                <Upload className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        ) : (
          <Button
            disabled={loading}
            className="bg-green-500 hover:bg-green-500 w-full mt-3 rounded-full ring-offset-2 hover:ring-2 hover:ring-green-500"
            onClick={() => handlePublishCar(true)}
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Publishing...
              </>
            ) : (
              <>
                Publish
                <Upload className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
// <Card className="group overflow-hidden border-border/50 transition-all duration-300 hover:shadow-xl hover:border-accent/50">
//   <div className="relative aspect-[3/2] overflow-hidden">
//     <Image
//       src={car.photo || "/placeholder.svg"}
//       alt={car.name}
//       fill
//       className="object-cover transition-transform duration-500 group-hover:scale-110"
//     />
//     {/* <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground border-0">
//       {car.type}
//     </Badge> */}
//   </div>

//   <CardContent className="p-6 space-y-4">
//     <div className="space-y-2">
//       <h3 className="text-2xl font-semibold tracking-tight text-balance">
//         {car.name}
//       </h3>

//       <div className="flex items-center gap-4 text-sm text-muted-foreground">
//         <div className="flex items-center gap-1.5">
//           <IconManualGearbox className="h-4 w-4" />
//           <span>{car.transmission}</span>
//         </div>
//         <div className="flex items-center gap-1.5">
//           <Users className="h-4 w-4" />
//           <span>{car.people}</span>
//         </div>
//         {/* <div className="flex items-center gap-1.5">
//           <Luggage className="h-4 w-4" />
//           <span>{car.specs.luggage} maletas</span>
//         </div> */}
//         <div className="flex items-center gap-1.5">
//           <IconEngine className="h-4 w-4" />
//           <span>{car.engine}</span>
//         </div>
//         <div className="flex items-center gap-1.5">
//           <Gauge className="h-4 w-4" />
//           <span>{car.cv}cv</span>
//         </div>
//       </div>
//     </div>

//     {/* <div className="flex flex-wrap gap-2">
//         <Badge
//           variant="secondary"
//           className="text-xs font-normal"
//         >
//           {car.engine}
//         </Badge>
//     </div> */}
//     <div className="space-y-1">
//       <p className="text-sm text-muted-foreground">From</p>
//       <div className="flex items-baseline gap-1">
//         <span className="text-3xl font-bold">€{car.priceDay}</span>
//         <span className="text-sm text-muted-foreground">/day</span>
//       </div>
//     </div>
//   </CardContent>

//   <CardFooter className="flex justify-between gap-x-4">
//   </CardFooter>
// </Card>
