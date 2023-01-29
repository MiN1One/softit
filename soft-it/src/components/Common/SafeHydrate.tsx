import { DetailedHTMLProps, FC, HTMLAttributes, useEffect, useState } from "react";

interface SafeHydrateProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>, 
  HTMLDivElement
> {
  children: React.ReactNode;
  releaseContent?: boolean;
}

const SafeHydrate: FC<SafeHydrateProps> = ({
  children,
  releaseContent,
  ...restProps
}) => {
  const [contentRendered, setContentRendered] = useState(false);

  useEffect(() => {
    setContentRendered(true);
  }, []);

  if (!contentRendered) return null;

  return (
    <div
      suppressHydrationWarning
      {...restProps}
      style={{
        ...restProps.style,
        display: releaseContent ? 'contents' : undefined
      }}
    >
      {typeof window === 'undefined' ? null : children}
    </div>
  );
};

export default SafeHydrate;