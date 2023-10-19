export default function ModalBackdrop({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed top-0 h-[100dvh] w-full max-w-[500px] bg-black/50">
      {children}
    </div>
  );
}
