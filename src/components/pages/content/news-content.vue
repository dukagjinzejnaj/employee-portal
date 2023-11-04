<script setup lang="ts">
import { reactive, onMounted } from "vue"
import type News from "../../interfaces/news"

/* Textdaten */
const content = reactive({
    title: "News",
    text: "Hier sind die aktuellen News:",
    titleComment: "Kommentare",
    titlePostComment: "Beitrag kommentieren"
})

const news = reactive<News[]>([
  { date: "1. Januar 2024", title: "News 1", information: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." },
  { date: "1. Februar 2024", title: "News 2", information: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." },
  { date: "1. März 2024", title: "News 3", information: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." }
])

/* Kommentar-Funktionen */
const state = reactive({
  newComment: { username: '', text: '' },
  comments: [] as any,
})

function addComment() {
  const commentText = state.newComment.text.trim();
  const commentUsername = state.newComment.username.trim();

  if (commentText !== '') {
    /* Maximal 10 Kommentare */
    if (state.comments.length < 10) {
      state.comments.push({
        username: commentUsername,
        text: commentText,
      });

      localStorage.setItem("comments", JSON.stringify(state.comments));

      state.newComment.text = '';
      state.newComment.username = '';
    } else {
      alert("Maximale Anzahl von Kommentaren erreicht (10).");
    }
  }
}

function deleteComment(index: number) {
  state.comments.splice(index, 1);
  
  localStorage.setItem("comments", JSON.stringify(state.comments));
}

function loadCommentsFromLocalStorage() {
  const commentsJSON = localStorage.getItem("comments");
  if (commentsJSON) {
    state.comments = JSON.parse(commentsJSON);
  }
}

onMounted(() => {
  loadCommentsFromLocalStorage();
})
</script>

<template>
  <div class="container-md">
    <div class="pages">
        <h2>{{ content.title }}</h2>
        <p>{{ content.text }}</p>
    </div>
    <div class="row">
      <div class="col-lg-4" v-for="post in news">
        <div class="card mb-3">
          <div class="card-header">
            <h4>{{ post.date }}</h4>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.information }}</p>
            <a href="https://www.google.com" target="_blank" class="btn btn-outline-secondary btn-sm">Mehr erfahren</a>
          </div>
        </div>
      </div>
      <div class="pages">
        <h4>{{ content.titleComment }} ({{ state.comments.length }})</h4>
        <p v-if="state.comments.length === 0">Diese Seite hat keine Kommentare.</p>
      </div>
      <div class="overflow-y-scroll">
        <div class="col-lg-12" v-for="(comment, index) in state.comments" :key="index">
          <div class="card mb-3">
            <div class="card-body">
              <p><strong>@{{ comment.username }}</strong></p>
              <p>{{ comment.text }}</p>
              <button class="btn btn-danger" @click="deleteComment(index)">Löschen</button>
            </div>
          </div>
        </div>
      </div>
      <div class="pages">
        <h4>{{ content.titlePostComment }}</h4>
      </div>
      <form @submit.prevent="addComment">
        <div class="input-group mb-3">
          <span class="input-group-text">@</span>
          <input type="text" class="form-control" maxlength="20" name="Benutzername" v-model="state.newComment.username" placeholder="Benutzername*" required>
        </div>
        <textarea class="form-control mb-3" maxlength="60" name="Kommentar" v-model="state.newComment.text" placeholder="Kommentar eingeben*" required></textarea>
        <button class="btn btn-secondary" type="submit">Kommentar hinzufügen</button>
      </form>
    </div>
  </div>
</template>