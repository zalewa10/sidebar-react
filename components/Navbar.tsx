"use client";

import "@/styles/globals.css";
import React, { useEffect, useState, ReactNode } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Image, { StaticImageData } from "next/image";
import { bottom, logoTop, main, navi } from "@/constants/index";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

type Item = {
  imgURL: StaticImageData;
  name: string;
  href: string;
};

//tworzymy interface dla children
interface NavbarProps {
  children: ReactNode;
}

type RenderProps = {
  items: Item[];
  collapsed: boolean;
};

const Render = ({ items, collapsed }: RenderProps) => {
  return (
    <div className="flex flex-col gap-6 py-6 pl-6">
      {items.map((value, key) => (
        <Link
          key={key}
          href={value.href}
          className="flex items-center justify-start gap-2"
        >
          <Image src={value.imgURL} alt={value.name} width={30} height={30} />
          {!collapsed && <p className="text-xl text-beż">{value.name}</p>}
        </Link>
      ))}
    </div>
  );
};

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [panelSize, setPanelSize] = useState(15);

  useEffect(() => {
    setCollapsed(panelSize <= 10);
  }, [panelSize]);

  return (
    <main className="bg-[#403D39] h-screen p-10 flex items-center justify-center">
      <div className="bg-black rounded-xl w-full h-full">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel
            defaultSize={12}
            minSize={6}
            maxSize={12}
            onResize={(size) => setPanelSize(size)}
            className="py-2 px-2"
          >
            <div className="flex flex-col h-full items-left justify-between bg-czarny rounded-xl">
              <Render items={logoTop} collapsed={collapsed} />

              <Render items={main} collapsed={collapsed} />
              <Separator />

              <Render items={navi} collapsed={collapsed} />

              <Separator />

              <Render items={bottom} collapsed={collapsed} />
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel defaultSize={85}>
            <div className="flex h-full items-center justify-center p-2">
              {children}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </main>
  );
};

export default Navbar;
