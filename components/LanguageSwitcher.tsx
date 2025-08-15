"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  return (
    <Select
      defaultValue="en"
      onValueChange={(value) => {
        const html = document.documentElement;
        if (value === "fa") {
          html.setAttribute("dir", "rtl");
          html.setAttribute("lang", "fa");
        } else {
          html.setAttribute("dir", "ltr");
          html.setAttribute("lang", value);
        }
      }}
    >
      <SelectTrigger className="w-16 border-none bg-transparent hover:bg-gray-100 focus:ring-0 focus:ring-offset-0">
        <div className="flex items-center space-x-1">
          <Globe className="w-4 h-4" />
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">EN</SelectItem>
        <SelectItem value="es">ES</SelectItem>
        <SelectItem value="fr">FR</SelectItem>
        <SelectItem value="de">DE</SelectItem>
        <SelectItem value="fa">فا</SelectItem>
      </SelectContent>
    </Select>
  );
}