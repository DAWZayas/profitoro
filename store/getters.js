import _ from 'lodash'

export default {
  getConfig: state => state.config,
  getUser: state => state.user,
  getDisplayName: state => state.displayName,
  getPhotoURL: state => state.photoURL,
  getWorkouts: state => state.workouts,
  getWorkoutsDone: state => state.statistics.workouts ? Object.keys(state.statistics.workouts).map(workoutKey => ({
    key: workoutKey,
    count: state.statistics.workouts[workoutKey].count,
    name: state.workouts && state.workouts.filter(workout => workoutKey === workout['.key'])[0].name
  })) : [],
  getWorkoutsDoneDetails: state => key => state.statistics.workouts && state.statistics.workouts[key],
  getTotalPomodoros: state => state.statistics.totalPomodoros,
  isAuthenticated: state => state.user && !state.user.isAnonymous,
  authError: state => state.authError,
  totalPomodoros: state => state.statistics.totalPomodoros,
  todos: state => state.todos,
  activeTodos: state => _.sortBy(_.filter(state.todos, todo => todo.active && !todo.progress), 'priority'),
  progressTodos: state => _.sortBy(_.filter(state.todos, todo => todo.progress), 'priority'),
  doneTodos: state => _.filter(state.todos, todo => !todo.active),
  getLoading: state => loading => state.loading[loading],
  getMode: state => state.mode
}
