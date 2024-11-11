export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary" />
    </div>
  );
} 