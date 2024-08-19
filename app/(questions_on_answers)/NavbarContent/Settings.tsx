import React, { useState } from "react";
import { Checkbox, Switch } from "@nextui-org/react";
import NavbarContentContainer from "@/components/NavbarContentContainer";

function Settings() {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const handleCheckboxChange = (e: React.BaseSyntheticEvent) => {
    const { name } = e.target;
    setSelectedCheckbox(name);
  };

  return (
    <>
      <NavbarContentContainer className="bg-content2 p-6 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg text-foreground-700">Quiz Status</h1>
            <p className="text-sm text-foreground-600">
              When switched on, the quiz is active and available for everyone.
              If not, no one can access the quiz from the external link.
            </p>
          </div>
          <Switch />
        </div>
        <aside className="flex flex-col gap-2">
          <span className="text-lg text-foreground-700">Availability</span>
          <div className="flex flex-col gap-2 ">
            <Checkbox
              color="primary"
              size="lg"
              radius="full"
              name="public"
              isSelected={selectedCheckbox === "public"}
              onChange={handleCheckboxChange}
            >
              <span className="text-foreground-500">Public</span>
            </Checkbox>
            <Checkbox
              color="primary"
              size="lg"
              radius="full"
              name="private"
              isSelected={selectedCheckbox === "private"}
              onChange={handleCheckboxChange}
            >
              <span className="text-foreground-500">Private</span>
            </Checkbox>
          </div>
        </aside>
      </NavbarContentContainer>
    </>
  );
}

export default Settings;
