"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { DashIcon, PlusIcon } from "@radix-ui/react-icons";
import * as React from "react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "rounded-[10px] border-2 border-secondary-15 bg-primary-95 px-4 md:px-5 [&[data-state=open]]:bg-white",
      className,
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-3 text-sm font-medium transition-all [&[data-state=closed]>.cont>.dash]:-rotate-180 [&[data-state=closed]>.cont>.plus]:invisible [&[data-state=open]>.cont>.dash]:invisible [&[data-state=open]>.cont>.plus]:visible [&[data-state=open]>.cont>.plus]:rotate-180 [&[data-state=open]]:pb-3.5",

        className,
      )}
      {...props}
    >
      {children}
      <div className="cont relative aspect-square w-[32px] shrink-0 rounded border-2 border-secondary-15 bg-primary-97 p-1">
        <DashIcon className="dash absolute inset-0 m-auto h-6 w-6 text-secondary-15 transition-transform duration-300" />
        <PlusIcon className="plus absolute inset-0 m-auto h-4 w-4 text-secondary-15 transition-transform duration-200" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down [&[data-state=open]]:border-t-2 [&[data-state=open]]:border-t-secondary-15 [&[data-state=open]]:pt-3"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
