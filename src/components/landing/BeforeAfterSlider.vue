<template>
  <section class="before-after" id="gallery">
    <div class="container">
      <h2 class="before-after__title">Результаты нашей работы</h2>
      <p class="before-after__subtitle">Убедитесь в качестве наших услуг</p>

      <div class="before-after__grid">
        <div v-for="(item, index) in items" :key="index" class="before-after__item">
          <div class="before-after__slider" 
               @mousedown="startDrag($event, index)"
               @touchstart="startDrag($event, index)"
               @mousemove="dragging && handleDrag($event, index)"
               @touchmove="dragging && handleDrag($event, index)"
               @mouseup="stopDrag"
               @mouseleave="stopDrag"
               @touchend="stopDrag">
            <div class="before-after__image before-after__image--before">
              <img :src="item.before" :alt="'До уборки ' + (index + 1)">
            </div>
            <div class="before-after__image before-after__image--after" 
                 :style="{ clipPath: `inset(0 ${100 - positions[index]}% 0 0)` }">
              <img :src="item.after" :alt="'После уборки ' + (index + 1)">
            </div>
            <div class="before-after__divider" :style="{ left: positions[index] + '%' }">
              <button class="before-after__handle" type="button">
                <span class="before-after__handle-icon">
                  <i class="fas fa-arrows-alt-h"></i>
                </span>
              </button>
            </div>
            <span class="before-after__label before-after__label--before">До</span>
            <span class="before-after__label before-after__label--after">После</span>
          </div>
          <p class="before-after__caption">{{ item.caption }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const items = [
  {
    before: `${import.meta.env.BASE_URL}images/gallery/after1.png`,
    after: `${import.meta.env.BASE_URL}images/gallery/before1.png`,
    caption: 'Генеральная уборка квартиры'
  },
  {
    before: `${import.meta.env.BASE_URL}images/gallery/after2.png`,
    after: `${import.meta.env.BASE_URL}images/gallery/before2.png`,
    caption: 'Уборка после ремонта'
  },
  {
    before: `${import.meta.env.BASE_URL}images/gallery/after3.png`,
    after: `${import.meta.env.BASE_URL}images/gallery/before3.png`,
    caption: 'Мойка окон'
  },
  {
    before: `${import.meta.env.BASE_URL}images/gallery/after4.png`,
    after: `${import.meta.env.BASE_URL}images/gallery/before4.png`,
    caption: 'Уборка ванной комнаты'
  },
  {
    before: `${import.meta.env.BASE_URL}images/gallery/after5.png`,
    after: `${import.meta.env.BASE_URL}images/gallery/before5.png`,
    caption: 'Уборка кухни'
  },
  {
    before: `${import.meta.env.BASE_URL}images/gallery/after6.png`,
    after: `${import.meta.env.BASE_URL}images/gallery/before6.png`,
    caption: 'Уборка после переезда'
  },
  {
    before: `${import.meta.env.BASE_URL}images/gallery/after7.png`,
    after: `${import.meta.env.BASE_URL}images/gallery/before7.png`,
    caption: 'Уборка офиса'
  },
  {
    before: `${import.meta.env.BASE_URL}images/gallery/after8.png`,
    after: `${import.meta.env.BASE_URL}images/gallery/before8.png`,
    caption: 'Уборка коттеджа'
  },
  {
    before: `${import.meta.env.BASE_URL}images/gallery/after9.png`,
    after: `${import.meta.env.BASE_URL}images/gallery/before9.png`,
    caption: 'Уборка балкона'
  }
]

const positions = ref(items.map(() => 50))
const dragging = ref(false)

const startDrag = (event, index) => {
  dragging.value = true
  handleDrag(event, index)
}

const stopDrag = () => {
  dragging.value = false
}

const handleDrag = (event, index) => {
  let clientX
  if (event.type.startsWith('touch')) {
    clientX = event.touches[0].clientX
  } else {
    clientX = event.clientX
  }
  const slider = event.currentTarget.closest('.before-after__slider')
  const rect = slider.getBoundingClientRect()
  const x = clientX - rect.left
  positions.value[index] = Math.max(0, Math.min(100, (x / rect.width) * 100))
}
</script>

<style lang="scss" scoped>
.before-after {
  padding: 5rem 0;
  background: #f8f9fa;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  &__title {
    text-align: center;
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  &__subtitle {
    text-align: center;
    color: #666;
    margin-bottom: 3rem;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }

  &__item {
    position: relative;
  }

  &__slider {
    position: relative;
    width: 100%;
    height: 400px;
    border-radius: 14px;
    overflow: hidden;
    cursor: ew-resize;
    box-shadow: 0 2px 12px rgba(47,128,237,0.04);
    background: #fff;
    border: 1px solid #eaeaea;
    transition: box-shadow 0.2s;
    &:hover {
      box-shadow: 0 4px 16px rgba(47,128,237,0.07);
    }
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      user-select: none;
      pointer-events: none;
    }
    &--after {
      clip-path: inset(0 50% 0 0);
      transition: clip-path 0.2s;
    }
  }

  &__divider {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 0;
    z-index: 2;
    pointer-events: none;
    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      width: 3px;
      height: 100%;
      background: #e0e0e0;
      border-radius: 2px;
      pointer-events: none;
      box-shadow: none;
    }
  }

  &__handle {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--primary-color);
    border: 3px solid #fff;
    box-shadow: 0 2px 8px rgba(47,128,237,0.10);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: grab;
    z-index: 3;
    transition: box-shadow 0.2s, transform 0.2s;
    pointer-events: auto;
    &:hover, &:active {
      box-shadow: 0 4px 16px rgba(47,128,237,0.13);
      transform: translate(-50%, -50%) scale(1.07);
    }
  }
  &__handle-icon {
    color: #fff;
    font-size: 1.2rem;
    text-shadow: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__label {
    position: absolute;
    top: 16px;
    z-index: 4;
    font-size: 1rem;
    font-weight: 600;
    color: #888;
    background: none;
    box-shadow: none;
    user-select: none;
    &--before {
      left: 18px;
    }
    &--after {
      right: 18px;
    }
  }

  &__caption {
    text-align: center;
    margin-top: 1rem;
    color: #666;
    font-size: 1.1rem;
    font-weight: 500;
  }
}

@media (max-width: 768px) {
  .before-after {
    &__grid {
      grid-template-columns: 1fr;
    }
    &__slider {
      height: 260px;
    }
    &__label {
      font-size: 0.95rem;
      padding: 0.4rem 0.8rem;
      top: 10px;
      &--before { left: 10px; }
      &--after { right: 10px; }
    }
    &__handle {
      width: 40px;
      height: 40px;
    }
    &__handle-icon {
      font-size: 1.1rem;
    }
  }
}
</style> 