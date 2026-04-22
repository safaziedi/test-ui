"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export function UserActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Mon Compte</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white border rounded-md shadow-lg p-1">
        <DropdownMenuLabel className="px-2 py-1.5 font-semibold">Options</DropdownMenuLabel>
        <DropdownMenuSeparator className="h-px bg-gray-200 my-1" />
        <DropdownMenuItem className="px-2 py-1.5 cursor-pointer hover:bg-gray-100 rounded-sm">
          Profil
        </DropdownMenuItem>
        <DropdownMenuItem className="px-2 py-1.5 cursor-pointer hover:bg-gray-100 rounded-sm">
          Facturation
        </DropdownMenuItem>
        <DropdownMenuSeparator className="h-px bg-gray-200 my-1" />
        <DropdownMenuItem className="px-2 py-1.5 cursor-pointer text-red-600 hover:bg-red-50 rounded-sm">
          Déconnexion
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}