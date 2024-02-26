export default function ImageButton({
  image,
  onClick,
  className,
}: {
  image: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button className={className} onClick={onClick}>
      <img src={image} alt="button" />
    </button>
  );
}
