import React, { forwardRef } from "react";

type Props = React.ComponentPropsWithRef<"div"> & {
  borderRadius: `rounded-${string}`;
  gradientBorder: `bg-${string}`;
  borderWidth: `border-${string}`;
};

export const GradientButton = forwardRef<React.ElementRef<"div">, Props>(
  ({ borderRadius, borderWidth, className, gradientBorder, ...props }, ref) => (
    <div
      role="button"
      ref={ref}
      className={`${gradientBorder} ${borderRadius} ${borderWidth}`}
    >
      <div className={`${className} ${borderRadius}`} {...props}>
        {props.children}
      </div>
    </div>
  ),
);

GradientButton.displayName = "GradientButton";

export default GradientButton;
