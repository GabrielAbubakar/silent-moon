import BackgroundGraphic from "@/assets/images/background-graphic.svg";
import Facebook from "@/assets/images/facebook.svg";
import Google from "@/assets/images/google.svg";
import {
  BaseButton,
  BaseText,
  ControlledInput,
  ControlledPasswordInput,
  CustomTouchableOpacity,
} from "@/components/ui";
import { ScreenLayout } from "@/components/ui/ScreenLayout";
import { Colors } from "@/constants";
import { SignInFormData, signInSchema } from "@/lib/schemas";
import { Ionicons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Login() {
  const { control, handleSubmit } = useForm<SignInFormData>({
    mode: "onChange",
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignInFormData) => {
    console.log("Form Submitted:", data);
    router.replace("/(tabs)/home");
  };

  return (
    <ScreenLayout>
      {/* BACKGROUND GRAPHIC (Absolute positioned at the top) */}
      <View style={styles.backgroundContainer}>
        <BackgroundGraphic
          width="100%"
          height={300}
          preserveAspectRatio="none"
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.container}>
          {/* HEADER SECTION */}
          <View style={styles.headerContainer}>
            <CustomTouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <Ionicons
                name="arrow-back"
                size={24}
                color={Colors.light.textPrimary}
              />
            </CustomTouchableOpacity>
            <BaseText preset="header" style={styles.title}>
              Welcome Back!
            </BaseText>
          </View>

          {/* SOCIAL LOGIN BUTTONS */}
          <View style={styles.socialContainer}>
            <BaseButton
              title="CONTINUE WITH FACEBOOK"
              style={{
                backgroundColor: "#7583CA",
                borderWidth: 0,
                marginBottom: 15,
              }}
              leftIcon={<Facebook />}
            />
            <BaseButton
              title="CONTINUE WITH GOOGLE"
              variant="outline"
              style={{
                borderColor: "#EBEAEC",
                borderWidth: 1,
                backgroundColor: "#FFFFFF",
              }}
              leftIcon={<Google />}
              textStyle={{ color: Colors.light.textPrimary }}
            />
          </View>

          <BaseText variant="bold" style={styles.dividerText}>
            OR LOG IN WITH EMAIL
          </BaseText>

          {/* FORM SECTION */}
          <View>
            <ControlledInput
              control={control}
              name="email"
              placeholder="Email address"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <ControlledPasswordInput
              control={control}
              name="password"
              placeholder="Password"
            />

            <BaseButton
              onPress={handleSubmit(onSubmit)}
              title="LOG IN"
              style={{ marginTop: 10, marginBottom: 20 }}
            />

            <CustomTouchableOpacity>
              <BaseText preset="subtitle" style={styles.forgotPassword}>
                Forgot Password?
              </BaseText>
            </CustomTouchableOpacity>
          </View>
          {/* </KeyboardAvoidingView> */}

          {/* FOOTER SECTION */}
          <View style={styles.footer}>
            <BaseText
              size="sm"
              variant="bold"
              style={{ color: Colors.light.textSecondary }}
            >
              ALREADY HAVE AN ACCOUNT?
            </BaseText>
            <CustomTouchableOpacity
              hitSlop={1}
              onPress={() => router.push("/register")}
            >
              <BaseText
                size="sm"
                style={{ color: Colors.light.primary, marginLeft: 5 }}
              >
                SIGN UP
              </BaseText>
            </CustomTouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    position: "absolute",
    top: -16, // Assuming ScreenLayout has 16 padding
    left: -16,
    right: -16,
    zIndex: -1, // Keep it behind the content
  },
  headerContainer: {
    paddingTop: 10,
    marginBottom: 40,
  },
  backButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#EBEAEC",
    marginBottom: 40,
  },
  title: {
    textAlign: "center",
  },
  socialContainer: {
    marginBottom: 30,
  },
  dividerText: {
    textAlign: "center",
    color: Colors.light.textSecondary,
    marginBottom: 30,
    fontSize: 14,
    textTransform: "uppercase",
  },
  formContainer: {
    flex: 1,
  },
  forgotPassword: {
    textAlign: "center",
    color: Colors.light.textPrimary,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});
