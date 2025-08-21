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
import ButtonCopy from "../../components/ui/ButtonCopy"

// New SEO-focused columns
const columns = [
  { id: 'professional', name: 'Professional' },
  { id: 'clickbait', name: 'Clickbait' },
  { id: 'informational', name: 'Informational' },
];

// Prefilled SEO Titles + Meta Descriptions (6 per column)
const initialData = [
  // Professional
  { id: '1', name: 'SEO Title: Advanced AI Marketing Solutions for 2025', column: 'professional' },
  { id: '2', name: 'Meta: Discover professional AI-driven marketing tools to optimize growth.', column: 'professional' },
  { id: '3', name: 'SEO Title: Scalable SEO Strategies Backed by AI', column: 'professional' },
  { id: '4', name: 'Meta: Unlock long-term SEO success with intelligent, data-backed insights.', column: 'professional' },
  { id: '5', name: 'SEO Title: AI Tools for Data-Driven Digital Marketing', column: 'professional' },
  { id: '6', name: 'Meta: Transform campaigns with precision using next-gen AI technology.', column: 'professional' },

  // Clickbait
  { id: '7', name: 'SEO Title: This AI Tool Will Change Your SEO Forever!', column: 'clickbait' },
  { id: '8', name: 'Meta: You won’t believe how fast AI can rank your site 🚀', column: 'clickbait' },
  { id: '9', name: 'SEO Title: The Secret SEO Hack Nobody Talks About', column: 'clickbait' },
  { id: '10', name: 'Meta: One click and your rankings skyrocket – see how!', column: 'clickbait' },
  { id: '11', name: 'SEO Title: 7 AI Marketing Tricks That Actually Work', column: 'clickbait' },
  { id: '12', name: 'Meta: Try these shocking AI hacks to dominate Google searches.', column: 'clickbait' },

  // Informational
  { id: '13', name: 'SEO Title: What Is AI Marketing? A Beginner’s Guide', column: 'informational' },
  { id: '14', name: 'Meta: Learn the basics of AI in digital marketing with simple examples.', column: 'informational' },
  { id: '15', name: 'SEO Title: How AI SEO Tools Improve Keyword Research', column: 'informational' },
  { id: '16', name: 'Meta: Step-by-step guide to using AI for smarter content optimization.', column: 'informational' },
  { id: '17', name: 'SEO Title: Benefits of AI for Small Business Marketing', column: 'informational' },
  { id: '18', name: 'Meta: Explore how AI helps startups grow through automation and SEO.', column: 'informational' },
];

export default function SeoPlanBoardDesc() {
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
                <KanbanCard key={item.id} id={item.id} name={item.name}/> 
              )}
            </KanbanCards>
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </KanbanBoard>
      )}
    </KanbanProvider>
  );
}
