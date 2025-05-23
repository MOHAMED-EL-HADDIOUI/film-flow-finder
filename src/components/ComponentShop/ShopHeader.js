import React from 'react'

const ShopHeader = () => {
    return (
        <div>
            <div style={{backgroundColor:"#220000"}} className="container-fluid py-3">
                <div className="row py-5">
                    <div className="col text-white text-center py-5">
                        <h3>CHOOSE YOUR FAVORITE MOVIES</h3>
                        <h1><strong>SHOP</strong></h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ol className="breadcrumb justify-content-center py-3">
                        <li className="breadcrumb-item text-danger"><a>Home</a></li>
                        <li className="breadcrumb-item active">Shop</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default ShopHeader
