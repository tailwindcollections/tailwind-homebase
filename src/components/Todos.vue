<template>
  <pre
    class="pl-2 pt-2"
  ><code class="text-white leading-tight text-xs"><span class="text-pink-600">import</span> { useCurrentUser, useQuery } <span class="text-pink-600">from</span> 'homebase-react'
<span class="text-pink-600">const</span> <span class="text-green">Todos</span> = ({ <span class="text-yellow">project</span> }) => {
	<span class="text-pink-600">const</span> [currentUser] = <span class="text-green">useCurrentUser</span>()
	<span class="text-pink-600">const</span> [todos, errors, syncing] = <span class="text-green">useQuery</span>({
		$find: '<span class="text-yellow">todo</span>',
		$where: {
			todo: {
				project,
				isArchived: false,
				assignedTo: { $not: currentUser },
			},
		},
		$sort: { todo: { createdAt: 'asc' } },
	})

	<span class="text-pink-600">if</span> (errors) <span class="text-pink-600">return</span> errors.<span class="text-green">map</span>((<span class="text-yellow">e</span>, <span class="text-yellow">i</span>) => &lt;Error <span class="text-green">key</span>&gt;{<span class="text-yellow">i</span>} <span class="text-green">error</span>={<span class="text-yellow">e</span>} />)
	<span class="text-pink-600">return</span> todos.<span class="text-green">map</span>((<span class="text-yellow">todo</span>) => &lt;Todo <span class="text-green">key</span>={<span class="text-yellow">todo</span>.<span class="text-yellow">id</span>} <span class="text-green">todo</span>&gt;{<span class="text-yellow">todo</span>} />)
}</code></pre>
</template>
