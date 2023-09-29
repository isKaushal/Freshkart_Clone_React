export default function Section({ children, style }) {
  return (
    <div style={style} className="flex justify-center my-20 ">
      <div className="w-full lg:w-[1024px] xl:w-[1280px] p-5">{children}</div>
    </div>
  );
}
