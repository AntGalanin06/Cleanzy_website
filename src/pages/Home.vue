<template>
  <div class="home">
    <HeaderBlock />
    <HeroBlock class="reveal" />
    <BenefitsBlock class="reveal" />
    <section id="calculator" class="calculator-section reveal">
      <div class="container">
        <h2 class="calculator-section__title">Рассчитайте стоимость уборки</h2>
        <PriceCalc @order="handleOrderFromCalc" />
      </div>
    </section>
    <WhyUsBlock id="team" class="reveal" />
    <BeforeAfterSlider class="reveal" />
    <TestimonialsSlider class="reveal" />
    <FaqAccordion id="faq" class="reveal" />
    <FooterBlock ref="footerBlock" class="reveal" />
    <!-- Здесь будут добавлены остальные компоненты -->
  </div>
</template>

<script setup>
import HeaderBlock from '@/components/landing/HeaderBlock.vue'
import HeroBlock from '@/components/landing/HeroBlock.vue'
import BenefitsBlock from '@/components/landing/BenefitsBlock.vue'
import WhyUsBlock from '@/components/landing/WhyUsBlock.vue'
import BeforeAfterSlider from '@/components/landing/BeforeAfterSlider.vue'
import TestimonialsSlider from '@/components/landing/TestimonialsSlider.vue'
import FaqAccordion from '@/components/landing/FaqAccordion.vue'
import FooterBlock from '@/components/landing/FooterBlock.vue'
import PriceCalc from '@/components/landing/PriceCalc.vue'
import { ref, onMounted, nextTick } from 'vue'

const footerBlock = ref(null)

const handleOrderFromCalc = (orderData) => {
  // Передать данные в FooterBlock (форма заказа)
  if (footerBlock.value && footerBlock.value.setOrderFromCalc) {
    footerBlock.value.setOrderFromCalc(orderData)
  }
  // Прокрутить к форме заказа
  const orderForm = document.querySelector('.footer__form')
  if (orderForm) {
    orderForm.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }
  window.scrollTo({ top: 0, behavior: 'auto' })

  // Scroll reveal
  nextTick(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--active')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })
    reveals.forEach(el => observer.observe(el))
  })
})
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  overflow-x: hidden;
}

.prices, .reviews {
  padding: 4rem 0;
}

.calculator-section {
  background: linear-gradient(135deg, #f8f9fa 60%, #e0f7fa 100%);
  padding: 4rem 0 3rem 0;
  margin-bottom: 2rem;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(47,128,237,0.07);
}
.calculator-section__title {
  text-align: center;
  font-size: 2.3rem;
  color: var(--primary-color);
  margin-bottom: 2.5rem;
  font-weight: 700;
}
</style> 