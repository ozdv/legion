import clsx from "clsx";

export function Container({
  className,
  nopadding,
  horizontalOnly,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  nopadding?: boolean;
  horizontalOnly?: boolean;
}) {
  return (
    <div
      className={clsx(
        "mx-auto max-w-7xl",
        className,
        nopadding ? "" : "px-4 sm:px-6 lg:px-8",
        horizontalOnly ? "" : "py-4 md:py-6"
      )}
      {...props}
    />
  );
}
