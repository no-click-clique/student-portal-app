<template>
  <div class="educations-edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
       <h1>{{ message }}</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        {{ education }}
        
        <div class="form-group">
          <label>Start Date:</label>
          <input type="text" class="form-control" v-model="education.start_date">
        </div>
        <div class="form-group">
          <label>End Date:</label>
          <input type="text" class="form-control" v-model="education.end_date">
        </div>
        <div class="form-group">
          <label>Degree:</label>
          <input type="email" class="form-control" v-model="education.degree">
        </div>
        <div class="form-group">
          <label>University</label>
          <input type="text" class="form-control" v-model="education.university">
        </div>
        <div class="form-group">
          <label>Details</label>
          <input type="text" class="form-control" v-model="education.details">
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
      message: "Update Education Info!",
      education: {},
      errors: []
    };
  },
  created: function() {
    axios.get(`/api/educations/${this.route.params.id}`).then(response => {
      console.log(response.data);
      this.education = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
        start_date: this.education.start_date,
        end_date: this.education.end_date,
        job_title: this.education.job_title,
        company: this.education.company,
        details: this.education.details,
      };
      axios
        .patch(`/api/educations/${this.education.id}`, params)
        .then(response => {
          this.$router.push(`/educations/${this.education.id}`);
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    },
  }
};
</script>