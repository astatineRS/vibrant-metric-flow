
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Contact = {
  id: number;
  name: string;
  avatar: string;
  color: string;
};

const contacts: Contact[] = [
  { id: 1, name: 'Natali Craig', avatar: 'NC', color: 'bg-blue-500' },
  { id: 2, name: 'Drew Cano', avatar: 'DC', color: 'bg-green-500' },
  { id: 3, name: 'Andi Lane', avatar: 'AL', color: 'bg-purple-500' },
  { id: 4, name: 'Koray Okumus', avatar: 'KO', color: 'bg-yellow-500' },
  { id: 5, name: 'Kate Morrison', avatar: 'KM', color: 'bg-pink-500' },
  { id: 6, name: 'Melody Macy', avatar: 'MM', color: 'bg-indigo-500' }
];

const ContactList = () => {
  return (
    <div className="chart-container">
      <h2 className="text-lg font-medium mb-6">Contacts</h2>
      <div className="flex flex-wrap gap-2">
        {contacts.map((contact) => (
          <TooltipProvider key={contact.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div 
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer",
                    contact.color
                  )}
                >
                  {contact.avatar}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{contact.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
