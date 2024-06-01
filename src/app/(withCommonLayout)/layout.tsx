const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      this is a navbar
      <div> {children} </div>
      this is a Footer
    </>
  );
};
export default CommonLayout;
