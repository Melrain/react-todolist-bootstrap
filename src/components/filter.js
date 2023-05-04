export const Filter = () => {
    return (
        <div>
            <div className='d-flex justify-content-end align-items-center mb-4 pt-2 pb-3'>
                <p className='small mb-0 me-2 text-muted'>Filter</p>
                <select className='select'>
                    <option value="1">ALL</option>
                    <option value="2">Completed</option>
                    <option value="3">Active</option>
                    <option value="4">Has due date</option>
                </select>
                <p className='small mb-0 ms-4 me-2 text-muted'>Sort</p>
                <select className='select'>
                    <option value="1">Added date</option>
                    <option value="2">Due date</option>
                </select>
                <i style={{ margin: "10px", color: "green" }} className="fa-solid fa-arrow-down-short-wide"></i>
            </div>
        </div>
    )
}