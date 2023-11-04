<script setup lang="ts">
import { reactive } from "vue"

import Marketing from "../../departments/marketing.vue";
import IT from "../../departments/it.vue";
import HR from "../../departments/hr.vue";
import Leaders from "../../departments/leaders.vue";

/* Textdaten */
const content = reactive({
    title: "Team",
    text: "Hier ist eine Übersicht von allen Mitarbeitern."
})
</script>

<template>
  <div class="container-md">
    <div class="pages">
        <h2>{{ content.title }}</h2>
        <p>{{ content.text }}</p>
    </div>
    <div class="tabs">
    <div class="nav nav-pills nav-justified mb-3" id="pills-tab">
        <div class="nav-item">
          <div class="row">
            <div class="col-md-3">
              <button class="nav-link active" id="pills-leaders-tab" data-bs-toggle="pill" data-bs-target="#pills-leaders" type="button" aria-selected="true">Geschäftsleitung</button>
            </div>
            <div class="col-md-3">
              <button class="nav-link" id="pills-it-tab" data-bs-toggle="pill" data-bs-target="#pills-it" type="button" aria-selected="false">IT</button>
            </div>
            <div class="col-md-3">
              <button class="nav-link" id="pills-marketing-tab" data-bs-toggle="pill" data-bs-target="#pills-marketing" type="button" aria-selected="false">Marketing</button>
            </div>
            <div class="col-md-3">
              <button class="nav-link" id="pills-hr-tab" data-bs-toggle="pill" data-bs-target="#pills-hr" type="button" aria-selected="false">HR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-content" id="pills-tabContent">
      <Leaders />
      <IT />
      <Marketing />
      <HR />
    </div>
  </div>
</template>