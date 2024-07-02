interface Props {
  current?: number;
  total?: number;
}
export default function Packed({ current = 0, total = 3 }: Props) {
  return (
    <div className="text-lg font-normal tracking-[1px] opacity-70">
      <span className=" font-[500]">{current}</span> / {total} Items Packed
    </div>
  );
}
