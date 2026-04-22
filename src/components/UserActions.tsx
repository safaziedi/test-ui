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
    <div className="flex flex-col gap-4 p-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {/* TEST 1 : Bouton avec une couleur de thème Shadcn (destructive/danger) */}
          <Button variant="destructive">Mon Compte (Danger)</Button>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent className="w-56 bg-popover border rounded-md shadow-lg p-1">
          {/* TEST 2 : Label avec une couleur personnalisée Tailwind (Indigo) */}
          <DropdownMenuLabel className="px-2 py-1.5 font-bold text-indigo-600">
            Gestion Profil
          </DropdownMenuLabel>
          
          <DropdownMenuSeparator className="h-px bg-slate-200 my-1" />
          
          {/* TEST 3 : Item avec un fond au survol Ambre */}
          <DropdownMenuItem className="px-2 py-1.5 cursor-pointer hover:bg-amber-100 hover:text-amber-900 rounded-sm transition-colors">
            👑 Devenir Premium
          </DropdownMenuItem>
          
          {/* TEST 4 : Item avec couleur de thème Success (Vert) */}
          <DropdownMenuItem className="px-2 py-1.5 cursor-pointer text-emerald-600 hover:bg-emerald-50 rounded-sm">
            ✅ Paramètres validés
          </DropdownMenuItem>

          <DropdownMenuSeparator className="h-px bg-slate-200 my-1" />
          
          {/* TEST 5 : Item avec dégradé de couleur pour tester le rendu complexe */}
          <DropdownMenuItem className="px-2 py-1.5 cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 rounded-sm">
            ✨ Nouveautés
          </DropdownMenuItem>

          <DropdownMenuSeparator className="h-px bg-slate-200 my-1" />
          
          <DropdownMenuItem className="px-2 py-1.5 cursor-pointer text-red-600 hover:bg-red-50 rounded-sm">
            Déconnexion
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}