

<template>
  <div class="students-edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
       <h1>{{ message }}</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        
        <div class="form-group">
          <label>First Name:</label>
          <input type="text" class="form-control" v-model="student.first_name">
        </div>
        <div class="form-group">
          <label>Last Name:</label>
          <input type="text" class="form-control" v-model="student.last_name">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="student.email">
        </div>
        <div class="form-group">
          <label>Phone Number:</label>
          <input type="text" class="form-control" v-model="student.phone_number">
        </div>
        <div class="form-group">
          <label>Short Bio:</label>
          <input type="text" class="form-control" v-model="student.short_bio">
        </div>
        <div class="form-group">
          <label>LinkedIn:</label>
          <input type="text" class="form-control" v-model="student.linkedin_url">
        </div>
        <div class="form-group">
          <label>Twitter:</label>
          <input type="text" class="form-control" v-model="student.twitter_handle">
        </div>
        <div class="form-group">
          <label>Website:</label>
          <input type="text" class="form-control" v-model="student.website_url">
        </div>
        <div class="form-group">
          <label>Online Resume:</label>
          <input type="text" class="form-control" v-model="student.online_resume_url">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
    
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Update Student Info!",
      student: {},
      errors: [],
      student_id: localStorage.getItem("student_id")
    };
  },
  created: function() {
    axios.get(`/api/educations/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.student = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.student.first_name,
        last_name: this.student.last_name,
        email: this.student.email,
        phone_number: this.student.phone_number,
        short_bio: this.student.short_bio,
        linkedin_url: this.student.linkedin_url,
        twitter_handle: this.student.twitter_handle,
        website_url: this.student.website_url,
        online_resume_url: this.student.online_resume_url,  
      };
      axios
        .patch("/api/students/1", params)
        .then(response => {
          this.$router.push("/students/1");
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    },
  }
};
</script>
