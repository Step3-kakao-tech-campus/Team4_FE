export default function ModalBackdrop({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed left-0 top-0 z-[100] h-[100dvh] w-full bg-black/50">
      <div className="absolute left-1/2 top-1/2 flex w-full max-w-[500px] -translate-x-1/2 -translate-y-1/2 justify-center">
        {children}
      </div>
    </div>
  );
}
