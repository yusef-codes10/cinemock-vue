// src/stores/sidebar.js
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSidebar = defineStore('useSideBar', () => {
  const isVisible = ref(false)

  const show = () => (isVisible.value = true)
  const hide = () => (isVisible.value = false)
  const toggle = () => (isVisible.value = !isVisible.value)

  return {
    isVisible,
    show,
    hide,
    toggle,
  }
})
