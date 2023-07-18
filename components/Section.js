export default function Section({ children }) {
  return (
    <div className="w-full lg:w-[1024px] xl:w-[1280px] flex justify-center my-10 p-5">
      <div>{children}</div>
    </div>
  );
}
