// Module-level ref so the observer is never garbage-collected
let _observer = null

export function initScrollReveal() {
  if (_observer) _observer.disconnect()

  _observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          _observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
  )

  document.querySelectorAll('.reveal').forEach((el) => _observer.observe(el))
}
