import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React from "react";

import { cn } from "@/lib/utils";

const typographyStyles = cva("w-auto text-foreground", {
  variants: {
    size: {
      default: "text-base",
      xxl: "text-5xl font-bold",
      xl: "text-3xl md:text-4xl font-bold",
      lg: "text-2xl font-bold",
      md: "text-xl font-semibold tracking-tight",
      sm: "text-md font-normal tracking-tight",
      xs: "text-sm md:text-base font-semibold",
      xxs: "text-[0.7rem] md:text-sm font-semibold",
      sub: "text-sm text-foreground/80",
      muted: "text-[0.8rem] text-muted-foreground",
      page: "text-xl font-semibold uppercase text-foreground/80",
      error: "text-[0.8rem] font-medium mt-1 text-destructive",
      caption: "text-base font-medium",
      overline: "text-xs uppercase tracking-wide",
    },
    style: {
      blockquote: "mt-6 border-l-2 pl-6 italic",
      link: "font-medium text-primary underline underline-offset-4",
      list: "my-6 ml-6 list-disc",
      table: "my-6 w-full overflow-y-auto",
      tableCell: "border px-4 py-2 text-left",
    },
    align: {
      default: "",
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    color: {
      default: "",
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
      danger: "text-danger",
      warning: "text-warning",
      info: "text-info",
      success: "text-success",
      light: "text-foreground/70",
    },
  },
  defaultVariants: {
    size: "default",
    align: "default",
    color: "default",
  },
});

interface TypographyProps extends VariantProps<typeof typographyStyles> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  as: Component = "p",
  className,
  children,
  ...props
}) => {
  return (
    <Component className={cn(clsx(typographyStyles(props), className))}>
      {children}
    </Component>
  );
};

export default Typography;
