import React from 'react'

const FilteringMenu = ({ onChange }) => {
  return (
    <div>
      <div onClick={() => onChange()}>Change View</div>
    </div>
  )
}

export default FilteringMenu
