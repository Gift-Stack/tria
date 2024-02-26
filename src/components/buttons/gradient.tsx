import React, { forwardRef } from "react";

type Props = React.ComponentPropsWithRef<"div"> & {
  borderRadius: string;
  gradientBorder: string;
  borderWidth: `${number}` | number | `[${string}px]`;
};

export const GradientButton = forwardRef<React.ElementRef<"div">, Props>(
  ({ borderRadius, borderWidth, className, gradientBorder, ...props }, ref) => (
    <div
      role="button"
      ref={ref}
      className={`bg-${gradientBorder} rounded-${borderRadius} p-${borderWidth}`}
    >
      <div className={`${className} rounded-${borderRadius}`} {...props}>
        {props.children}
      </div>
    </div>
  ),
);

GradientButton.displayName = "GradientButton";

export default GradientButton;
