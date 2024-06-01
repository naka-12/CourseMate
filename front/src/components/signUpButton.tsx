import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { TouchableOpacity } from "react-native";

import Button from "./Button";
import { auth } from "../firebase/firebaseconfig";
import signInWithGoogle from "../utils/signInWithGoogle";

const SignUpButton = (): JSX.Element => {
  const router = useRouter();
  return (
    <Button
      label="Sign Up"
      onPress={async () => {
        await signInWithGoogle();
        router.push("/signUp");
      }}
    />
  );
};

export default SignUpButton;
