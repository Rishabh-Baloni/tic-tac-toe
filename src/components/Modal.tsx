import React from 'react';

interface ModalProps {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, title, children, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0C0A1D]/90 animate-fade-in">
      <div className="p-10 rounded-2xl shadow-xl min-w-[340px] flex flex-col items-center bg-[#18162a]/90 border border-[#00F6FF66] backdrop-blur-md">
        <h2 className="text-4xl font-extrabold mb-8 text-white tracking-widest text-center" style={{textShadow: '0 0 8px #00F6FF44'}}>{title}</h2>
        <div className="flex flex-row justify-center gap-8 mb-10 w-full">
          {/* Place action buttons here, expect parent to pass them in as children */}
          {children}
        </div>
        <button
          className="px-10 py-4 bg-gradient-to-r from-[#00F6FF] to-[#FF00C1] text-white rounded-2xl shadow-xl border-2 border-[#00F6FF] hover:scale-105 hover:brightness-110 active:scale-95 transition font-bold text-xl"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
