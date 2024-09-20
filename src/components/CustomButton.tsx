import { Lock } from "lucide-react";
import { Button } from "./ui/button";
import React, { FC, ReactNode } from "react";

interface CustomButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "outline" | "ghost";
  icon?: React.ElementType;
}

const CustomButton: FC<CustomButtonProps> = ({
  children,
  onClick,
  variant = "outline",
  icon: Icon,
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className="flex items-center gap-2"
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </Button>
  );
};

export default CustomButton;
