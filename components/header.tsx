"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Component, Menu, Search } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

// shadcn/ui
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

// Dropdown Link برای زیرمنوها
function DropdownLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block w-full px-3 py-2 text-sm text-blog hover:text-blue-700 transition-colors"
    >
      {children}
    </Link>
  );
}

// منوی هاور (دسکتاپ)
function HoverMenu({
  label,
  children,
  align = "start",
}: {
  label: string;
  children: React.ReactNode;
  align?: "start" | "center" | "end";
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative"
    >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            className="group inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition-all duration-200"
            aria-haspopup="menu"
            aria-expanded={open}
          >
            {label}
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            />
          </button>
        </PopoverTrigger>
        <PopoverContent
          side="bottom"
          align={align}
          collisionPadding={12}
          className="max-w-[200px] rounded-xl border border-gray-200 bg-white p-2 shadow-lg shadow-black/5"
        >
          <div className="space-y-1">{children}</div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export function Header() {
  return (
    <header
      dir="rtl"
      className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* لوگو */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {/* عکس لوگو رو با فایل خودتون جایگزین کنید */}
              <Image
                src="/logo.png"
                alt="کویرباسپار"
                width={150}
                height={50}
                priority
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* ناوبری دسکتاپ */}
          <nav className="hidden md:flex items-center gap-2">
            <Link
              href="/"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition-colors"
            >
              صفحه اصلی
            </Link>
            <HoverMenu label="شرکت">
              <DropdownLink href="/company/about">درباره ما</DropdownLink>
              <DropdownLink href="/company/goals">اهداف ما</DropdownLink>
              <DropdownLink href="/company/blog">مقالات</DropdownLink>
            </HoverMenu>
            <HoverMenu label="محصولات">
              <DropdownLink href="/products/single-layer">لوله تک لایه</DropdownLink>
              <DropdownLink href="/products/rely">لوله رِلی</DropdownLink>
              <DropdownLink href="/products/triple-layer">لوله سه لایه</DropdownLink>
              <DropdownLink href="/products/pp">لوله پروپیلین</DropdownLink>
            </HoverMenu>
            <HoverMenu label="مرکز دانلود">
              <DropdownLink href="/downloads/order-form">فرم سفارش</DropdownLink>
              <DropdownLink href="/downloads/catalog">کاتالوگ</DropdownLink>
            </HoverMenu>
            <Link
              href="/contact"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition-colors"
            >
              ارتباط با ما
            </Link>
          </nav>

          {/* ابزارها (زبان، جستجو، دکمه‌های قرصی) */}
          <div className="hidden md:flex items-center gap-2">
            {/* زبان */}
           <LanguageSwitcher />

            {/* جستجو */}
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="جستجو"
            >
              <Search size={18} />
            </Button>

            {/* دکمه‌های قرصی */}
            <div className="flex gap-3 mr-10">
              <Link
                href="/requests/agency"
                className="rounded-full border border-blue-600 px-4 py-1.5 text-xs font-bold text-blog hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                درخواست نمایندگی
              </Link>
              <Link
                href="/requests/sample"
                className="rounded-full border border-blue-600 px-4 py-1.5 text-xs font-bold text-blog hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                درخواست نمونه کالا
              </Link>
              <Link
                href="/downloads/order-form"
                className="rounded-full border border-blue-600 px-4 py-1.5 text-xs font-bold text-blog hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                ارسال فرم سفارش
              </Link>
            </div>
          </div>

          {/* منوی موبایل */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="باز کردن منو"
                  className="text-gray-800"
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[340px] p-6 bg-white"
                dir="rtl"
              >
                <div className="flex flex-col gap-4">
                  {/* زبان و جستجو */}
                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      className="rounded-lg px-3 py-1.5 h-9 text-sm text-gray-700 border-gray-300 bg-gray-50 hover:bg-gray-100"
                    >
                      فارسی
                      <ChevronDown size={14} className="mr-1" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-700 hover:text-gray-900"
                    >
                      <Search size={18} />
                    </Button>
                  </div>

                  {/* دکمه‌های قرصی */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    <SheetClose asChild>
                      <Link
                        href="/requests/agency"
                        className="rounded-full border border-blue-600 px-4 py-1.5 text-sm text-blue-600 hover:bg-blue-600 hover:text-white"
                      >
                        درخواست نمایندگی
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/requests/sample"
                        className="rounded-full border border-blue-600 px-4 py-1.5 text-sm text-blue-600 hover:bg-blue-600 hover:text-white"
                      >
                        درخواست نمونه کالا
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/downloads/order-form"
                        className="rounded-full border border-blue-600 px-4 py-1.5 text-sm text-blue-600 hover:bg-blue-600 hover:text-white"
                      >
                        ارسال فرم سفارش
                      </Link>
                    </SheetClose>
                  </div>

                  {/* منوی اصلی */}
                  <nav className="mt-4 space-y-1">
                    <SheetClose asChild>
                      <Link
                        href="/"
                        className="block rounded-lg px-3 py-2.5 text-base font-medium text-gray-800 hover:bg-gray-100"
                      >
                        صفحه اصلی
                      </Link>
                    </SheetClose>

                    <div className="rounded-xl border border-gray-200 overflow-hidden">
                      <div className="bg-gray-50 px-3 py-2.5 text-sm font-semibold text-gray-800 border-b border-gray-200">
                        شرکت
                      </div>
                      <div className="p-1">
                        <SheetClose asChild>
                          <Link
                            href="/company/about"
                            className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            درباره ما
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/company/goals"
                            className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            اهداف ما
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/company/blog"
                            className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            مقالات
                          </Link>
                        </SheetClose>
                      </div>
                    </div>

                    <div className="rounded-xl border border-gray-200 overflow-hidden">
                      <div className="bg-gray-50 px-3 py-2.5 text-sm font-semibold text-gray-800 border-b border-gray-200">
                        محصولات
                      </div>
                      <div className="p-1">
                        <SheetClose asChild>
                          <Link
                            href="/products/single-layer"
                            className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            لوله تک لایه
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/products/rely"
                            className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            لوله رِلی
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/products/triple-layer"
                            className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            لوله سه لایه
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/products/pp"
                            className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            لوله پروپیلین
                          </Link>
                        </SheetClose>
                      </div>
                    </div>

                    <div className="rounded-xl border border-gray-200 overflow-hidden">
                      <div className="bg-gray-50 px-3 py-2.5 text-sm font-semibold text-gray-800 border-b border-gray-200">
                        مرکز دانلود
                      </div>
                      <div className="p-1">
                        <SheetClose asChild>
                          <Link
                            href="/downloads/order-form"
                            className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            فرم سفارش
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/downloads/catalog"
                            className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            کاتالوگ
                          </Link>
                        </SheetClose>
                      </div>
                    </div>

                    <SheetClose asChild>
                      <Link
                        href="/contact"
                        className="block rounded-lg px-3 py-2.5 text-base font-medium text-gray-800 hover:bg-gray-100"
                      >
                        ارتباط با ما
                      </Link>
                    </SheetClose>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}