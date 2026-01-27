"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { FormAddCar } from "../FormAddCar";

export function ButtonAddCar() {
 const [mounted, setMounted] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button variant="outline">
          Add New car
          <PlusCircle className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add car</DialogTitle>
          {/* <DialogDescription></DialogDescription> */}
        </DialogHeader>
        <FormAddCar setOpenDialog={setOpenDialog} />
      </DialogContent>
    </Dialog>
  );
}
