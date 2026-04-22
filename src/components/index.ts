// modules/ui/src/components/index.ts

// 1. Importation du CSS (si tu as un fichier global dans le submodule pour Tailwind)
// import "../globals.css"; 

// 2. Export des composants de base (Shadcn)
export { Button } from "./ui/button";
export { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem
} from "./ui/dropdown-menu";

// 3. Export de ton composant métier (celui qui combine Button + Dropdown)
export { UserActions } from "./UserActions";