"use client";
import { useState, useEffect } from "react";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Button } from "../../button";
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";
const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // to remove hydration error warning
  useEffect(() => {
    setMounted(true);
  }, []);

  if(!mounted){
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="focus-visible:ring-0 focus-visible:ring-offset-0">
          {theme === "system" ? (
            <SunMoon />
          ) : theme === "dark" ? (
            <MoonIcon />
          ) : (
            <SunIcon />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
            Apprearence
        </DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuCheckboxItem checked ={theme === 'system'} onClick ={()=> setTheme('system')}>
            System
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked ={theme === 'light'} onClick ={()=> setTheme('light')}>
            LightMode
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked ={theme === 'dark'} onClick ={()=> setTheme('dark')}>
            DarkMode
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;
