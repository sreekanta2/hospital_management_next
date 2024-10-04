"use client"; // This makes the component client-side

import { useState } from "react";
import { Switch } from "./ui/switch";

interface SwitchProps {
  checked?: boolean; // Optional initial checked state
  onCheckedChange?: (checked: boolean) => void; // Callback function when checked state changes
  checkedColor?: string; // Color when the switch is checked
  uncheckedColor?: string; // Color when the switch is unchecked
}

const ToggleSwitch: React.FC<SwitchProps> = ({
  checked = false, // Default is unchecked
  onCheckedChange,
  checkedColor = "bg-blue-500",
  uncheckedColor = "bg-gray-300",
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (value: boolean) => {
    setIsChecked(value);
    console.log(value);
    if (onCheckedChange) {
      onCheckedChange(value); // Call the parent callback if provided
    }
  };

  return (
    <Switch
      checked={isChecked}
      onCheckedChange={handleChange}
      className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors  bg-slate-900
      ${isChecked ? checkedColor : uncheckedColor}`}
    >
      <span
        className={`block w-4 h-4 bg-white rounded-full shadow-md transform transition-transform
        ${isChecked ? "translate-x-5" : "translate-x-0"}`}
      />
    </Switch>
  );
};

export default ToggleSwitch;
