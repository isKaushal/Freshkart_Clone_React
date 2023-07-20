export default function Button({ label = "Download Now", link }) {
  return (
    <div className="flex m-2">
      <a href={link}>
        <div className="bg-[#fa8827] font-medium text-white px-4 py-3 rounded-md hover:bg-[#3c3c3b] transition-colors cursor-pointer">{label}</div>
      </a>
    </div>
  );
}
