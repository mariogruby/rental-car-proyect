"use client";
import React, { useState } from "react";
import axios from "axios";
import { FormEditCarProps } from "./FormEditCar.types";
import { formSchema } from "./FormEditCar.form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "@/components/ui/form";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UploadButton } from "@/utils/uploadthing";
import { SubmitButton } from "./SubmitEditCarButton";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function FormEditCar(props: FormEditCarProps) {
  const { carData, setOpenDialog } = props;
  const [loading, setLoading] = useState(false);
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: carData.name,
      cv: carData.cv,
      transmission: carData.transmission,
      people: carData.people,
      photo: carData.photo,
      engine: carData.engine,
      type: carData.type,
      priceDay: carData.priceDay,
      isPublish: carData.isPublish ? carData.isPublish : false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(false);
      const res = await axios.patch(`/api/car/${carData.id}/form`, values);
      if (res.data.success) {
        setTimeout(() => {
          setOpenDialog(false);
        }, 1000);
        setLoading(true);
        toast.success("car edited");
        router.refresh();
      }
    } catch (error) {
      toast.error("something went wrong");
      setLoading(false);
      setOpenDialog(true);
      console.error(error);
      throw error;
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Car name</FormLabel>
                <FormControl>
                  <Input placeholder="Peugeot 208" {...field} />
                </FormControl>
                {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cv"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Power</FormLabel>
                <FormControl>
                  <Input placeholder="130 CV" type="number" {...field} />
                </FormControl>
                {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FieldGroup>
            <Controller
              name="transmission"
              control={form.control}
              render={({ field }) => (
                <Field>
                  <FieldContent>
                    <FieldLabel htmlFor="form-rhf-select-language">
                      Transmission
                    </FieldLabel>
                  </FieldContent>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      id="form-rhf-select-language"
                      className="min-w-[120px]"
                    >
                      <SelectValue placeholder="Select the type of car" />
                    </SelectTrigger>
                    <SelectContent position="item-aligned">
                      <SelectItem value="manual">Manual</SelectItem>
                      <SelectItem value="automatic">Automatic</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              )}
            />
          </FieldGroup>
          <FieldGroup>
            <Controller
              name="people"
              control={form.control}
              render={({ field }) => (
                <Field>
                  <FieldContent>
                    <FieldLabel htmlFor="form-rhf-select-language">
                      People
                    </FieldLabel>
                  </FieldContent>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      id="form-rhf-select-language"
                      className="min-w-[120px]"
                    >
                      <SelectValue placeholder="Select of number of people" />
                    </SelectTrigger>
                    <SelectContent position="item-aligned">
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="7">7</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              )}
            />
          </FieldGroup>
          <FieldGroup>
            <Controller
              name="engine"
              control={form.control}
              render={({ field }) => (
                <Field>
                  <FieldContent>
                    <FieldLabel htmlFor="form-rhf-select-language">
                      Engine
                    </FieldLabel>
                  </FieldContent>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      id="form-rhf-select-language"
                      className="min-w-[120px]"
                    >
                      <SelectValue placeholder="Select the engine of the car" />
                    </SelectTrigger>
                    <SelectContent position="item-aligned">
                      <SelectItem value="gasoline">Gasoline</SelectItem>
                      <SelectItem value="diesel">Diesel</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                      <SelectItem value="electric">Electric</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              )}
            />
          </FieldGroup>
          <FieldGroup>
            <Controller
              name="type"
              control={form.control}
              render={({ field }) => (
                <Field>
                  <FieldContent>
                    <FieldLabel htmlFor="form-rhf-select-language">
                      Type
                    </FieldLabel>
                  </FieldContent>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      id="form-rhf-select-language"
                      className="min-w-[120px]"
                    >
                      <SelectValue placeholder="Select the type of car" />
                    </SelectTrigger>
                    <SelectContent position="item-aligned">
                      <SelectItem value="sedan">Sedan</SelectItem>
                      <SelectItem value="suv">SUV</SelectItem>
                      <SelectItem value="coupe">Coupe</SelectItem>
                      <SelectItem value="family">Family</SelectItem>
                      <SelectItem value="deluxe">Deluxe</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              )}
            />
          </FieldGroup>

          {/* <div className="lg:col-span-2"> */}
          <FieldGroup>
            <Controller
              name="photo"
              control={form.control}
              render={({ field }) => (
                <Field>
                  <FieldContent>
                    <FieldLabel>Car image</FieldLabel>
                  </FieldContent>
                  {photoUploaded ? (
                    <p className="text-sm">image uploaded!</p>
                  ) : (
                    <UploadButton
                      className="rounded-lg bg-slate-600/20 text-slate-800 outline-dotted outline-3"
                      {...field}
                      endpoint="photo"
                      onClientUploadComplete={(res) => {
                        form.setValue("photo", res?.[0].url, {
                          shouldValidate: true, // 👈 CLAVE
                          shouldDirty: true,
                        });
                        setPhotoUploaded(true);
                      }}
                      onUploadError={(error: Error) => {
                        console.log(error);
                      }}
                    />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <FormField
            control={form.control}
            name="priceDay"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price per Day</FormLabel>
                <FormControl>
                  <Input placeholder="20€" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* </div> */}
        <SubmitButton
          onClick={form.handleSubmit(onSubmit)}
          isLoading={loading}
          isValid={form.formState.isValid}
          className="mt-5"
        >
          Edit car
        </SubmitButton>
      </form>
    </Form>
  );
}
