"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Fuel,
  Gauge,
  Gem,
  Loader2,
  Upload,
  Users,
  CheckCircle,
  XCircle,
  Sparkles,
} from "lucide-react";
import { IconManualGearbox } from "@tabler/icons-react";
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
        publish ? "Car published successfully" : "Car unpublished"
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
    <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl hover:shadow-green-100/50 transition-all duration-500 overflow-hidden border border-gray-100 hover:border-green-200 hover:-translate-y-1">
      {/* Status Banner */}
      {car.isPublish ? (
        <div className="absolute top-0 left-0 right-0 z-10 bg-linear-to-r from-green-500 via-green-400 to-green-500 text-white py-2 px-4 flex items-center justify-center gap-2 text-sm font-medium">
          <CheckCircle className="w-4 h-4" />
          Published
          <Sparkles className="w-3 h-3 animate-pulse" />
        </div>
      ) : (
        <div className="absolute top-0 left-0 right-0 z-10 bg-linear-to-r from-red-500 via-red-400 to-red-500 text-white py-2 px-4 flex items-center justify-center gap-2 text-sm font-medium">
          <XCircle className="w-4 h-4" />
          Not Published
        </div>
      )}

      {/* Image Container */}
      <div className="relative pt-10 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent z-1 pointer-events-none" />
        <Image
          src={car.photo || "/placeholder.svg"}
          alt={car.name}
          width={400}
          height={300}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Type Badge */}
        <div className="absolute bottom-3 right-3 z-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-green-700 text-xs font-medium rounded-full border border-green-200 shadow-sm">
            <Gem className="w-3 h-3" />
            {car.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Title & Price */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors duration-300 line-clamp-2">
            {car.name}
          </h3>
          <div className="flex flex-col items-end shrink-0">
            <span className="text-2xl font-bold text-green-600">
              {car.priceDay}€
            </span>
            <span className="text-xs text-gray-500">/day</span>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl border border-gray-100 group-hover:border-green-100 group-hover:bg-green-50/30 transition-all duration-300">
            <div className="p-1.5 bg-white rounded-lg shadow-sm">
              <IconManualGearbox
                className="h-4 w-4 text-green-600"
                strokeWidth={1.5}
              />
            </div>
            <span className="text-sm text-gray-600">{car.transmission}</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl border border-gray-100 group-hover:border-green-100 group-hover:bg-green-50/30 transition-all duration-300">
            <div className="p-1.5 bg-white rounded-lg shadow-sm">
              <Users className="h-4 w-4 text-green-600" strokeWidth={1.5} />
            </div>
            <span className="text-sm text-gray-600">{car.people} seats</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl border border-gray-100 group-hover:border-green-100 group-hover:bg-green-50/30 transition-all duration-300">
            <div className="p-1.5 bg-white rounded-lg shadow-sm">
              <Fuel className="h-4 w-4 text-green-600" strokeWidth={1.5} />
            </div>
            <span className="text-sm text-gray-600">{car.engine}</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl border border-gray-100 group-hover:border-green-100 group-hover:bg-green-50/30 transition-all duration-300">
            <div className="p-1.5 bg-white rounded-lg shadow-sm">
              <Gauge className="h-4 w-4 text-green-600" strokeWidth={1.5} />
            </div>
            <span className="text-sm text-gray-600">{car.cv} CV</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <ButtonDeleteCar carData={car} />
          <ButtonEditCar carData={car} />
        </div>

        {/* Publish Button */}
        {car.isPublish ? (
          <Button
            disabled={loading}
            onClick={() => handlePublishCar(false)}
            className="w-full bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl py-5 font-medium shadow-lg shadow-green-200/50 hover:shadow-green-300/50 transition-all duration-300 group/btn"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Updating...
              </>
            ) : (
              <>
                <Upload className="w-4 h-4 mr-2 transition-transform duration-300 group-hover/btn:-translate-y-0.5" />
                Unpublish
              </>
            )}
          </Button>
        ) : (
          <Button
            disabled={loading}
            onClick={() => handlePublishCar(true)}
            className="w-full bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl py-5 font-medium shadow-lg shadow-green-200/50 hover:shadow-green-300/50 transition-all duration-300 group/btn"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Publishing...
              </>
            ) : (
              <>
                <Upload className="w-4 h-4 mr-2 transition-transform duration-300 group-hover/btn:-translate-y-0.5" />
                Publish
              </>
            )}
          </Button>
        )}
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-green-400 via-green-500 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
}
