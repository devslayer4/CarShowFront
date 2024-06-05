import React, { JSX, SVGProps, useState } from "react";
import { useAuthStore } from "@/components/forms/store/authStore";

export default function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  const { isAuthenticated, username } = useAuthStore();
  const [showPopup, setShowPopup] = useState(false);

  const handleIconClick = () => {
    if (isAuthenticated) {
      setShowPopup(true);
    }
  };

  return (
    <div>
      <svg
        {...props}
        onClick={handleIconClick}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 w-full max-w-md">
            <p>Vous êtes déjà authentifié en tant que {username}</p>
            <button onClick={() => setShowPopup(false)}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
}