function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-sm font-medium text-slate-400 transition-colors hover:text-slate-700"
          >
            Close
          </button>
        </div>
        <div className="pt-4">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
