import { ref, computed } from "vue";
import { useStorage } from "./useStorage.js";
export function useTodos() {
  let title = ref("");
  let showModal = ref(false)
  let todos = useStorage('todos',[])
  function addNewEle() {
    if(!title.value){
      showModal.value = true
      setTimeout(() => {
        showModal.value = false
      }, 1500);
      return
    }
    todos.value.push({
      title: title.value,
      id: new Date(),
      done: false,
    });
    title.value = "";
  }
  function clearData() {
    todos.value = todos.value.filter((item) => !item.done);
  }
  let active = computed(() => {
    return todos.value.filter((val) => !val.done).length;
  });
  let all = computed(() => {
    return todos.value.length;
  });
  let allDone = computed({
    get: function () {
      return active.value === 0;
    },
    set: function (val) {
      todos.value.forEach((todo) => {
        todo.done = val;
      });
    },
  });
  return { title, todos, addNewEle, clearData, active, all, allDone,showModal };
}