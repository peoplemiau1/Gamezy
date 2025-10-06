import React from 'react';

const Card = React.forwardRef(({
  className = "",
  ...props
}, ref) => {
  const combinedClassName = `rounded-xl border bg-card text-card-foreground shadow ${className}`.trim();

  return (
    <div
      ref={ref}
      className={combinedClassName}
      {...props}
    />
  );
});

Card.displayName = "Card";

const CardHeader = React.forwardRef(({
  className = "",
  ...props
}, ref) => {
  const combinedClassName = `flex flex-col space-y-1.5 p-6 ${className}`.trim();

  return (
    <div
      ref={ref}
      className={combinedClassName}
      {...props}
    />
  );
});

CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({
  className = "",
  ...props
}, ref) => {
  const combinedClassName = `font-semibold leading-none tracking-tight ${className}`.trim();

  return (
    <h3
      ref={ref}
      className={combinedClassName}
      {...props}
    />
  );
});

CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef(({
  className = "",
  ...props
}, ref) => {
  const combinedClassName = `p-6 pt-0 ${className}`.trim();

  return (
    <div
      ref={ref}
      className={combinedClassName}
      {...props}
    />
  );
});

CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardContent };
