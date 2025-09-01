import React from "react";
import { Button as MuiButton, type ButtonProps as MuiButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

type CustomVariant = "primary" | "secondary";
type CustomSize = "small" | "medium" | "large";

interface CustomButtonProps extends Omit<MuiButtonProps, "variant" | "color"> {
  customvariant?: CustomVariant;
  size?: CustomSize;
  children: React.ReactNode;
}

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== "customvariant",
})<{ customvariant?: CustomVariant; size?: CustomSize }>(({ customvariant = "primary", size = "medium" }) => {

  const blueLight = "#1b94cc";
  const blueMedium = "#02618dff";
  const blueDark = "#022738ff";

  // Cyan colors for secondary variant
  const cyanPrimary = "#06b6d4";
  const cyanLight = "#22d3ee";

  const sizeStyles = {
    small: {
      fontSize: "0.8125rem",
      padding: "0.4em 1.2em",
    },
    medium: {
      fontSize: "0.9375rem",
      padding: "0.6em 1.8em",
    },
    large: {
      fontSize: "1.0625rem",
      padding: "0.8em 2.2em",
    },
  };

  // Base styles
  const baseStyles = {
    borderRadius: "8px",
    fontWeight: 600,
    textTransform: "none" as const,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative" as const,
    overflow: "hidden",
    cursor: "pointer",
    border: "none",
    letterSpacing: "0.3px",
    ...sizeStyles[size],
    "&:hover": {
      transform: "translateY(-1px)",
    },
    "&:active": {
      transform: "translateY(0)",
    },
    "&:focus-visible": {
      outline: `2px solid ${blueMedium}`,
      outlineOffset: "1px",
    },
    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
      transform: "none !important",
      filter: "grayscale(0.6)",
    },
  };

  const primaryStyles = {
    background: `linear-gradient(90deg, ${blueLight}, ${blueMedium}, ${blueDark})`,
    color: "#fff",
    boxShadow: `0 0 12px rgba(59, 130, 246, 0.3)`,
    transition: `
    background 800ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 600ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)
  `,
    "&:hover": {
      background: `linear-gradient(90deg, ${blueDark}, ${blueMedium}, ${blueLight})`,
      boxShadow: `0 0 24px rgba(6, 60, 147, 0.5)`,
      animation: "fluidPulse 2.4s infinite cubic-bezier(0.45, 0, 0.55, 1)",
      transform: "translateY(-1px) scale(1.015)",
    },
    "@keyframes fluidPulse": {
      "0%, 100%": {
        boxShadow: `0 0 0 0 rgba(59, 130, 246, 0.3), 0 0 0 0 rgba(255, 255, 255, 0.1)`,
        transform: "translateY(-1px) scale(1.015)"
      },
      "50%": {
        boxShadow: `0 0 0 12px rgba(59, 130, 246, 0), 0 0 0 24px rgba(255, 255, 255, 0)`,
        transform: "translateY(-1px) scale(1.02)"
      },
    },
  };

  const secondaryStyles = {
    background: "transparent",
    color: cyanPrimary,
    border: `1.5px solid ${cyanPrimary}`,
    textShadow: `0 0 4px rgba(6, 182, 212, 0.5)`,
    boxShadow: `inset 0 0 8px rgba(6, 182, 212, 0.3), 0 0 8px rgba(6, 182, 212, 0.3)`,
    "&:hover": {
      boxShadow: `inset 0 0 15px rgba(6, 182, 212, 0.5), 0 0 15px rgba(6, 182, 212, 0.5)`,
      textShadow: `0 0 8px rgba(6, 182, 212, 0.8)`,
      color: cyanLight,
      borderColor: cyanLight,
    },
  };

  return {
    ...baseStyles,
    ...(customvariant === "primary" ? primaryStyles : secondaryStyles),
  };
});

const Button = React.forwardRef<HTMLButtonElement, CustomButtonProps>(({
  customvariant = "primary",
  size = "medium",
  children,
  ...props
}, ref) => (
  <StyledButton
    customvariant={customvariant}
    size={size}
    disableElevation
    ref={ref}
    {...props}
  >
    {children}
  </StyledButton>
));

Button.displayName = 'Button';

export default Button;