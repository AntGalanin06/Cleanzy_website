<template>
  <Modal v-model="isOpen" title="Политика конфиденциальности">
    <div class="privacy-policy">
      <h3>1. Общие положения</h3>
      <p>
        Настоящая политика конфиденциальности определяет порядок обработки и защиты персональных данных компании Cleanzy.
        Мы стремимся обеспечить надежную защиту вашей личной информации.
      </p>

      <h3>2. Сбор информации</h3>
      <p>Мы собираем следующие виды персональных данных:</p>
      <ul>
        <li>Контактная информация (имя, телефон, email)</li>
        <li>Адрес для оказания услуг</li>
        <li>Информация о заказах и услугах</li>
      </ul>

      <h3>3. Использование информации</h3>
      <p>Собранная информация используется для:</p>
      <ul>
        <li>Обработки и выполнения заказов</li>
        <li>Связи с клиентами</li>
        <li>Улучшения качества обслуживания</li>
        <li>Отправки важных уведомлений</li>
      </ul>

      <h3>4. Защита информации</h3>
      <p>
        Мы принимаем необходимые меры для защиты ваших персональных данных от несанкционированного доступа,
        изменения, раскрытия или уничтожения.
      </p>

      <h3>5. Передача данных третьим лицам</h3>
      <p>
        Мы не передаем ваши персональные данные третьим лицам, за исключением случаев,
        предусмотренных законодательством РФ.
      </p>

      <h3>6. Права пользователей</h3>
      <p>Вы имеете право:</p>
      <ul>
        <li>Получить доступ к своим персональным данным</li>
        <li>Требовать исправления неточных данных</li>
        <li>Требовать удаления своих данных</li>
        <li>Отозвать согласие на обработку данных</li>
      </ul>

      <h3>7. Контактная информация</h3>
      <p>
        По всем вопросам, связанным с обработкой персональных данных,
        обращайтесь по email: privacy@cleanzy.ru
      </p>
    </div>
  </Modal>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '../common/Modal.vue'

const isOpen = ref(false)

defineExpose({
  open: () => isOpen.value = true
})
</script>

<style lang="scss" scoped>
.privacy-policy {
  h3 {
    color: var(--primary-color);
    margin-top: 2rem;
    
    &:first-child {
      margin-top: 0;
    }
  }

  ul {
    list-style-type: disc;
    margin: 1rem 0;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
    }
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
}
</style> 