"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";

export default function TenantsPage() {
  const [tenants, setTenants] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetch("/api/tenants")
      .then((res) => res.json())
      .then(setTenants);
  }, []);

  const onSubmit = async (data) => {
    await fetch("/api/tenants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    reset();
    fetch("/api/tenants")
      .then((res) => res.json())
      .then(setTenants);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Tenants</h1>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Create Tenant</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Tenant</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input {...register("name")} placeholder="Tenant Name" />
            <Button type="submit">Create</Button>
          </form>
        </DialogContent>
      </Dialog>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tenants.map((tenant) => (
            <TableRow key={tenant.id}>
              <TableCell>{tenant.id}</TableCell>
              <TableCell>{tenant.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
