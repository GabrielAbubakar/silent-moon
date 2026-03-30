import BackgroundGraphic from "@/assets/images/background-graphic.svg";
import Facebook from "@/assets/images/facebook.svg";
import Google from "@/assets/images/google.svg";
import {
  BaseButton,
  BaseText,
  ControlledCheckbox,
  ControlledInput,
  ControlledPasswordInput,
} from "@/components/ui";
import { ScreenLayout } from "@/components/ui/ScreenLayout";
import { Colors } from "@/constants";
import { SignUpFormData, signUpSchema } from "@/lib/schemas";
import { Ionicons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

export default function Register() {
  const { control, handleSubmit } = useForm<SignUpFormData>({
    mode: "onChange",
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      privacyPolicy: false,
    },
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log("Form Submitted:", data);
    router.replace({
      pathname: "/welcome",
      params: {
        name: data.username,
      },
    });
  };

  return (
    <ScreenLayout>
      {/* BACKGROUND GRAPHIC */}
      <View style={styles.backgroundContainer}>
        <BackgroundGraphic
          width="100%"
          height={350}
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
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <Ionicons
                name="arrow-back"
                size={24}
                color={Colors.light.textPrimary}
              />
            </TouchableOpacity>
            <BaseText preset="header" style={styles.title}>
              Create your account
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
          {/* <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 44 : 10}
            style={styles.formContainer}
          > */}
          <View>
            <ControlledInput
              control={control}
              name="username"
              placeholder="Username"
            />
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

            {/* PRIVACY POLICY CHECKBOX */}
            <ControlledCheckbox
              control={control}
              name="privacyPolicy"
              containerStyle={styles.checkboxContainer}
            >
              <BaseText preset="subtitle" style={styles.checkboxText}>
                i have read the{" "}
                <BaseText preset="subtitle" style={{ color: "#7583CA" }}>
                  Privacy Policy
                </BaseText>
              </BaseText>
            </ControlledCheckbox>

            <BaseButton
              onPress={handleSubmit(onSubmit)}
              title="GET STARTED"
              style={{ marginTop: 20, marginBottom: 40 }}
            />
          </View>
          {/* </KeyboardAvoidingView> */}
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
    top: -16,
    left: -16,
    right: -16,
    zIndex: -1,
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
  checkboxContainer: {
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 5,
  },
  checkboxText: {
    color: Colors.light.textSecondary,
    fontSize: 14,
  },
});
