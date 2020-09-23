<template>
  <div style="margin: 20px;">
    <input placeholder="タスクを追加" 　@keyup.enter="addTodo" />
    <ul>
      <li v-for="todo in todos">
        <input
          type="checkbox"
          v-bind:checked="todo.done"
          v-on:change="toggle(todo)"
        />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  computed: {
    todos() {
      return this.$store.state.todos.list;
    }
  },

  methods: {
    addTodo(e) {
      this.$store.commit("todos/add", e.target.value);
    },
    ...mapMutations({
      toggle: "todos/toggle"
    })
  }
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
