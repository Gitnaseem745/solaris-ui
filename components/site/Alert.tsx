const DocsAlert: React.FC = () => {
  return (
        <div
          className="fixed top-0 left-0 right-0 bg-indigo-600 text-white p-4 z-50 max-sm:hidden"
        >
          <div className="container px-32 mx-auto flex justify-start items-center font-sans">
            <span> <b> Important Notice: </b> Solaris is currently in development. Some components may not function as expected. I appreciate your patience as i actively work to improve and enhance the library. Stay tuned for updates and thank you for your support!</span>
          </div>
        </div>
      )
};

export default DocsAlert;
