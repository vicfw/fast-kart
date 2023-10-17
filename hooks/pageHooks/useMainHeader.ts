import { useState } from "react";

export const useMainHeader = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const handleToggleMobileSearch = () => {
    setShowMobileSearch((perv) => !perv);
  };

  return {
    get: { showMobileSearch },
    set: {},
    on: { handleToggleMobileSearch },
  };
};
