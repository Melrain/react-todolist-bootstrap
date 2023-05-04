export const Input = (props) => {
    return (
        <div>
            <div className='pb-2'>
                <div className='card'>
                    <div className='card-body'>
                        <div className='d-flex flex-row align-items-center'>
                            <input onChange={props.onChangeHandler} style={{ border: "0px", boxShadow: "none" }} type="text" placeholder='添加事项...' className='form-control form-control-lg' id="myInput" />

                            <a style={{ margin: "10px" }} href='#!' data-mdb-toggle="tooltip" title='Set due date'>
                                <i className="fa-solid fa-calendar-days"></i>
                            </a>

                            <div>
                                <button type='button' className='btn btn-primary' onClick={props.onClickHandle}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}