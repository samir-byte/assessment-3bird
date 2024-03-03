const EmptyState = () => {
  return (
    <div data-testid='empty-state' className='text-center'>
      <h3 className='mb-5 text-xl font-semibold'>Ohh! Nothing to display</h3>

      <p>Please type repository name in above search bar</p>
    </div>
  )
}

export default EmptyState
