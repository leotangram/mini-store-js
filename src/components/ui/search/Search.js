import { TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { onChangeValueSearch } from '../../../store/search/counterSlice'

export const Search = () => {
  const { searchValue } = useSelector(state => state.search)
  const dispath = useDispatch()

  const onChangeValue = event => {
    dispath(onChangeValueSearch(event.target.value))
  }

  return (
    <TextField label="Buscar" onChange={onChangeValue} value={searchValue} />
  )
}
