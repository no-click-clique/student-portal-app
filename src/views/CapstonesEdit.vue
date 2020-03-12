<template>
  <div class="capstones-edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
       <h1>{{ message }}</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
       
        
        <div class="form-group">
          <label>Name:</label>
          <input type="text" class="form-control" v-model="capstone.name">
        </div>
        <div class="form-group">
          <label>Description:</label>
          <input type="text" class="form-control" v-model="capstone.description">
        </div>
        <div class="form-group">
          <label>Url:</label>
          <input type="text" class="form-control" v-model="capstone.url">
        </div>
        <div class="form-group">
          <label>screenshot:</label>
          <input type="text" class="form-control" v-model="capstone.screenshot">
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
      message: "Update Capstone Info!",
      capstone: {},
      errors: [],
      student_id: localStorage.getItem("student_id")
    };
  },
  created: function() {
    axios.get(`/api/capstones/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.capstone = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
        name: this.capstone.name,
        description: this.capstone.description,
        url: this.capstone.url,
        screenshot: this.capstone.screenshot,
      };
      axios
        .patch(`/api/capstones/${this.capstone.id}`, params)
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