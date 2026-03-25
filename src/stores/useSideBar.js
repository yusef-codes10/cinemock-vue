// src/stores/sidebar.js
import { ref } from 'vue'

const isVisible = ref(true)

export function useSidebar() {
  const show = () => (isVisible.value = true)
  const hide = () => (isVisible.value = false)
  const toggle = () => (isVisible.value = !isVisible.value)

  return {
    isVisible,
    show,
    hide,
    toggle,
  }
}
