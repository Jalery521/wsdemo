<template>
  <div>
    <FirendItem @clickItem="toChat"></FirendItem>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import FirendItem from "../components/FirendItem.vue";
export default Vue.extend({
  name: "Firends",
  created() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/login");
    }
  },
  data() {
    return {
      num: 1
    };
  },
  components: {
    FirendItem
  },
  methods: {
    toChat(id: number) {
      this.$router.push(`chat/${id}`);
    }
  }
});
</script>
