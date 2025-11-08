export const MovieSection = ({ title, children }) => {
  return (
    <section>
      <h2 className="text-white text-xl font-bold mb-4">{title}</h2>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-custom">
        {children}
      </div>
      <style jsx>{`
        .scrollbar-custom::-webkit-scrollbar {
          height: 8px;
        }
        
        .scrollbar-custom::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #e74c3c, #c0392b);
          border-radius: 10px;
          transition: background 0.3s ease;
        }
        
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(90deg, #c0392b, #e74c3c);
        }
        
        /* Para Firefox */
        .scrollbar-custom {
          scrollbar-width: thin;
          scrollbar-color: #e74c3c rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </section>
  );
};