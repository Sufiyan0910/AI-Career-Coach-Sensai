import React from "react";

const MainLayout = async ({ children }) => {
  // Redirect to Onboarding
  return <div className="container mx-auto mt-24 mb-20">{children}</div>;
};

export default MainLayout;
// npx inngest-cli@latest dev
