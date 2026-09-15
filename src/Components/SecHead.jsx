// Standardizes the eyebrow label and heading style used by page sections.
const SecHead = ({ title, heading, className }) => {
  return (
    <div className={` w-200.25 mx-auto ${className}`}>
      <h5 className="flex items-center gap-2.5 text-sm font-semibold">
        <span className="size-1.5 bg-primary rounded-full"></span>
        {title}
      </h5>
      <h2 className="text-[48px] font-semibold pt-10">{heading}</h2>
    </div>
  );
};

export default SecHead;
