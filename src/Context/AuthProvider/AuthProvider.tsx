import { createContext, useEffect, useState, ReactNode } from "react";
import app from "../../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  User,
  UserCredential,
  GoogleAuthProvider,
} from "firebase/auth";

interface AuthContextType {
  createUser: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  updateUserProfile: (name: string) => Promise<void>;
  user: User | null;
  logOut: () => Promise<void>;
  loading: boolean;
  googleSignIn: () => Promise<UserCredential>;
}

// Default value for the context
const defaultAuthContext: AuthContextType = {
  createUser: async () => {
    throw new Error("createUser function is not implemented");
  },
  login: async () => {
    throw new Error("login function is not implemented");
  },
  updateUserProfile: async () => {
    throw new Error("updateUserProfile function is not implemented");
  },
  user: null,
  logOut: async () => {
    throw new Error("logOut function is not implemented");
  },
  loading: true,
  googleSignIn: async () => {
    throw new Error("googleSignIn function is not implemented");
  },
};

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);
const auth = getAuth(app);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name: string) => {
    return updateProfile(auth.currentUser!, {
      displayName: name,
    });
  };
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo: AuthContextType = {
    createUser,
    login,
    updateUserProfile,
    user,
    logOut,
    loading,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
