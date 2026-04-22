import * as React from 'react';
import React__default from 'react';
import { DropdownMenu as DropdownMenu$1 } from 'radix-ui';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';

/**
 * Interface pour les propriétés du bouton.
 */
interface ButtonProps {
    /** Le contenu du bouton (texte, icônes, etc.) */
    children: React__default.ReactNode;
    /** Fonction appelée lors du clic */
    onClick?: () => void;
    /** Type HTML du bouton */
    type?: "button" | "submit" | "reset";
    /** Style visuel prédéfini */
    variant?: "primary" | "secondary" | "danger";
    /** Classes CSS additionnelles (Tailwind) */
    className?: string;
}

declare function DropdownMenu({ ...props }: React.ComponentProps<typeof DropdownMenu$1.Root>): React.JSX.Element;
declare function DropdownMenuPortal({ ...props }: React.ComponentProps<typeof DropdownMenu$1.Portal>): React.JSX.Element;
declare function DropdownMenuTrigger({ ...props }: React.ComponentProps<typeof DropdownMenu$1.Trigger>): React.JSX.Element;
declare function DropdownMenuContent({ className, align, sideOffset, ...props }: React.ComponentProps<typeof DropdownMenu$1.Content>): React.JSX.Element;
declare function DropdownMenuGroup({ ...props }: React.ComponentProps<typeof DropdownMenu$1.Group>): React.JSX.Element;
declare function DropdownMenuItem({ className, inset, variant, ...props }: React.ComponentProps<typeof DropdownMenu$1.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): React.JSX.Element;
declare function DropdownMenuCheckboxItem({ className, children, checked, inset, ...props }: React.ComponentProps<typeof DropdownMenu$1.CheckboxItem> & {
    inset?: boolean;
}): React.JSX.Element;
declare function DropdownMenuRadioGroup({ ...props }: React.ComponentProps<typeof DropdownMenu$1.RadioGroup>): React.JSX.Element;
declare function DropdownMenuRadioItem({ className, children, inset, ...props }: React.ComponentProps<typeof DropdownMenu$1.RadioItem> & {
    inset?: boolean;
}): React.JSX.Element;
declare function DropdownMenuLabel({ className, inset, ...props }: React.ComponentProps<typeof DropdownMenu$1.Label> & {
    inset?: boolean;
}): React.JSX.Element;
declare function DropdownMenuSeparator({ className, ...props }: React.ComponentProps<typeof DropdownMenu$1.Separator>): React.JSX.Element;
declare function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<"span">): React.JSX.Element;
declare function DropdownMenuSub({ ...props }: React.ComponentProps<typeof DropdownMenu$1.Sub>): React.JSX.Element;
declare function DropdownMenuSubTrigger({ className, inset, children, ...props }: React.ComponentProps<typeof DropdownMenu$1.SubTrigger> & {
    inset?: boolean;
}): React.JSX.Element;
declare function DropdownMenuSubContent({ className, ...props }: React.ComponentProps<typeof DropdownMenu$1.SubContent>): React.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "secondary" | "link" | "default" | "destructive" | "outline" | "ghost" | null | undefined;
    size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): React.JSX.Element;

export { Button, type ButtonProps, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger };
