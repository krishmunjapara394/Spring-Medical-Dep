
const Dashboard = () => {
    return (
        <>
            <div class="wrapper">
                <aside id="sidebar">
                    <div class="sticky-sidebar">
                        <div class="d-flex mt-3" id="sidebar-js">
                            <button class="toggle-btn" type="button">
                                <i class="lni lni-grid-alt fw-bold fs-2"></i>
                            </button>
                            <div class="sidebar-logo ms-3">
                                <a href="#"><img src="./images/logo-2.svg" alt="" /></a>
                            </div>
                        </div>
                        <ul class="sidebar-nav">
                            <li class="sidebar-item" id="sidebar-item">
                                <a href="#" class="sidebar-link border-top border-bottom">
                                    <img style={{borderRadius: "50%", marginLeft: "-10px"}} src="./images/profile-1.png"
                                        width="40px" height="40px" alt="" />
                                        <span class="ps-4 fw-bold fs-6">Super Admin</span>
                                </a>
                            </li>
                            <div id="sidebar-li">
                            </div>
                        </ul>
                    </div>
                </aside>
            </div>
        </>
    )
}

export default Dashboard