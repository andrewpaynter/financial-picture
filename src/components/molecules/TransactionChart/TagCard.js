import React from 'react'

const TagCard = ({ transactionIndex, deleteTag, tagIndex, tag }) => {
  return (
    <div
      className={`text-xs bg-slate-100 border border-gray-400 px-2
    flex justify-center align-center items-center
    hover:scale-105 hover:cursor-pointer transition ease-in-out delay-100`}
      onClick={() => deleteTag(transactionIndex, tagIndex)}
    >
      {tag} <i className='fa-solid fa-x scale-75 ml-2' />
    </div>
  )
}

export default TagCard
