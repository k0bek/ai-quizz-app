import React, { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(
    new Set(locale === "pl" ? ["polish"] : ["english"])
  );
  const getDisplayName = (key: string) => {
    switch (key) {
      case "polish":
        return "Polish";
      case "english":
        return "English";
      default:
        return "Select Language";
    }
  };

  const updateLocale = (key: string) => {
    const newLocale = key === "polish" ? "pl" : "en";
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  useEffect(() => {
    const selectedKey = Array.from(selectedKeys)[0];
    updateLocale(selectedKey);
  }, [selectedKeys]);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize">
          {getDisplayName(Array.from(selectedKeys)[0])}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        // @ts-expect-error
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="english">English</DropdownItem>
        <DropdownItem key="polish">Polish</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
