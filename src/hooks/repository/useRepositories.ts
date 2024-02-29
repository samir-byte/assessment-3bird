import { useEffect, useState } from 'react'
import { getAllRepositories } from '../../services/repository'
import { FETCH_STATUS } from '../../constants'

const useRepositories = request => {
  const [status, setStatus] = useState(FETCH_STATUS.IDLE)
  const [repositories, setRepositories] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setStatus(FETCH_STATUS.LOADING)
      try {
        // await getAllRepositories(request)
        // setRepositories(response.items)
        // setStatus(FETCH_STATUS.SUCCESS)
      } catch (error) {
        setError(error)
        setStatus(FETCH_STATUS.ERROR)
      }
    }

    if (Object.keys(request).length > 0) {
      fetchData()
    } else {
      setRepositories([])
      setStatus(FETCH_STATUS.IDLE)
    }
  }, [request])

  return { status, repositories, error }
}

export default useRepositories
