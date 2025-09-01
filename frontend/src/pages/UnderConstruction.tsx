import React from "react";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import underConstruction from "/Under-construction.png";

const UnderConstruction: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 pb-10 
    via-white to-blue-50 dark:from-slate-950 dark:via-gray-900 dark:to-blue-900 px-4 pt-18">
      <img
        src={underConstruction}
        alt="Under Construction"
        className="w-64 h-64 object-contain mb-6"
      />
      <h1 className="text-3xl text-center md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
        Page Under Construction
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center max-w-md">
        Sorry, this page is not available yet. We're working on it to bring it to you soon!
      </p>
      <Button customvariant="primary" size="large" onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </div>
  );
};

export default UnderConstruction;