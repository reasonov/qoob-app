<template>
  <div class="comments">

    <worker-list link="/worker" />

  </div>
</template>

<script>
import workerList from "@/components/WorkerList";

export default {
  name: "Comments",
  components: {
    workerList
  }
}
</script>

<style scoped>
.comments {
  min-height: 100vh;
  background-color: #F0F3F8;
}

.services-list li {
  margin-right: 25px;
}

.services-list li:last-child {
  padding-right: 10px;
}
</style>