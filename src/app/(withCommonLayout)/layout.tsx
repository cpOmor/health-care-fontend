import Navbar from "@/components/shared/Navbar/page";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div> {children} </div>
      this is a Footer
    </>
  );
};
export default CommonLayout;
