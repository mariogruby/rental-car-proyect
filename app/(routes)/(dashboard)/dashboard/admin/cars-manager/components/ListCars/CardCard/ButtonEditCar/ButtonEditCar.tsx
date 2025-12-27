"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ButtonEditCarProps } from "./ButtonEditCar.types";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { FormEditCar } from "../FormEditCar";

export function ButtonEditCar(props: ButtonEditCarProps) {
  const { carData } = props;
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full ring-offset-2 hover:ring-2 hover:ring-primary/20 cursor-pointer"
        >
          Edit
          <Pencil className="w-4 h-4 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Car</DialogTitle>
          {/* <DialogDescription></DialogDescription> */}
          <FormEditCar setOpenDialog={setOpenDialog} carData={carData} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
