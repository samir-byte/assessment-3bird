const EmptyState = () => {
  return (
    <div data-testid='empty-state'>
      <div className='mt-5 flex justify-center'>
        <h3 className='text-xl font-semibold'>Ohh! Nothing to display</h3>
      </div>
      <div className='flex justify-center'>
        <p>Please type repository name in above search bar</p>
      </div>
    </div>
  )
}

export default EmptyState
