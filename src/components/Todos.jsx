import { useCurrentUser, useQuery } from 'homebase-react'

const Todos = ({ project }) => {
	const [currentUser] = useCurrentUser()
	const [todos, errors, syncing] = useQuery({
		$find: 'todo',
		$where: {
			todo: {
				project,
				isArchived: false,
				assignedTo: { $not: currentUser },
			},
		},
		$sort: { todo: { createdAt: 'asc' } },
	})

	if (errors) return errors.map((e, i) => <Error key={i} error={e} />)
	return todos.map((todo) => <Todo key={todo.id} todo={todo} />)
}