'use client';
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (

    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>

        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <div className="flex flex-col space-y-4 text-sm">
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Blog">
          <div className="flex flex-col space-y-4 text-sm">
          </div>
        </MenuItem>

      </Menu>
    </div>
  )
}

export default Navbar
