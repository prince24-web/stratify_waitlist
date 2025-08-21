'use client';

import React from 'react';
import {
  KanbanBoard,
  KanbanCard,
  KanbanCards,
  KanbanHeader,
  KanbanProvider,
} from '../../components/ui/kibo-ui/kanban'; 
import { ScrollArea, ScrollBar } from '../../components/ui/scroll-area';


// New SEO-focused columns
const columns = [
  { id: 'primary', name: 'Primary Keywords' },
  { id: 'longtail', name: 'Long-tail Variations' },
  { id: 'intent', name: 'Search Intent Keywords' },
];

// Prefilled SEO keywords (5 rows each)
const initialData = [
  // Primary Keywords
  { id: '1', name: 'AI marketing tools', column: 'primary' },
  { id: '2', name: 'SEO software', column: 'primary' },
  { id: '3', name: 'content automation', column: 'primary' },
  { id: '4', name: 'digital marketing AI', column: 'primary' },
  { id: '5', name: 'AI for startups', column: 'primary' },

  // Long-tail Variations
  { id: '6', name: 'best AI marketing tools for small business', column: 'longtail' },
  { id: '7', name: 'AI SEO tools for content writers', column: 'longtail' },
  { id: '8', name: 'how to use AI for social media marketing', column: 'longtail' },
  { id: '9', name: 'affordable AI tools for digital marketing', column: 'longtail' },
  { id: '10', name: 'AI content creation tools comparison', column: 'longtail' },

  // Search Intent Keywords
  { id: '11', name: 'what is AI in marketing', column: 'intent' },
  { id: '12', name: 'buy AI SEO software', column: 'intent' },
  { id: '13', name: 'AI tools for growing a business', column: 'intent' },
  { id: '14', name: 'free AI content generator', column: 'intent' },
  { id: '15', name: 'best AI marketing platform 2025', column: 'intent' },
];

export default function SeoPlanBoard() {
  const [data, setData] = React.useState(initialData);

  return (
   <KanbanProvider columns={columns} data={data} onDataChange={setData}>
      {(column) => (
        <KanbanBoard key={column.id} id={column.id}>
          <KanbanHeader>{column.name}</KanbanHeader>

          {/* 👇 Each column scrolls independently */}
          <ScrollArea className="h-[400px] pr-2">
            <KanbanCards id={column.id}>
              {(item) => (
                <KanbanCard key={item.id} id={item.id} name={item.name} />
              )}
            </KanbanCards>
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </KanbanBoard>
      )}
    </KanbanProvider>
  );
}
