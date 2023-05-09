import { AuthProvider } from "context/auth/AuthProvider";
import { LoadingProvider } from "context/loading/LoadingProvider";
import { MessageProvider } from "context/message/MessageProvider";
import { UserProfileProvider } from "context/user/UserProvider";

function ContextProviders({ children }) {
  return (
    <AuthProvider>
      <MessageProvider>
        <LoadingProvider>
          <UserProfileProvider>{children}</UserProfileProvider>
        </LoadingProvider>
      </MessageProvider>
    </AuthProvider>
  );
}

export default ContextProviders;
