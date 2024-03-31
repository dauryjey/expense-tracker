interface SectionContainerProps {
  children?: React.ReactNode;
}

export const SectionContainer = ({ children }: SectionContainerProps) => {
  return <section className="w-full mt-6">{children}</section>;
};
