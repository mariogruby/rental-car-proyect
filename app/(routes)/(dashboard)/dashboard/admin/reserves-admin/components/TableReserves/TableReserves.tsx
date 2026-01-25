/* eslint-disable @typescript-eslint/no-unused-vars */
import { formatPrice } from "@/lib/formatPrice";
import type { TableReservesProps } from "./TableReserves.types";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CalendarDays, Car, CreditCard, User } from "lucide-react";

export function TableReserves(props: TableReservesProps) {
  const { orders } = props;

  const totalAmount = orders.reduce((acc, booking) => {
    return acc + Number.parseFloat(booking.totalAmount);
  }, 0);

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white shadow-lg shadow-green-500/5 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10">
      <div className="bg-linear-to-r from-green-50 to-emerald-50/50 px-6 py-4 border-b border-zinc-100">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-green-100/80 text-green-600">
            <CalendarDays className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-zinc-800">Recent Reserves</h3>
            <p className="text-sm text-zinc-500">
              {orders.length} Total reserves
            </p>
          </div>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="bg-green-50/30 hover:bg-green-50/50 border-b border-zinc-100">
            <TableHead className="text-zinc-600 font-semibold">
              <span className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-green-500" />
                Order Date
              </span>
            </TableHead>
            <TableHead className="text-zinc-600 font-semibold">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-green-500" />
                Client ID
              </span>
            </TableHead>
            <TableHead className="text-zinc-600 font-semibold">
              <span className="flex items-center gap-2">
                <Car className="w-4 h-4 text-green-500" />
                Car Model
              </span>
            </TableHead>
            <TableHead className="text-zinc-600 font-semibold">
              Date Start
            </TableHead>
            <TableHead className="text-zinc-600 font-semibold">
              Date End
            </TableHead>
            <TableHead className="text-right text-zinc-600 font-semibold">
              <span className="flex items-center gap-2 justify-end">
                <CreditCard className="w-4 h-4 text-green-500" />
                Amount
              </span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow
              key={order.id}
              className="transition-colors duration-200 hover:bg-green-50/40 border-b border-zinc-100/80 group"
            >
              <TableCell className="font-medium text-zinc-700">
                <span className="px-2 py-1 rounded-lg bg-zinc-100/80 text-sm group-hover:bg-green-100/60 transition-colors">
                  {new Date(order.createdAt).toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </span>
              </TableCell>
              <TableCell className="font-mono text-sm max-w-25 truncate text-zinc-500">
                {order.userId.slice(0, 8)}...
              </TableCell>
              <TableCell>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-green-100/60 text-green-700 font-medium text-sm">
                  <Car className="w-3.5 h-3.5" />
                  {order.carName}
                </span>
              </TableCell>
              <TableCell className="text-zinc-600">
                {new Date(order.orderDate).toLocaleDateString("es-ES", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </TableCell>
              <TableCell className="text-zinc-600">
                {new Date(order.orderEndDate).toLocaleDateString("es-ES", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </TableCell>
              <TableCell className="text-right">
                <span className="font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-lg inline-block group-hover:bg-green-100 group-hover:shadow-sm group-hover:shadow-green-500/20 transition-all duration-200">
                  {formatPrice(Number(order.totalAmount))}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="bg-linear-to-r from-green-100/80 to-emerald-100/60">
          <TableRow className="hover:bg-green-100/90 border-t-2 border-green-200/60">
            <TableCell
              colSpan={5}
              className="font-semibold text-zinc-700 text-base"
            >
              Total
            </TableCell>
            <TableCell className="text-right">
              <span className="font-bold text-lg text-green-700 bg-white/80 px-4 py-2 rounded-xl shadow-sm shadow-green-500/10 inline-block">
                {formatPrice(totalAmount)}
              </span>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <div className="px-6 py-3 bg-zinc-50/50 border-t border-zinc-100 text-center">
        <p className="text-xs text-zinc-400">A list of your recent bookings</p>
      </div>
    </div>
  );
}
