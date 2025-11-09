import { Logo } from "../common/logo";

export const Header = ({ userEmail }) => {
  return (
    <div className="bg-gray-900 px-4 pt-4 pb-4 sticky top-0 z-10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Logo size="small" />
        </div>
        <div className="text-white text-xs">{userEmail}</div>
      </div>
    </div>
  );
};