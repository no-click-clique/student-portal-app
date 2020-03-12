<template>
  <div class="experiences-edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
       <h1>{{ message }}</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
       
        
        <div class="form-group">
          <label>Start Date:</label>
          <input type="text" class="form-control" v-model="experience.start_date">
        </div>
        <div class="form-group">
          <label>End Date:</label>
          <input type="text" class="form-control" v-model="experience.end_date">
        </div>
        <div class="form-group">
          <label>Job Title:</label>
          <input type="text" class="form-control" v-model="experience.job_title">
        </div>
        <div class="form-group">
          <label>Company:</label>
          <input type="text" class="form-control" v-model="experience.company_name">
        </div>
        <div class="form-group">
          <label>Details</label>
          <input type="text" class="form-control" v-model="experience.details">
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
      message: "Update Experience Info!",
      experience: {},
      errors: [],
      student_id: localStorage.getItem("student_id")
    };
  },
  created: function() {
    axios.get(`/api/experiences/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.experience = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
        start_date: this.experience.start_date,
        end_date: this.experience.end_date,
        job_title: this.experience.job_title,
        company_name: this.experience.company_name,
        details: this.experience.details,
      };
      axios
        .patch(`/api/experiences/${this.experience.id}`, params)
        .then(response => {
          this.$router.push(`/students/${this.student_id}`);
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    },
  }
};
</script>