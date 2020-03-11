<template>
  <div class="students-show">
    <h3>First Name: {{ student.first_name }}</h3>
    <h3>Last Name: {{ student.last_name }}</h3>
    <h3>Email: {{ student.email }}</h3>
    <h3>Phone Number: {{ student.phone_number }}</h3>
    <h3>Bio: {{ student.short_bio }}</h3>
    <h3>Linkedin: {{ student.linkedin_url }}</h3>
    <h3>Twitter: {{ student.twitter_handle }}</h3>
    <h3>Website: {{ student.website_url }}</h3>
    <h3>Resume: {{ student.online_resume_url }}</h3>
    <h3>Github: {{ student.github_url }}</h3>
    <h3>Photo: {{ student.photo }}</h3>
    <div v-for="education in student.educations">
      <h1>Education</h1>
      <p>Start Date: {{ education.start_date }}</p>
      <p>End Date: {{ education.end_date }}</p>
      <p>Degree: {{ education.degree }}</p>
      <p>University: {{ education.university_name }}</p>
      <p>Details: {{ education.details }}</p>
      <router-link :to="`/educations/${education.id}/edit`">Edit</router-link>
    </div>
    <div v-for="experience in student.experiences">
      <h1>Experience</h1>
      <p>Start Date: {{ experience.start_date }}</p>
      <p>End Date: {{ experience.end_date }}</p>
      <p>Job Title: {{ experience.job_title }}</p>
      <p>Company: {{ experience.company_name }}</p>
      <p>Details: {{ experience.details }}</p>
    </div>
    <div v-for="capstone in student.capstones">
      <h1>Capstone</h1>
      <p>Name: {{ capstone.name }}</p>
      <p>description: {{ capstone.description }}</p>
      <p>Url: {{ capstone.url }}</p>
      <p>Screenshot: {{ capstone.screenshot }}</p>
    </div>
    <div v-for="skill in student.skills">
      <h1>Skill</h1>
      <p>Name: {{ skill.name }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      student: {}
    };
  },
  created: function() {
    axios.get(`/api/students/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.student = response.data;
    });
  },
  methods: {}
};
</script>
