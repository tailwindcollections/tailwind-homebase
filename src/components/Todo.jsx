const [currentUser] = userCurrentUser()
const [project] = useQuery({
	project: { name: 'Build the thing' }
})
const [transact, error, syncing] = useTransact()
const [id, dbAfter, dbBefore] = transact([{
	todo: {
		title: 'Write more code',
		assignedTo: currentUser,
		project
	}
}])