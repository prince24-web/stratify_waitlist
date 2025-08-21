'use client';

import React from 'react';
import {
  KanbanBoard,
  KanbanCard,
  KanbanCards,
  KanbanHeader,
  KanbanProvider,
} from '@/components/kanban'; // adjust path to where you saved your Kanban code

// Example columns
const columns = [
  { id: 'ideas', name: 'Ideas' },
  { id: 'in-progress', name: 'In Progress' },
  { id: 'completed', name: 'Completed' },
];

// Example initial data
const initialData = [
  { id: '1', name: 'Keyword Research', column: 'ideas' },
  { id: '2', name: 'Write Blog Outline', column: 'in-progress' },
  { id: '3', name: 'Optimize Metadata', column: 'completed' },
];

export default function SeoPlanBoard() {
  const [data, setData] = React.useState(initialData);

  return (
    <KanbanProvider
      columns={columns}
      data={data}
      onDataChange={setData}
    >
      {(column) => (
        <KanbanBoard key={column.id} id={column.id}>
          <KanbanHeader>{column.name}</KanbanHeader>
          <KanbanCards id={column.id}>
            {(item) => (
              <KanbanCard key={item.id} id={item.id} name={item.name} />
            )}
          </KanbanCards>
        </KanbanBoard>
      )}
    </KanbanProvider>
  );
}
