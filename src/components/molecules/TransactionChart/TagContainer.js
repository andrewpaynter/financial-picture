import React, { useState, useContext } from 'react'
import { AppContext } from '../../../contexts/AppContext'
import TagCard from './TagCard'

const TagContainer = ({ transactionIndex, tags, setTransactionData }) => {
  const [input, setInput] = useState({ value: '' })
  const { globalState, dispatch } = useContext(AppContext)
  function handleInputChange(event) {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [event.target.name]: event.target.value
      }
    })
  }

  function inputIsValid() {
    return (
      input.value.match(/^[A-Za-z]+$/i) &&
      input.value.length < 11 &&
      input.value.length > 0 &&
      !tags.includes(input.value)
    )
  }

  function submit() {
    if (inputIsValid()) {
      addTag(transactionIndex, input.value)
      setInput((prevInput) => {
        return {
          ...prevInput,
          value: ''
        }
      })
    }
  }

  function deleteTag(transactionIndex, tagIndex) {
    setTransactionData((prevTransactionData) => {
      let newTransactionData = [...prevTransactionData]
      newTransactionData[transactionIndex].tags.splice(tagIndex, 1)
      return newTransactionData
    })
  }

  function addTag(transactionIndex, tag) {
    if (!globalState.transactionTags.includes(tag)) {
      dispatch({ type: 'ADD_TRANSACTION_TAG', tag: tag })
    }
    setTransactionData((prevTransactionData) => {
      let newTransactionData = [...prevTransactionData]
      newTransactionData[transactionIndex].tags.push(tag)
      return newTransactionData
    })
  }

  return (
    <div className='grid gap-1 grid-cols-2'>
      {tags.map((tag, tagIndex) => (
        <TagCard
          key={tag}
          transactionIndex={transactionIndex}
          deleteTag={deleteTag}
          tagIndex={tagIndex}
          tag={tag}
        />
      ))}
      <div className='flex'>
        <input
          className={`w-2/3 text-xs rounded-md outline-0 border ${
            input.value.length === 0 || inputIsValid() ? 'border-white' : 'border-rose-600'
          }`}
          type='text'
          placeholder='Add Tag'
          onChange={handleInputChange}
          name='value'
          value={input.value}
        />
        <button
          onClick={submit}
          className={
            'hover:scale-105 transition ease-in-out delay-100 w-1/3 bg-slate-200 rounded-md text-sm'
          }
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default TagContainer
