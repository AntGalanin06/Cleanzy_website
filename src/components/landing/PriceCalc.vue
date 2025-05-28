<template>
  <div class="price-calc-card">
    <form @submit.prevent="handleOrder" class="calc-form">
      <!-- Тип помещения -->
      <div class="form-group">
        <label>Тип помещения</label>
        <select v-model="formData.roomType" class="form-control">
          <option value="apartment">Квартира</option>
          <option value="house">Дом</option>
          <option value="office">Офис</option>
        </select>
      </div>

      <!-- Площадь -->
      <div class="form-group">
        <label>Площадь (м²): <b>{{ formData.area }}</b></label>
        <input 
          type="range" 
          v-model="formData.area" 
          min="30" 
          max="200" 
          step="1"
          class="form-range"
        >
      </div>

      <!-- Тип уборки -->
      <div class="form-group">
        <label>Тип уборки</label>
        <div class="radio-group">
          <label class="radio-label" v-for="type in cleaningTypes" :key="type.value">
            <input 
              type="radio" 
              v-model="formData.cleaningType" 
              :value="type.value"
            >
            {{ type.label }}
          </label>
        </div>
      </div>

      <!-- Дополнительные опции -->
      <div class="form-group">
        <label>Дополнительные опции</label>
        <div class="checkbox-group">
          <label class="checkbox-label" v-for="option in optionsList" :key="option.key">
            <input 
              type="checkbox" 
              v-model="formData.options[option.key]"
            >
            {{ option.label }}
          </label>
        </div>
      </div>

      <!-- Итоговая стоимость -->
      <div class="price-result">
        <h3>Итоговая стоимость:</h3>
        <div class="price">{{ totalPrice }} ₽</div>
      </div>

      <button type="submit" class="btn btn--primary btn--block calc-order-btn">
        Заказать уборку
        <i class="fas fa-arrow-down"></i>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { defineEmits } from 'vue'

const emits = defineEmits(['order'])

const cleaningTypes = [
  { value: 'regular', label: 'Регулярная уборка', service: 'regular' },
  { value: 'deep', label: 'Генеральная уборка', service: 'general' },
  { value: 'after', label: 'Уборка после ремонта', service: 'after-repair' },
  { value: 'windows', label: 'Мойка окон', service: 'windows' }
]

const optionsList = [
  { key: 'balcony', label: 'Уборка балкона' },
  { key: 'fridge', label: 'Чистка холодильника' },
  { key: 'oven', label: 'Чистка духовки' },
  { key: 'dishes', label: 'Мытьё посуды' },
  { key: 'microwave', label: 'Чистка микроволновки' },
  { key: 'hood', label: 'Чистка вытяжки' },
  { key: 'chandelier', label: 'Мойка люстр и светильников' },
  { key: 'carpet', label: 'Чистка ковров/паласов' }
]

const formData = ref({
  roomType: 'apartment',
  area: 50,
  cleaningType: 'regular',
  options: {
    windows: false,
    fridge: false,
    oven: false
  }
})

// Базовые цены
const basePrices = {
  apartment: 2000,
  house: 2500,
  office: 3000
}

const cleaningTypeMultiplier = {
  regular: 1,
  deep: 1.5,
  after: 2
}

const optionPrices = {
  balcony: 400,
  fridge: 300,
  oven: 400,
  dishes: 200,
  microwave: 200,
  hood: 300,
  chandelier: 250,
  carpet: 500
}

const getOptionMultiplier = (area) => {
  if (area <= 50) return 1
  if (area <= 100) return 1.5
  return 2
}

// Вычисление итоговой стоимости
const totalPrice = computed(() => {
  let price = basePrices[formData.value.roomType]
  price *= cleaningTypeMultiplier[formData.value.cleaningType]
  price += (formData.value.area - 30) * 50
  // Корректно учитываем все выбранные дополнительные опции с учётом площади
  const multiplier = getOptionMultiplier(formData.value.area)
  optionsList.forEach(opt => {
    if (formData.value.options[opt.key]) {
      price += Math.round((optionPrices[opt.key] || 0) * multiplier)
    }
  })
  return Math.round(price)
})

const handleOrder = () => {
  // Формируем строку для передачи в форму заказа
  const serviceMap = {
    regular: 'regular',
    deep: 'general',
    after: 'after-repair',
    windows: 'windows'
  }
  const roomMap = {
    apartment: 'Квартира',
    house: 'Дом',
    office: 'Офис'
  }
  const selectedOptions = optionsList
    .filter(opt => formData.value.options[opt.key])
    .map(opt => opt.label)
  const comment = `Тип помещения: ${roomMap[formData.value.roomType]}, Площадь: ${formData.value.area} м², Опции: ${selectedOptions.join(', ') || 'нет'}, Итог: ${totalPrice.value} ₽`
  emits('order', {
    service: serviceMap[formData.value.cleaningType],
    comment
  })
}
</script>

<style lang="scss" scoped>
.price-calc-card {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(47,128,237,0.04);
  padding: 2rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  border: 1px solid #eaeaea;
}

.calc-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  label {
    font-weight: 600;
    color: #222;
    margin-bottom: 0.1rem;
  }
}

.form-control {
  padding: 0.7rem;
  border: 1.2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  background: #fafbfc;
  transition: border 0.2s;
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    background: #fff;
  }
}

.form-range {
  width: 100%;
  height: 6px;
  background: #e0e0e0;
  border-radius: 3px;
  outline: none;
  -webkit-appearance: none;
  margin-top: 0.3rem;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    background: var(--primary-color);
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid #fff;
    box-shadow: 0 1px 4px rgba(0,196,140,0.08);
    transition: background 0.2s;
  }
  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: var(--primary-color);
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid #fff;
    box-shadow: 0 1px 4px rgba(0,196,140,0.08);
    transition: background 0.2s;
  }
  &::-ms-thumb {
    width: 18px;
    height: 18px;
    background: var(--primary-color);
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid #fff;
    box-shadow: 0 1px 4px rgba(0,196,140,0.08);
    transition: background 0.2s;
  }
}

.radio-group,
.checkbox-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.7rem;
}

.radio-label,
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  background: #fafbfc;
  border-radius: 6px;
  padding: 0.3rem 0.8rem;
  transition: background 0.2s, box-shadow 0.2s;
  box-shadow: none;
  &:hover {
    background: #f2f7f6;
  }
  input[type="radio"], input[type="checkbox"] {
    accent-color: var(--primary-color);
    width: 16px;
    height: 16px;
  }
}

.price-result {
  grid-column: 1 / -1;
  text-align: center;
  padding: 1rem;
  background: #f7f7f7;
  border-radius: 7px;
  margin: 0.7rem 0 0.5rem 0;
  h3 {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 0.3rem;
  }
  .price {
    font-size: 1.7rem;
    font-weight: 700;
    color: var(--primary-color);
    letter-spacing: 0.5px;
  }
}

.calc-order-btn {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  font-size: 1.05rem;
  font-weight: 600;
  padding: 1rem 0;
  border-radius: 8px;
  background: var(--primary-color);
  color: #fff;
  box-shadow: none;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: var(--primary-color);
    filter: brightness(0.9);
    transform: translateY(-1px) scale(1.02);
  }
  i {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .price-calc-card {
    padding: 1.5rem;
  }
  
  .calc-form {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
  
  .radio-group,
  .checkbox-group {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .price-calc-card {
    padding: 1rem;
  }
  
  .calc-order-btn {
    font-size: 0.97rem;
    padding: 0.8rem 0;
  }
}
</style> 