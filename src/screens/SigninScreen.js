import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign in for Tracker"
        errorMessage={state.errorMessage}
        submitBtnText="Sign In"
        onSubmit={signin}
      />
      <NavLink routeName="Signup" text="Dont have an account? Sign up" />
    </View>
  );
};
SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SigninScreen;
