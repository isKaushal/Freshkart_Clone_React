export default function Button({ label = "Download Now", link }) {
  return (
    <div className="flex">
      <a href="">
        <div className="bg-[#fa8827] font-medium text-white px-4 py-3 rounded-md ">
          {label}
        </div>
      </a>
    </div>
  );
}
