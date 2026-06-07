<template>
  <div
    class="gengar-wrap"
    aria-label="Pixel art de Gengar"
    role="img"
    title="¡Hola! Soy Gengar. Te estoy vigilando desde las sombras. 👻"
  >
    <div class="gengar-px" :style="pixelStyle"></div>
  </div>
</template>

<script setup>
// SZ = pixels per cell, S = spread = (SZ-1)/2
// Formula: each pixel at (col, row) → box-shadow offset (col*SZ + S, row*SZ + S) with spread S
const SZ = 3
const S  = 1

const C = {
  k: '#120d24', // black outline
  b: '#5e3a9c', // body purple
  l: '#8353d2', // highlight purple
  d: '#3c246b', // shadow purple
  g: '#28184a', // outline transition greyish/dark purple
  r: '#ff3355', // eyes red
  w: '#ffffff', // teeth white
  o: '#a175e8', // light highlight
  p: '#d83765', // tongue/mouth detail
}

// 24 cols × 24 rows. '.' = transparent
const art = [
  '...kk...................',
  '...kbk..................',
  '...kbbkk...kk........kkk',
  '....kbbbk.klk.kk...kkllk',
  '....kbbbbkllkklk.kkllbk.',
  '....kbbbglllkllkklllbbk.',
  '.....kglllllllgglllbbk..',
  '.....kllllllllbblbbbbk..',
  '....kblllllllbbbbbbbk...',
  '..kkpbbllllbbbbbbbbgdkk.',
  '.kdgrbbbbbbbbppbbbbdddk.',
  'kddgrkbbbbbprrbbbbgddk..',
  'kddgbbbbbrkrrpbbbbbgddk.',
  '.kkkgbbbbbrrpbbdbbbbgddk',
  '...koggbbbbbbggbbbbbbgk.',
  '....kwoggggggwdbbbbbgdk.',
  '....kbowwowowdbbggbbbk..',
  '.....kbowowddbbbbbgggk..',
  '.....kgbbddbbbbbbbbbgdk.',
  '.....kdggbbbbbbbdbbbgddk',
  '......kddgkbbbddbbbgdkk.',
  '.......kkk.kkkbbbbbkk...',
  '..............kbbbk.....',
  '...............kkk......'
]

function buildShadow() {
  const parts = []
  art.forEach((row, ry) => {
    for (let cx = 0; cx < row.length; cx++) {
      const ch = row[cx]
      if (ch === '.') continue
      const color = C[ch] ?? C.b
      parts.push(`${cx * SZ + S}px ${ry * SZ + S}px 0 ${S}px ${color}`)
    }
  })
  return parts.join(',')
}

const pixelStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '1px',
  height: '1px',
  boxShadow: buildShadow(),
}
</script>

<style scoped>
.gengar-wrap {
  position: relative;
  width: 72px;
  height: 72px;
  flex-shrink: 0;
  cursor: default;
  animation: gengarWave 3s ease-in-out infinite;
}

@keyframes gengarWave {
  0%   { transform: translateY(0px)  rotate(0deg); }
  20%  { transform: translateY(-5px) rotate(-7deg); }
  40%  { transform: translateY(-2px) rotate(5deg); }
  60%  { transform: translateY(-6px) rotate(-5deg); }
  80%  { transform: translateY(-1px) rotate(3deg); }
  100% { transform: translateY(0px)  rotate(0deg); }
}

.gengar-wrap:hover {
  animation: gengarExcited 0.5s ease-in-out infinite;
}

@keyframes gengarExcited {
  0%   { transform: translateY(0px)  rotate(-10deg) scale(1.08); }
  50%  { transform: translateY(-8px) rotate(10deg)  scale(1.12); }
  100% { transform: translateY(0px)  rotate(-10deg) scale(1.08); }
}

@media (prefers-reduced-motion: reduce) {
  .gengar-wrap,
  .gengar-wrap:hover {
    animation: none;
  }
}
</style>
