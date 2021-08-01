<template>
  <pre
    class="pt-2 pl-2"
  ><code class="text-xs leading-tight text-white"><span class="text-pink-600">const</span> [currentUser] = <span class="text-green">userCurrentUser</span>()
<span class="text-pink-600">const</span> [project] = <span class="text-green">useQuery</span>({
	project: { name: '<span class="text-tertiary">Build the thing</span>' }
})
<span class="text-pink-600">const</span> [transact, error, syncing] = <span class="text-green">useTransact</span>()
<span class="text-pink-600">const</span> [id, dbAfter, dbBefore] = <span class="text-green">transact</span>([{
	todo: {
		title: '<span class="text-tertiary">Write more code</span>',
		assignedTo: currentUser,
		project
	}
}])</code>
  </pre>
</template>
