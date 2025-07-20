
interface IsOpen {
  isOpen: boolean;
}

export function Overlay({ isOpen }: IsOpen) {


  return (
    <div
      className={`fixed inset-0  bg-black/50 z-40 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    />
  );
}
