import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import axios from "axios";

const contents = {
  groupCopy: { path: require("../Images/group-copy_3.png") },
  playButton: { path: require("../Images/play-circle-filled.png") },
  share: { path: require("../Images/share-24-px_2.png") },
  edit: { path: require("../Images/share-24-px_3.png") },
};

const Profile = ({ navigation }) => {
  let token, id;
  let Name = "";
  let JobTitle = "";
  id = navigation.getParam("id");
  token = navigation.getParam("token");
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [industry, setIndustry] = useState([]);
  const [alumni, setAlumni] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [organisationAndGroups, setOrganisationAndGroups] = useState([]);
  const [interestActivities, setInterestActivities] = useState([]);
  useEffect(() => {
    axios
      .get("https://apipeekameet.cloudzmall.com/peekameet/api/v1/user/nearby", {
        params: { userId: id },
        headers: { Authorization: token },
      })
      .then((result) => {
        console.log("Hey");
        console.log(result.data.data);
        result.data.data.map((item) => {
          if (item.firstName) {
            Name = Name + item.firstName + " ";
          }
          if (item.lastName) {
            Name = Name + item.lastName;
          }
          if (item.jobTitle) {
            setJobTitle(item.jobTitle);
          }
          if (item.company) {
            setCompany(item.company);
          }
          if (item.tagline) {
            setTagLine(item.tagline);
          }
          if (item.industry) {
            setIndustry(item.industry);
          }
          if (item.organisationGroups) {
            setOrganisationAndGroups(item.organisationGroups);
          }
          if (item.interestActivities) {
            setInterestActivities(item.interestActivities);
          }
          if (item.alumni) {
            setAlumni(item.alumni);
          }
          if (item.languages) {
            setLanguages(item.languages);
          }
        });
        setName(Name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ScrollView>
      <Image source={contents.groupCopy.path} />
      <View>
        <View style={styles.basicInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.jobTitle}>{jobTitle}</Text>
          <Text style={styles.company}>{company}</Text>
          <Image style={{ margin: 10 }} source={contents.playButton.path} />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity>
            <View style={styles.ShareButton}>
              <Text
                style={{
                  alignSelf: "center",
                  color: "white",
                  marginVertical: 7,
                  fontWeight: "600",
                }}
              >
                Share
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.ShareButton}>
              <Text
                style={{
                  alignSelf: "center",
                  color: "white",
                  marginVertical: 7,
                  fontWeight: "600",
                }}
              >
                Edit Profile
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.paragraph}>
          <View>
            <Text style={styles.tagLine}>{tagLine}</Text>
            <Text style={styles.tagLinePara}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tristique pharetra dui sed lobortis. Vivamus aliquet purus ut nisl
              faucibus faucibus. Vivamus nec turpis a
            </Text>
          </View>
        </View>
        <View style={styles.allInfo}>
          <Text style={styles.allInfoHeading}>Industry</Text>
          <SafeAreaView>
            <FlatList
              style={{ flexDirection: "row" }}
              keyExtractor={(item) => item}
              data={industry}
              renderItem={({ item }) => {
                return (
                  <View style={styles.list}>
                    <Text style={styles.Industry}>{item}</Text>
                  </View>
                );
              }}
            />
          </SafeAreaView>
        </View>
        <View style={styles.allInfo}>
          <Text style={styles.allInfoHeading}>Organisations and groups</Text>
          <SafeAreaView>
            <FlatList
              style={{ flexDirection: "row" }}
              keyExtractor={(item) => item}
              data={organisationAndGroups}
              renderItem={({ item }) => {
                return (
                  <View style={styles.list}>
                    <Text style={styles.Organisation}>{item}</Text>
                  </View>
                );
              }}
            />
          </SafeAreaView>
        </View>
        <View style={styles.allInfo}>
          <Text style={styles.allInfoHeading}>Interests and Activities</Text>
          <SafeAreaView>
            <FlatList
              style={{ flexDirection: "row" }}
              keyExtractor={(item) => item}
              data={interestActivities}
              renderItem={({ item }) => {
                return (
                  <View style={styles.list}>
                    <Text style={styles.Interest}>{item}</Text>
                  </View>
                );
              }}
            />
          </SafeAreaView>
        </View>
        <View style={styles.allInfo}>
          <Text style={styles.allInfoHeading}>Alumni</Text>
          <SafeAreaView>
            <FlatList
              style={{ flexDirection: "row" }}
              keyExtractor={(item) => item}
              data={alumni}
              renderItem={({ item }) => {
                return (
                  <View style={styles.list}>
                    <Text style={styles.Alumni}>{item}</Text>
                  </View>
                );
              }}
            />
          </SafeAreaView>
        </View>
        <View style={styles.allInfo}>
          <Text style={styles.allInfoHeading}>Languages</Text>
          <SafeAreaView>
            <FlatList
              style={{ flexDirection: "row" }}
              keyExtractor={(item) => item}
              data={languages}
              renderItem={({ item }) => {
                return (
                  <View style={styles.list}>
                    <Text style={styles.Languages}>{item}</Text>
                  </View>
                );
              }}
            />
          </SafeAreaView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tagLine: {
    alignSelf: "center",
    fontSize: 20,
    marginHorizontal: 50,
    marginVertical: 10,
    fontWeight: "500",
    color: "#152d4e",
  },
  tagLinePara: {
    alignSelf: "center",
    fontSize: 14,
    marginHorizontal: 20,
    marginTop: 5,
    fontWeight: "500",
    color: "#152d4e",
  },
  basicInfo: { alignItems: "center" },
  allInfo: { marginHorizontal: 20, marginVertical: 25 },
  paragraph: { height: 150 },
  allInfoHeading: { color: "#9ea0a3" },
  name: {
    width: 200,
    height: 21,
    fontFamily: "DMSans",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#152d4e",
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  ShareButton: {
    borderWidth: 2,
    width: 180,
    height: 40,
    backgroundColor: "#26a64b",
    borderColor: "#26a64b",
    overflow: "hidden",
    borderRadius: 5,
  },
  jobTitle: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    color: "#152d4e",
    margin: 5,
  },
  company: {
    fontFamily: "DMSans-Bold",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    color: "#152d4e",
    margin: 5,
  },
  list: {
    borderWidth: 0.1,
    borderRadius: 11,
    padding: 5,
    marginVertical: 5,
    fontSize: 12,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#ec565d",
    backgroundColor: "#fbd7d9",
    borderColor: "#fbd7d9",
    overflow: "hidden",
    paddingHorizontal: 10,
  },
  Industry: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#f17c2b",
    textAlign: "center",
  },
  Organisation: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#96368f",
    textAlign: "center",
  },
  Interest: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#1a9691",
    textAlign: "center",
  },
  Alumni: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#cc5e69",
    textAlign: "center",
  },
  Languages: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#617ae8",
    textAlign: "center",
  },
});

export default Profile;

// first name last name job title company [languages], [industry] , [organisation and group] ,[alumini] business address
// pragyanshu.sharma@daffodilsw.com
// Qwerty123@
