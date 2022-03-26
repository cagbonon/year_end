export const msalConfig = {
    auth: {
        clientId: "e638dbba-b109-4047-aa18-8b1d548cf372",
        authority: "https://login.microsoftonline.com/common",
        clientSecret: "8e9986bf-f07e-48ad-949e-aff603a403c1"
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
  };