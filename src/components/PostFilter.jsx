import React from 'react'
import MyInput from './UI/button/input/MyInput'
import MySelect from './UI/select/MySelect'

const PostFilter = ({filter, setFilter}) => {
    return(
        <div>
                <MyInput
                    value={filter.query}
                    onChange={e => setFilter({...filter, query: e.target.value})}
                    placeholder="Search..."
                />
                <MySelect
                    value={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                    defaultValue="Selection by"
                    options={[
                        {value: 'title', name: 'Name'},
                        {value: 'title', name: 'Characteristic'},
                    ]}
                />
           </div>
    )
}

export default PostFilter