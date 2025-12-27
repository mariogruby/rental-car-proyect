"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
//   DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { ButtonDeleteCarProps } from "./ButtonDeleteCar.types";
import { Button } from "@/components/ui/button";
import { Trash, Loader2 } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function ButtonDeleteCar({ carData }: ButtonDeleteCarProps) {
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const deleteCar = async () => {
    try {
      setLoading(true);

      const res = await axios.delete(`/api/car/${carData.id}`);

      if (res.data.success) {
        toast.success("Car deleted");
        setOpenDialog(false);
        router.refresh();
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-full hover:ring-2 hover:ring-primary cursor-pointer">
          Delete
          <Trash className="w-4 h-4 ml-2" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader className="items-center">
          <DialogTitle>Are you sure you want to delete this car?</DialogTitle>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant="outline"
              disabled={loading}
              className="rounded-full ring-offset-2 hover:ring-2 hover:ring-primary/20 cursor-pointer"
            >
              Cancel
            </Button>
          </DialogClose>

          <Button
            variant="destructive"
            onClick={deleteCar}
            disabled={loading}
            className="rounded-full ring-offset-2 hover:ring-2 hover:ring-destructive cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Deleting...
              </>
            ) : (
              <>
                <Trash className="w-4 h-4" />
                Delete
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
