const Title = ({ children, style, ...props }) => {
  return (
    <h1 style={{ ...style, fontFamily: "'Zen Antique', serif" }} {...props}>
      {children}
    </h1>
  );
};

export default Title;
