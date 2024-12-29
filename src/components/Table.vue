<!-- TODO -->

<template>
  <table class="table-auto border border-collapse border-monochrome-50 w-full mb-2">
    <thead class="bg-monochrome-20">
      <tr>
        <th class="border border-slate-300 text-cream-10 font-bold">cat 1</th>
        <th class="border border-slate-300 text-cream-10 font-bold">cat 2</th>
        <th class="border border-slate-300 text-cream-10 font-bold">cat 3</th>
        <th class="border border-slate-300 text-cream-10 font-bold">cat 4</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover:bg-monochrome-20">
        <td class="border border-slate-300">1-1</td>
        <td class="border border-slate-300">1-2</td>
        <td class="border border-slate-300">1-3</td>
        <td class="border border-slate-300">1-4</td>
      </tr>
      <tr class="bg-monochrome-10 hover:bg-monochrome-20">
        <td class="border border-slate-300">2-1</td>
        <td class="border border-slate-300">2-2</td>
        <td class="border border-slate-300">2-3</td>
        <td class="border border-slate-300">2-4</td>
      </tr>
      <tr class="hover:bg-monochrome-20">
        <td class="border border-slate-300">3-1</td>
        <td class="border border-slate-300">3-2</td>
        <td class="border border-slate-300">3-3</td>
        <td class="border border-slate-300">3-4</td>
      </tr>
      <tr class="bg-monochrome-10 hover:bg-monochrome-20">
        <td class="border border-slate-300">4-1</td>
        <td class="border border-slate-300">4-2</td>
        <td class="border border-slate-300">4-3</td>
        <td class="border border-slate-300">4-4</td>
      </tr>

    </tbody>
  </table>
        <a class="bg-monochrome-30 hover:bg-monochrome-40 text-cream-10 py-2 px-4 rounded"><</a>
        <a
          v-for="(page, i) in 3"
          :key="page"
          class="bg-monochrome-30 hover:bg-monochrome-40 text-cream-10 py-2 px-4 rounded"
          :class="{'bg-monochrome-40': i === 0}"
          displayLimit="3"
        >
          {{page}}
        </a>
        <span class="bg-monochrome-30 text-cream-10 py-2 px-4 rounded">...</span>
        <a class="bg-monochrome-30 hover:bg-monochrome-40 text-cream-10 py-2 px-4 rounded">10</a>
        <a class="bg-monochrome-30 hover:bg-monochrome-40 text-cream-10 py-2 px-4 rounded">></a>
</template>
