type RowMetadataProps = {
  desc: string;
  value: string;
};

export const RowMetadata = ({ desc, value }: RowMetadataProps) => {
  return (
    <div className="relative grid h-[2.125rem] grid-cols-2 items-center">
      <span className="block flex-shrink-0 text-xs font-semibold">{desc}</span>
      <span className="relative block font-mono text-xs text-[#7D7D7E]">
        <span className="block w-full truncate">{value}</span>
      </span>
    </div>
  );
};
