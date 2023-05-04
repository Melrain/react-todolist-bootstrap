export const Frame = (props) => {
    return (
        <div>
            <div className='vh-100'>
                <div className="container py-5 h-100">
                    <div className='row d-flex justify-content-center align-items-center h-100'>
                        <div className='col'>
                            {/* 大卡片范围 */}
                            <div className='card' id="list1" style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }} >
                                <div className='card-body py-4 px-4 px-md-5'>
                                    {/* 大标题 */}
                                    <p className='h1 text-center mt-3 mb-4 pb-3 text-primary'>
                                        <i className='fas fa-check-square me-1'></i>
                                        <u>待办事项</u>
                                    </p>

                                    {props.input}
                                    {props.filter}
                                    {props.renderListFunction}
                                    {props.listItem02}
                                    {props.listItem03}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}