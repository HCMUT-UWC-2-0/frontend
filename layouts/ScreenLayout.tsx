export const ScreenLayout: IComponent = ({ children }) => {
  return (
    <div className="">
      <header className="flex mt-4 px-8 justify-between items-center">
        <h1>UWC - 2.0</h1>
        <div className="flex items-center">
          <div className="w-12 h-12 p-2 rounded-full bg-black text-white">
            img
          </div>
          <span>Account&apos;s name</span>
        </div>
      </header>
      <div>{children}</div>
    </div>
  );
};
