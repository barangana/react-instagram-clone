import { useEffect } from "react";

function Notfound() {
  useEffect(() => {
    document.title = "Not Found - Instagram";
  }, []);

  return (
    <div className="bg-gray-background">
      <div className="mx-auth max-w-screen-lg">
        <p className="text-center text2-xl">Not found</p>
      </div>
    </div>
  );
}

export default Notfound;
