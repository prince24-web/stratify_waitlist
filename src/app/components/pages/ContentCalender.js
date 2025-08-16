"use client"

import * as React from "react"
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Mock data
const defaultData = [
  { date: "2025-08-17", content: "🔥 Ragebait dev post", category: "Engagement", status: "Scheduled" },
  { date: "2025-08-18", content: "📊 Build-in-public update", category: "Transparency", status: "Draft" },
  { date: "2025-08-19", content: "💡 Developer tip", category: "Value", status: "Published" },
  { date: "2025-08-20", content: "⚡ Meme on startup life", category: "Fun", status: "Scheduled" },
]

// Column definitions (no types)
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
      <div className="max-w-xs truncate">{row.getValue("content")}</div>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status")
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
      )
    },
  },
]

export default function ContentCalendarGrid() {
  const [data] = React.useState(() => [...defaultData])
  const [sorting, setSorting] = React.useState([])
  const [filtering, setFiltering] = React.useState("")

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  return (
    <div className="space-y-4">
      {/* Search */}
      <input
        type="text"
        placeholder="Search posts..."
        value={filtering ?? ""}
        onChange={(e) => setFiltering(e.target.value)}
        className="px-3 py-2 rounded-md border border-gray-700 bg-transparent text-sm"
      />

      {/* Table */}
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
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted()] ?? null}
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
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
