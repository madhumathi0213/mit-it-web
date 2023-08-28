import React from "react";
import Header from "../components/Header/Header";
import PeopleContent from "../components/people/PeopleContent";
import Layout from "../components/layout/Layout";
import StudentCornerContent from "../components/studentsCorner/StudentCornerContent";

const StudentCorner = () => {
  return (
    <Layout>
      <Header />
      <StudentCornerContent />
    </Layout>
  )
}
export default StudentCorner;