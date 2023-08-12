import { Section } from './Sections.styled';

export const Sections = ({ title, children }) => {
  return (
    <Section>
      <h2>{title}</h2>
      <>{children}</>
    </Section>
  );
};
