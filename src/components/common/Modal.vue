<template>
  <Transition name="modal">
    <div v-if="modelValue" class="modal-overlay" @click="closeOnOverlay">
      <div class="modal" @click.stop>
        <button class="modal__close" @click="$emit('update:modelValue', false)">
          <font-awesome-icon :icon="faTimes" />
        </button>
        <div class="modal__header">
          <h2 class="modal__title">{{ title }}</h2>
        </div>
        <div class="modal__content">
          <slot></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { faTimes } from '@fortawesome/free-solid-svg-icons'

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  closeOnOverlayClick: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:modelValue'])

const closeOnOverlay = () => {
  if (props.closeOnOverlayClick) {
    emit('update:modelValue', false)
  }
}
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1rem;
}

.modal {
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  &__close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: #666;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
    transition: all 0.3s;
    z-index: 1;

    &:hover {
      color: var(--primary-color);
      transform: rotate(90deg);
    }
  }

  &__header {
    padding: 2rem 2rem 1rem;
    border-bottom: 1px solid #eee;
  }

  &__title {
    font-size: 1.8rem;
    color: #333;
    margin: 0;
  }

  &__content {
    padding: 2rem;
    color: #444;
    line-height: 1.6;

    h3 {
      color: #333;
      margin: 1.5rem 0 1rem;
      font-size: 1.3rem;
    }

    p {
      margin-bottom: 1rem;
    }

    ul {
      margin: 1rem 0;
      padding-left: 1.5rem;

      li {
        margin-bottom: 0.5rem;
      }
    }
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style> 