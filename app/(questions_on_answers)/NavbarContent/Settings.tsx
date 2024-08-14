import { Checkbox, CheckboxGroup } from "@nextui-org/react";
import React from "react";

function Settings() {
  return (
    <section className="bg-content2 p-6 flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <h1 className="text-lg">Quiz Status</h1>
        <p className="text-sm text-foreground-600">
          When switched on, quizz is active and available for everyone. If not,
          no one can access quizz from the external link
        </p>
      </div>
      <aside className="flex flex-col gap-2">
        <span className="text-lg">Availability</span>
        <aside className="flex flex-col gap-2">
          <Checkbox color="primary" size="lg" radius="full" value="Public">
            Public
          </Checkbox>
          <Checkbox value="Private" size="lg" radius="full">
            Private
          </Checkbox>
        </aside>
      </aside>
    </section>
  );
}

export default Settings;
