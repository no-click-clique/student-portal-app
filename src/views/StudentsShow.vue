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
    <!-- <div v-for="student in student.education">
      <p>{{ student.degree }}</p>
    </div> -->
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
