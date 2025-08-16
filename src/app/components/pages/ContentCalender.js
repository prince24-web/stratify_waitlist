"use client";

import * as React from "react";
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    flexRender,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import APIService from "@/services/api";

export default function ContentCalendarGrid({ persona }) {
    const [data, setData] = React.useState([]);
    const [sorting, setSorting] = React.useState([]);
    const [filtering, setFiltering] = React.useState("");

    React.useEffect(() => {
        if (!persona) return;
        const fetchCalendar = async () => {
            try {
                const res = await APIService.calendars.getAll({
                    personaId: persona._id,
                });
                setData(res.data.calendars || []);
            } catch (err) {
                console.error("Error fetching calendar:", err);
            }
        };
        fetchCalendar();
    }, [persona]);

    const columns = [
        {
            accessorKey: "date",
            header: "Date",
            cell: ({ row }) => <div>{row.getValue("date")}</div>,
        },
        {
            accessorKey: "content",
            header: "Content",
            cell: ({ row }) => (
                <div className="max-w-xs truncate">
                    {row.getValue("content")}
                </div>
            ),
        },
        { accessorKey: "category", header: "Category" },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => {
                const status = row.getValue("status");
                return (
                    <span
                        className={`px-2 py-1 rounded-full text-xs ${
                            status === "Published"
                                ? "bg-green-500/20 text-green-400"
                                : status === "Scheduled"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-gray-500/20 text-gray-400"
                        }`}
                    >
                        {status}
                    </span>
                );
            },
        },
    ];

    const table = useReactTable({
        data,
        columns,
        state: { sorting, globalFilter: filtering },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    return (
        <div className="space-y-4">
            <input
                type="text"
                placeholder="Search posts..."
                value={filtering ?? ""}
                onChange={(e) => setFiltering(e.target.value)}
                className="px-3 py-2 rounded-md border border-gray-700 bg-transparent text-sm"
            />

            <div className="rounded-md border border-gray-700 overflow-hidden">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead
                                        key={header.id}
                                        className="cursor-pointer select-none"
                                        onClick={header.column.getToggleSortingHandler()}
                                    >
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                        {{ asc: " 🔼", desc: " 🔽" }[
                                            header.column.getIsSorted()
                                        ] ?? null}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
