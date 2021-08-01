<template>
  <pre
    class="pt-2 pl-2"
  ><code class="text-xs leading-tight text-white"><span class="text-pink-600">import</span> { useCurrentUser, useQuery } <span class="text-pink-600">from</span> '<span class="text-tertiary">homebase-react</span>'

<span class="text-pink-600">const</span> <span class="text-green">Todos</span> = ({ <span class="text-tertiary">project</span> }) => {
  <span class="text-pink-600">const</span> [currentUser] = <span class="text-green">useCurrentUser</span>()
  <span class="text-pink-600">const</span> [todos, errors, syncing] = <span class="text-green">useQuery</span>({
    $find: '<span class="text-tertiary">todo</span>',
    $where: {
      todo: {
        project,
        isArchived: <span class="text-blue-400">false</span>,
        assignedTo: { $not: currentUser },
      },
    },
    $sort: { todo: { createdAt: '<span class="text-tertiary">asc</span>' } },
  })

  <span class="text-pink-600">if</span> (errors) <span class="text-pink-600">return</span> errors.<span class="text-green">map</span>((<span class="text-tertiary">e</span>, <span class="text-tertiary">i</span>) => &lt;Error <span class="text-green">key</span>={<span class="text-tertiary">i</span>} <span class="text-green">error</span>={<span class="text-tertiary">e</span>} /&gt;) 
  <span class="text-pink-600">return</span> todos.<span class="text-green">map</span>((<span class="text-tertiary">todo</span>) => &lt;Todo <span class="text-green">key</span>={<span class="text-tertiary">todo</span>.<span class="text-tertiary">id</span>} <span class="text-green">todo</span>={<span class="text-tertiary">todo</span>} /&gt;)
}</code></pre>
</template>
