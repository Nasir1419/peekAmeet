import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const Bubble = ({ color, children }) => {
  return (
    <Text style={[styles.Freelancer, { backgroundColor: color }]}>
      {children}
    </Text>
  );
};

const Credentials = {
  email: "bhagyashree.srivastava@daffodilsw.com",
  password: "Hrhk@1234",
};
const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    navigation.navigate("Profile");
    axios
      .post(
        "https://apipeekameet.cloudzmall.com/peekameet/api/v1/public/user/login",
        { email: email, password: password }
      )
      .then((data) => {
        let id, token;
        console.log(data);
        if (data.data.success) {
          data.data.data.map((result) => {
            if (result.customer._id) {
              id = result.customer._id;
              token = result.token;
              navigation.navigate("Profile", { id: id, token: token });
            }
          });
        } else {
          console.log("Invalid username");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View>
      <View style={styles.heading}>
        <Text style={styles.PeekaMeet}>
          PEEKaMEET
          <Text style={styles.smallPeekaMeet}>
            lets you network more effectively to achieve your business and
            career goals
          </Text>
        </Text>
      </View>
      <View style={styles.options}>
        <Bubble color="red">Freelancer</Bubble>
        <Bubble color="blue">JobSeeker</Bubble>
        <Text style={styles.JobSeeker}>Job Seeker</Text>
        <Text style={styles.Enterpreneur}>Enterpreneur</Text>
        <Text style={styles.Mompreneur}>Mompreneur</Text>
        <Text style={styles.Internship}>Internship Seeker</Text>
        <Text style={styles.Environment}>Environmental Change Maker</Text>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 20,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: "400",
          }}
        >
          Build and manage your network with PEEKaMEET{" "}
        </Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.Input}
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={(newEmail) => setEmail(newEmail)}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.Input}
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          onChangeText={(newPassword) => setPassword(newPassword)}
        />
      </View>
      <TouchableOpacity onPress={login}>
        <View style={styles.SignIn}>
          <Text
            style={{
              alignSelf: "center",
              color: "white",
              marginVertical: 7,
              fontWeight: "bold",
            }}
          >
            Sign In
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.foot}>
        <View>
          <Text style={styles.RememberMe}>Remember me </Text>
        </View>
        <View>
          <Text style={styles.ForgotPassword}>Forgot Password</Text>
        </View>
      </View>
      <View style={{ margin: 20 }}>
        <Text style={styles.SignUp}>Don't have an account? Sign Up</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: { margin: 20, borderWidth: 1, borderColor: "blue" },
  label: { marginVertical: 10, color: "#a3a3a3", fontWeight: "bold" },
  Input: {
    borderWidth: 2,
    borderColor: "#6fc965",
    borderRadius: 5,
    height: 40,
    padding: 6,
    fontWeight: "bold",
  },
  foot: { flexDirection: "row", marginHorizontal: 20, marginVertical: 20 },
  RememberMe: { color: "#9c9c9c" },
  ForgotPassword: {
    marginLeft: 165,
    textDecorationLine: "underline",
    color: "#9c9c9c",
  },
  SignIn: {
    borderWidth: 2,
    margin: 20,
    height: 40,
    backgroundColor: "#26a64b",
    borderColor: "#26a64b",
    overflow: "hidden",
    borderRadius: 5,
  },
  SignUp: { alignSelf: "center", fontWeight: "bold", color: "#878686" },
  form: { marginHorizontal: 20 },
  PeekaMeet: { fontSize: 20, fontWeight: "bold" },
  smallPeekaMeet: { fontSize: 17, fontWeight: "400" },
  options: { flexDirection: "row", flexWrap: "wrap" },
  Freelancer: {
    borderWidth: 1,
    borderRadius: 11,
    padding: 5,
    marginHorizontal: 10,
    fontSize: 12,
    marginBottom: 10,
    color: "#f49e65",
    borderColor: "#fce7d9",
    backgroundColor: "#fce7d9",
    fontWeight: "bold",
    overflow: "hidden",
  },
  JobSeeker: {
    borderWidth: 0.1,
    borderRadius: 11,
    padding: 5,
    marginHorizontal: 10,
    fontSize: 12,
    marginBottom: 10,
    color: "#af66aa",
    backgroundColor: "#ecdbeb",
    borderColor: "#ecdbeb",
    fontWeight: "bold",
    overflow: "hidden",
  },
  Enterpreneur: {
    borderWidth: 0.1,
    borderRadius: 11,
    padding: 5,
    marginHorizontal: 10,
    fontSize: 12,
    marginBottom: 10,
    color: "#65b6b3",
    borderColor: "#d6eceb",
    backgroundColor: "#d6eceb",
    fontWeight: "bold",
    overflow: "hidden",
  },
  Mompreneur: {
    borderWidth: 0.1,
    borderRadius: 11,
    padding: 5,
    marginHorizontal: 10,
    fontSize: 12,
    marginBottom: 10,
    color: "#e84d94",
    borderColor: "#fadae9",
    backgroundColor: "#fadae9",
    fontWeight: "bold",
    overflow: "hidden",
  },
  Internship: {
    borderWidth: 0.1,
    borderRadius: 11,
    padding: 5,
    marginHorizontal: 10,
    fontSize: 12,
    marginBottom: 10,
    color: "#59a4c5",
    backgroundColor: "#d4eaf2",
    borderColor: "#d4eaf2",
    fontWeight: "bold",
    marginLeft: 55,
    overflow: "hidden",
  },
  Environment: {
    borderWidth: 0.1,
    borderRadius: 11,
    padding: 5,
    marginHorizontal: 10,
    fontSize: 12,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#ec565d",
    backgroundColor: "#fbd7d9",
    borderColor: "#fbd7d9",
    overflow: "hidden",
  },
});

export default SignInScreen;
